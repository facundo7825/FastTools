# Registro central del catálogo — diseño

**Fecha:** 2026-07-30
**Rama:** `fix/tanda-1-calidad-base`
**Estado:** aprobado, pendiente de plan de implementación

## Problema

El catálogo de 32 herramientas está escrito a mano en 6 archivos y 11 arrays. La ruta
de cada herramienta aparece unas 5 veces. Eso ya produjo desincronización real:

- **28 de las 32 herramientas** tienen una descripción distinta en la página de
  categoría y en su propia página. Solo coinciden 4.
- **4 herramientas tienen tres nombres distintos** según dónde se las mire (listado,
  H1, breadcrumb). `/texto/texto-a-lista` alterna entre dos nombres en 6 lugares.
- Los generadores aparecen **en distinto orden** en la home que en el resto.
- Cada categoría tiene **3 descripciones distintas** y hasta 3 eyebrows distintos.
- Los `stats` de la home son el literal `"32"`: se desincroniza al agregar la 33ª.
- Cada pregunta de FAQ está escrita **dos veces**, idéntica: una en el JSON-LD y otra
  en el JSX. Las dos copias pueden divergir en silencio, y entonces lo que ve Google
  deja de ser lo que ve el usuario.

En SEO interno, el grafo de "herramientas relacionadas" (89 aristas a mano) tiene
**7 herramientas huérfanas** con in-degree 0 y un 60 % de aristas asimétricas. Dos de
las tres herramientas que la home promociona como nuevas están entre las huérfanas: el
enlazado interno trabaja en contra de la estrategia de destacados.

Fuera de alcance de este spec pero ya resuelto en `1d20fea`: las 32 páginas heredaban
`canonical: "/"` del layout raíz, declarándose duplicados de la home.

## Decisiones tomadas

1. **El registro es dueño del copy, las páginas conservan su JSX de contenido.**
   Descartada la variante de páginas mínimas: metería el cuerpo de los artículos en un
   archivo de datos de ~2000 líneas y quitaría flexibilidad de maquetado por herramienta.
2. **Relacionadas curadas con relleno automático.** Se conservan las 89 aristas hechas
   a mano, que son de buena calidad, y un helper completa hasta 3 cuando faltan.
   Descartada la derivación total (pierde relaciones finas como
   `quitar-saltos-linea ↔ eliminar-lineas-duplicadas`) y la curación estricta (obliga a
   curar a mano con cada herramienta nueva).
3. **Imagen OG por herramienta**, con factory compartido.

## Arquitectura

Dos archivos de datos y uno de derivación. La separación existe porque el archivo de
datos crece con cada herramienta y la lógica debe poder leerse sin atravesarlo.

### `src/lib/tools.ts` — datos puros

Sin JSX ni imports de React, para que lo pueda consumir el sitemap y cualquier script.

```ts
export type CategorySlug = "texto" | "generadores" | "calculadoras";

export type Category = {
  slug: CategorySlug;
  title: string;          // "Herramientas de texto"
  shortTitle: string;     // "Texto" — badges, breadcrumbs, grillas
  eyebrow: string;        // una sola, hoy hay hasta 3 por categoria
  description: string;    // una sola, hoy hay 3 por categoria
  metaDescription: string;
  accent: string;         // clases Tailwind de gradiente
};

export type Tool = {
  slug: string;                 // "texto-a-lista", sin la categoria
  category: CategorySlug;
  title: string;                // nombre canonico: H1 y listados
  shortTitle?: string;          // breadcrumbs y grillas apretadas
  description: string;          // descripcion corta unica
  metaTitle: string;            // titulo SEO largo, sin la marca
  metaDescription: string;
  badge?: string;               // "Nueva", "SEO", "Top"
  related: string[];            // slugs curados, 0..n
  howTo?: { name: string; steps: string[] };
  faq?: { q: string; a: string }[];
};

export type Collection = {
  title: string;
  description: string;
  slugs: string[];        // referencias al registro, no copias del nombre
};

export const CATEGORIES: Category[];
export const TOOLS: Tool[];     // el orden del array ES el orden de presentacion
export const COLLECTIONS: Collection[];
```

**Los slugs son únicos a nivel global, no por categoría.** Por eso `related` y
`Collection.slugs` pueden ser slugs pelados sin prefijo de categoría, y por eso el
invariante de slugs duplicados no es cosmético: es lo que mantiene válida esa
referencia corta. Hoy se cumple (ninguna herramienta repite slug entre categorías) y el
invariante lo convierte en garantía.

**Las colecciones son editoriales, no derivadas.** Agrupaciones como "SEO y contenido"
o "Listas y limpieza" expresan un criterio humano que no sale de ningún campo de
`Tool`. Se quedan escritas a mano, pero pasan a referenciar slugs en vez de repetir
títulos y URLs — que es de donde salían las divergencias. Hoy la home y `/texto` tienen
colecciones con el mismo título y distinto contenido; el registro las unifica en una
sola definición y cada página muestra las que le corresponden.

**Destacadas:** `featuredTools` deja de ser una lista aparte. Se deriva como las
herramientas con `badge`, en el orden de `TOOLS`, y cada consumidor toma las que
entren en su grilla. Hoy la home muestra 3 y `/herramientas` muestra 4 con distinto
criterio, y una de las 4 lleva `badge: "Top"` bajo un encabezado que dice "nuevas".

**Por qué `title` y `metaTitle` conviven.** Los cuatro nombres triples son accidentes y
hay que eliminarlos, pero que el `<title>` diga "Contador de palabras online gratis" y
el H1 diga "Contador de palabras" no lo es: es buena práctica. El registro tiene que
poder expresar esa diferencia sin volver a habilitar divergencias no intencionales.
Misma lógica para `description` y `metaDescription`.

`href` no es un campo: se deriva como `/${category}/${slug}`. Un campo sería una cuarta
forma de que la ruta se desincronice.

### `src/lib/tool-registry.ts` — derivación

```ts
getTool(slug): Tool                    // lanza si no existe
getCategory(slug): Category
toolHref(tool): string                 // `/${category}/${slug}`
toolsByCategory(category): Tool[]
toolMetadata(slug): Metadata           // title, description, canonical, OG, twitter
breadcrumbFor(slug): Crumb[]           // Inicio > Categoria > Herramienta
relatedFor(slug): Tool[]               // curadas + relleno, siempre >= 3
toolJsonLd(slug): object               // @graph: SoftwareApplication, BreadcrumbList,
                                       //         HowTo?, FAQPage?
categoryJsonLd(slug): object           // BreadcrumbList + ItemList
```

`toolMetadata` es la que elimina el canonical heredado, agrega el OG y el Twitter que
hoy no tiene ninguna de las 32, y garantiza que el `title` no vuelva a duplicar la marca.

### `src/lib/tool-registry.invariants.ts` — validación en build

Se ejecuta al importar el registro, de modo que **el build falla** ante:

- slugs duplicados
- un `related` que apunta a un slug inexistente
- una herramienta que se enlaza a sí misma
- una herramienta con in-degree 0 después del relleno
- un slug del registro sin su `page.tsx` en disco
- una categoría sin herramientas

Hoy nada de esto se detecta hasta que un usuario cae en un 404.

## Relacionadas: algoritmo de relleno

```
relatedFor(slug):
  1. tomar tool.related, en orden, descartando el propio slug y los inexistentes
  2. si hay >= 3, devolver las primeras 3
  3. completar con herramientas de la misma categoria, ordenadas por
     in-degree ascendente (las huerfanas primero), excluyendo las ya elegidas
  4. si la categoria se agota, completar con otras categorias por el mismo criterio
```

El desempate por in-degree ascendente es lo que ataca el problema de fondo:
`quitar-espacios` recibe hoy 8 enlaces y 7 herramientas reciben cero. El relleno empuja
enlaces hacia las huérfanas en vez de reforzar los hubs.

El in-degree se calcula sobre las aristas **curadas**, no sobre el resultado del
relleno, para que la función sea determinista y no dependa del orden de evaluación.

## Consumidores

| Archivo | Qué deriva |
|---|---|
| `src/app/page.tsx` | `categories`, destacadas (por `badge`), colecciones, `tools`, `stats` |
| `src/app/herramientas/page.tsx` | destacadas y las 3 categorías con sus herramientas |
| `src/app/{texto,generadores,calculadoras}/page.tsx` | listado, metadata, JSON-LD nuevo |
| `src/app/sitemap.ts` | las 41 rutas |
| 32 × `page.tsx` | `metadata`, breadcrumb, relacionadas, JSON-LD, FAQ del JSX |
| `src/components/Footer.tsx` | las 3 categorías |

Los `stats` de la home pasan a calcularse: `TOOLS.length` y `CATEGORIES.length`.
Se elimina el literal `"32"` y el `"3"` duplicado en dos métricas distintas.

### Cambios en componentes

`ToolLayout` recibe hoy `breadcrumb` y `relatedTools` como `ReactNode`, así que cada
página instancia los componentes a mano — de ahí salieron las divergencias de label.
Pasa a recibir `slug` y armarlos internamente. `categoryHref` + `categoryLabel`
desaparecen: son una referencia de categoría desnormalizada en dos props.

`Breadcrumb` usa `label` y `RelatedTools` usa `title` para el mismo concepto. Se unifica
en `title`. `Breadcrumb` agrega `aria-current="page"` en el último crumb, que hoy falta.

## SEO nuevo

- `openGraph` y `twitter` en las 32 (hoy: cero).
- `BreadcrumbList` JSON-LD: las migas existen visualmente pero no para buscadores.
- `SoftwareApplication` por herramienta.
- JSON-LD en las 3 categorías, que hoy no tienen ninguno.
- `sitemap.ts` deja de usar `lastModified: new Date()`, que marca todas las URLs como
  modificadas en cada build y es una señal ruidosa.

### Imagen OG

`src/lib/og-image.tsx` expone un factory con `ImageResponse`. Cada herramienta tiene un
`opengraph-image.tsx` de 3 líneas que le pasa su slug; los 32 se generan por script
desde el registro. Un `opengraph-image.tsx` en la raíz cubre el resto con la marca.

## Correcciones incluidas

Dos typos detectados en descripciones que se reescriben de todos modos:

- `texto-a-lista`: "una lista lista para pegar"
- `imc`: "Obtiene una referencia rápida" → "Obtén"

## Verificación

Además de `tsc`, `eslint` y `npm run build`, comprobación sobre el **HTML generado**:

1. Las 32 emiten canonical propio, `og:title`, `og:description`, `og:image`.
2. Las 32 emiten `BreadcrumbList` y `SoftwareApplication` válidos.
3. Ningún `<title>` duplica la marca ni carece de ella.
4. Cero residuos de texto sin acentuar (script de la tanda 1).
5. **Nuevo:** los títulos y descripciones que rinde cada listado coinciden con el
   registro. Es exactamente lo que hoy no se cumple, así que es el chequeo que prueba
   que el refactor cumplió su objetivo.
6. Los 60 `href` siguen resolviendo y las rutas no cambiaron.

## Fuera de alcance

- Buscador de herramientas y modo oscuro (tanda 3).
- Tests con Vitest sobre la lógica pura (tanda 3). El registro y `relatedFor` sí son
  candidatos naturales, pero montar el runner es trabajo aparte.
- Reordenar `ToolLayout` para que la herramienta quede sobre el pliegue (tanda 3).
- El conflicto de doble `<meta name="robots">` en el 404. Gana `noindex` por ser la
  directiva más restrictiva, así que funciona; se limpia cuando el layout deje de
  imponer `robots` global.
- Modo inverso de la regla de tres, y la deduplicación de `GeneradorNombresUsuario` que
  puede devolver menos sugerencias que las pedidas. Son decisiones de producto.
- Consolidar el helper de aleatoriedad duplicado en `GeneradorPassword` y
  `GeneradorNombresUsuario`. Entra naturalmente al crear `src/lib/`, pero es
  independiente del catálogo.
