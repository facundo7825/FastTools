# Registro central del catálogo — plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir el catálogo de 32 herramientas en una fuente única de verdad (`src/lib/tools.ts`) de la que deriven listados, metadata, breadcrumbs, relacionadas, JSON-LD y sitemap.

**Architecture:** Datos puros en `tools.ts`, derivación en `tool-registry.ts`, invariantes que rompen el build en `tool-registry.invariants.ts`. Los consumidores (home, `/herramientas`, 3 categorías, sitemap, 32 páginas) dejan de tener listas propias. Las páginas conservan su JSX de contenido.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind 4, Vitest 3.

**Spec:** `docs/superpowers/specs/2026-07-30-registro-central-catalogo-design.md`

## Global Constraints

- **Español:** todo el texto visible lleva acentos, eñes y signos de apertura (`¿`, `¡`). Registro: **tuteo neutro** (nunca voseo: no `escribí`, `podés`, `pegá`, `acá`).
- **Slugs en ASCII.** Las rutas ya están indexadas: `/texto/contador-lineas` no cambia jamás. Ningún `href` puede cambiar de valor.
- **Slugs únicos a nivel global**, no por categoría. De eso depende que `related` use slugs pelados.
- **Nunca `Math.random()`** para nada que sea seguridad o identificadores; usar `crypto.getRandomValues()` / `crypto.randomUUID()`.
- **Identificadores JS sin acentos** (`ContadorPalabras`, `categoria`), solo el texto visible los lleva.
- Los títulos de `metadata.title` **no incluyen la marca** (el template `"%s | FastTools"` del layout la agrega). Los de `openGraph`/`twitter` **sí**, porque no reciben el template.
- Verificación mínima de cada tarea: `npx tsc --noEmit` y `npx eslint src` en exit 0.
- `AGENTS.md`: esta versión de Next tiene cambios respecto al conocimiento previo. Consultar `node_modules/next/dist/docs/` antes de usar una API de Next que no esté ya en el repo.

---

## Nota sobre el alcance de los tests

El spec aprobado deja Vitest para la tanda 3. La Tarea 1 lo adelanta **solo** para la lógica del registro, porque `relatedFor()` tiene un desempate por in-degree cuyo error sería silencioso: mostraría relacionadas incorrectas sin que nada falle. Es ~10 minutos de setup. Si preferís no ampliar el alcance, saltá la Tarea 1 y reemplazá cada paso de test por la verificación de build de la Tarea 4; el resto del plan no cambia.

---

### Task 1: Setup de Vitest

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Test: `src/lib/tools.test.ts`

**Interfaces:**
- Consumes: nada.
- Produces: comando `npm test`; convención de tests en `src/**/*.test.ts`.

- [ ] **Step 1: Instalar Vitest**

```bash
npm install -D vitest@^3
```

- [ ] **Step 2: Crear la config**

`vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

El alias replica el `@/*` de `tsconfig.json`; sin él los imports de los tests fallan.

- [ ] **Step 3: Agregar el script**

En `package.json`, dentro de `"scripts"`, agregar:

```json
"test": "vitest run"
```

- [ ] **Step 4: Verificar que el runner arranca**

Run: `npx vitest run --passWithNoTests`
Expected: exit 0. Todavía no hay tests: esta tarea entrega el runner, no aserciones.

Run: `npx tsc --noEmit && npx eslint src`
Expected: ambos exit 0.

**Esta tarea no crea ningún archivo de test.** Un test que importe `@/lib/tools`
—que recién existe en la Tarea 2— deja `tsc` en rojo, y ningún commit del plan puede
dejar el build roto. El ciclo rojo→verde de TDD sigue existiendo: ocurre dentro del
árbol de trabajo de la Tarea 2 y se commitea una vez en verde, que es la práctica
habitual.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts
git commit -m "test: agregar vitest para la logica del registro"
```

---

### Task 2: Datos del catálogo

**Files:**
- Create: `src/lib/tools.ts`
- Test: `src/lib/tools.test.ts` (extender)

**Interfaces:**
- Consumes: nada.
- Produces: `CategorySlug`, `Category`, `Tool`, `Collection`, `CATEGORIES`, `TOOLS`, `COLLECTIONS`. Todas las tareas siguientes dependen de estos nombres exactos.

**Regla determinista para resolver las divergencias.** Hay hasta 4 variantes de texto por herramienta. No elijas por gusto, aplicá esto:

| Campo del registro | De dónde sale |
|---|---|
| `title` | El título del listado de la página de categoría (los 3 listados coinciden en los 32) |
| `shortTitle` | Solo si el breadcrumb o la home usaban un nombre más corto distinto |
| `description` | El prop `description` que la página pasa a `ToolLayout` (subtítulo del H1) |
| `metaTitle` | El `metadata.title` actual, **sin** la marca |
| `metaDescription` | El `metadata.description` actual |
| `related` | El array que la página pasa a `<RelatedTools>`, convertido a slugs pelados |
| `howTo` / `faq` | El `jsonLd` actual de la página |

- [ ] **Step 1: Escribir los tipos y las categorías**

```ts
export type CategorySlug = "texto" | "generadores" | "calculadoras";

export type Category = {
  slug: CategorySlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  metaDescription: string;
  accent: string;
};

export type Tool = {
  slug: string;
  category: CategorySlug;
  title: string;
  shortTitle?: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  badge?: string;
  related: string[];
  howTo?: { name: string; steps: string[] };
  faq?: { q: string; a: string }[];
};

export type Collection = {
  title: string;
  description: string;
  slugs: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "texto",
    title: "Herramientas de texto",
    shortTitle: "Texto",
    eyebrow: "Escribir, ordenar y ajustar",
    description:
      "Contadores, limpieza, líneas, keywords, slugs, listas, JSON y conversiones útiles.",
    metaDescription:
      "Herramientas online para trabajar con texto: contadores, limpieza, líneas, keywords, slugs, listas y conversiones. Gratis y sin registro.",
    accent: "from-[#f59e0b]/20 via-[#fffdf7] to-transparent",
  },
  {
    slug: "generadores",
    title: "Generadores online",
    shortTitle: "Generadores",
    eyebrow: "Crear sin fricción",
    description:
      "Contraseñas, códigos QR, UUID, hashes, usernames y texto de relleno.",
    metaDescription:
      "Generadores online gratuitos para contraseñas, códigos QR, UUID, hashes, usernames y texto de relleno. Rápidos y sin registro.",
    accent: "from-[#0f766e]/20 via-[#fffdf7] to-transparent",
  },
  {
    slug: "calculadoras",
    title: "Calculadoras online",
    shortTitle: "Calculadoras",
    eyebrow: "Resolver con menos pasos",
    description:
      "Porcentaje, descuento, promedio, aumentos, edad, IMC, temperatura y más.",
    metaDescription:
      "Calculadoras online gratuitas para porcentaje, descuento, promedio, aumento porcentual, edad, regla de tres, IMC y temperatura.",
    accent: "from-[#ef4444]/14 via-[#fffdf7] to-transparent",
  },
];
```

Nota: la `metaDescription` de calculadoras ya no enumera las 8 herramientas, porque la versión actual se rompe al agregar la novena.

- [ ] **Step 2: Volcar las 32 herramientas**

Recorré los 32 `src/app/{categoria}/{slug}/page.tsx` y armá una entrada por cada uno aplicando la tabla de arriba. El **orden del array es el orden de presentación**: usá el de `src/app/{categoria}/page.tsx`, que es el consistente (la home tiene `hashes` y `nombres-usuario` invertidos — ese orden se descarta).

`related` se convierte de href a slug: `{ href: "/texto/contador-palabras" }` → `"contador-palabras"`.

Ejemplo completo de una entrada, para que copies el formato exacto:

```ts
export const TOOLS: Tool[] = [
  {
    slug: "contador-palabras",
    category: "texto",
    title: "Contador de palabras",
    description: "Cuenta las palabras de tu texto en tiempo real.",
    metaTitle: "Contador de palabras online gratis",
    metaDescription:
      "Cuenta palabras de cualquier texto en tiempo real. Útil para ensayos, artículos, contenido SEO y trabajos académicos. Gratis y sin registro.",
    related: ["contador-caracteres", "quitar-espacios", "capitalizar-texto"],
    howTo: {
      name: "Cómo contar palabras de un texto",
      steps: [
        "Pega o escribe tu texto en el campo de entrada.",
        "El número de palabras se actualiza automáticamente.",
        "Usa Copiar para copiar el texto o Limpiar para vaciarlo.",
      ],
    },
    faq: [
      {
        q: "¿Cómo se cuentan las palabras con guiones?",
        a: "Las palabras unidas por guion, como bien-estar, suelen contarse como una sola palabra. Las separadas por espacio se cuentan individualmente.",
      },
      // ... las demás preguntas de esa página
    ],
  },
  // ... las 31 restantes
];
```

Correcciones obligatorias al volcar (typos detectados en el inventario):

- `texto-a-lista`: el `metaDescription` actual repite la palabra "lista". Antes:
  `"...en una lista lista para pegar donde quieras."` Después:
  `"...en una lista para pegar donde quieras."`
- `imc`: `metaDescription` dice `"Obtiene una referencia rápida"` → `"Obtén una referencia rápida"`

`shortTitle` solo en las 4 herramientas donde el nombre corto existía de verdad:
`texto-a-lista` → `"Texto a lista"`, `densidad-keyword` → `"Densidad de keyword"`,
`contador-caracteres-sin-espacios` → `"Contador sin espacios"`,
`ordenar-lineas` → `"Ordenar líneas"`.

`badge` en las que hoy lo tienen en la home o en `/herramientas`:
`generador-slug` → `"Nueva"`, `densidad-keyword` → `"SEO"`, `texto-a-lista` → `"Nueva"`,
`nombres-usuario` → `"Top"`.

- [ ] **Step 3: Escribir las colecciones**

Unificá las de `src/app/page.tsx` y las de `src/app/texto/page.tsx`, que hoy tienen títulos iguales con contenido distinto:

```ts
export const COLLECTIONS: Collection[] = [
  {
    title: "SEO y contenido",
    description: "Para limpiar textos, medir keywords y preparar URLs más prolijas.",
    slugs: ["contador-palabras-clave", "densidad-keyword", "generador-slug"],
  },
  {
    title: "Listas y limpieza",
    description: "Para transformar texto desordenado en algo reutilizable rápido.",
    slugs: ["eliminar-lineas-duplicadas", "ordenar-lineas", "texto-a-lista"],
  },
  {
    title: "Dev rápido",
    description: "Un bloque técnico para datos, hashes y utilidades de desarrollo.",
    slugs: ["json-pretty-print", "uuid", "hashes"],
  },
];
```

- [ ] **Step 4: Crear el test**

Escribí `src/lib/tools.test.ts` completo (la Tarea 1 no lo creó, justamente para no
dejar un commit con `tsc` en rojo). Escribilo **antes** de dar por buena la data: si
alguno de estos falla, es el volcado el que está mal, no el test.

```ts
import { describe, expect, it } from "vitest";
import { CATEGORIES, COLLECTIONS, TOOLS } from "@/lib/tools";

describe("TOOLS", () => {
  it("tiene las 32 herramientas publicadas", () => {
    expect(TOOLS).toHaveLength(32);
  });

  it("no repite slugs", () => {
    const slugs = TOOLS.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("usa solo categorias declaradas", () => {
    const known = new Set(CATEGORIES.map((c) => c.slug));
    for (const tool of TOOLS) expect(known.has(tool.category)).toBe(true);
  });

  it("no deja campos de texto vacios", () => {
    for (const tool of TOOLS) {
      expect(tool.title.length).toBeGreaterThan(0);
      expect(tool.description.length).toBeGreaterThan(0);
      expect(tool.metaTitle.length).toBeGreaterThan(0);
      expect(tool.metaDescription.length).toBeGreaterThan(0);
    }
  });

  it("no mete la marca en metaTitle", () => {
    for (const tool of TOOLS) expect(tool.metaTitle).not.toContain("FastTools");
  });

  it("solo referencia slugs existentes en las colecciones", () => {
    const known = new Set(TOOLS.map((t) => t.slug));
    for (const c of COLLECTIONS) {
      for (const slug of c.slugs) expect(known.has(slug)).toBe(true);
    }
  });
});
```

- [ ] **Step 5: Verificar**

Run: `npm test && npx tsc --noEmit && npx eslint src`
Expected: los 6 tests PASS, tsc y eslint exit 0.

- [ ] **Step 6: Commit**

```bash
git add src/lib/tools.ts src/lib/tools.test.ts
git commit -m "feat: agregar el registro central del catalogo"
```

---

### Task 3: Derivación

**Files:**
- Create: `src/lib/tool-registry.ts`
- Test: `src/lib/tool-registry.test.ts`

**Interfaces:**
- Consumes: `CATEGORIES`, `TOOLS`, `COLLECTIONS`, tipos `Tool`/`Category` de la Tarea 2.
- Produces: `getTool(slug): Tool`, `getCategory(slug): Category`, `toolHref(tool): string`, `toolsByCategory(slug): Tool[]`, `featuredTools(limit?): Tool[]`, `relatedFor(slug): Tool[]`, `breadcrumbFor(slug): Crumb[]`, `toolMetadata(slug): Metadata`, `toolJsonLd(slug): object`, `categoryJsonLd(slug): object`, y el tipo `Crumb = { href: string; title: string }`.

- [ ] **Step 1: Tests que fallan**

`src/lib/tool-registry.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { TOOLS } from "@/lib/tools";
import {
  breadcrumbFor,
  getTool,
  relatedFor,
  toolHref,
  toolMetadata,
  toolsByCategory,
} from "@/lib/tool-registry";

describe("toolHref", () => {
  it("compone la ruta desde categoria y slug", () => {
    expect(toolHref(getTool("contador-palabras"))).toBe("/texto/contador-palabras");
  });
});

describe("getTool", () => {
  it("lanza si el slug no existe", () => {
    expect(() => getTool("no-existe")).toThrow(/no-existe/);
  });
});

describe("toolsByCategory", () => {
  it("devuelve solo las de esa categoria", () => {
    const tools = toolsByCategory("generadores");
    expect(tools).toHaveLength(6);
    for (const t of tools) expect(t.category).toBe("generadores");
  });
});

describe("relatedFor", () => {
  it("devuelve siempre al menos 3", () => {
    for (const tool of TOOLS) {
      expect(relatedFor(tool.slug).length).toBeGreaterThanOrEqual(3);
    }
  });

  it("nunca se incluye a si misma", () => {
    for (const tool of TOOLS) {
      expect(relatedFor(tool.slug).map((t) => t.slug)).not.toContain(tool.slug);
    }
  });

  it("no repite herramientas", () => {
    for (const tool of TOOLS) {
      const slugs = relatedFor(tool.slug).map((t) => t.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("respeta las curadas antes que el relleno", () => {
    const tool = getTool("contador-palabras");
    const got = relatedFor("contador-palabras").map((t) => t.slug);
    expect(got.slice(0, tool.related.length)).toEqual(tool.related);
  });

  it("deja cero huerfanas contando el relleno", () => {
    const inbound = new Set<string>();
    for (const tool of TOOLS) {
      for (const rel of relatedFor(tool.slug)) inbound.add(rel.slug);
    }
    const orphans = TOOLS.filter((t) => !inbound.has(t.slug)).map((t) => t.slug);
    expect(orphans).toEqual([]);
  });

  it("es determinista", () => {
    expect(relatedFor("ordenar-lineas").map((t) => t.slug)).toEqual(
      relatedFor("ordenar-lineas").map((t) => t.slug),
    );
  });
});

describe("breadcrumbFor", () => {
  it("arma inicio, categoria y herramienta", () => {
    expect(breadcrumbFor("contador-palabras")).toEqual([
      { href: "/", title: "Inicio" },
      { href: "/texto", title: "Texto" },
      { href: "/texto/contador-palabras", title: "Contador de palabras" },
    ]);
  });

  it("usa shortTitle cuando existe", () => {
    const crumbs = breadcrumbFor("texto-a-lista");
    expect(crumbs[crumbs.length - 1].title).toBe("Texto a lista");
  });
});

describe("toolMetadata", () => {
  it("declara el canonical propio", () => {
    expect(toolMetadata("contador-palabras").alternates?.canonical).toBe(
      "/texto/contador-palabras",
    );
  });

  it("no duplica la marca en el title", () => {
    expect(toolMetadata("contador-palabras").title).not.toContain("FastTools");
  });

  it("pone la marca en openGraph, que no recibe el template", () => {
    const og = toolMetadata("contador-palabras").openGraph;
    expect(og?.title).toContain("FastTools");
  });
});
```

- [ ] **Step 2: Verificar que fallan**

Run: `npm test`
Expected: FAIL — `Cannot find module '@/lib/tool-registry'`.

- [ ] **Step 3: Implementar**

`src/lib/tool-registry.ts`:

```ts
import type { Metadata } from "next";
import {
  CATEGORIES,
  TOOLS,
  type Category,
  type CategorySlug,
  type Tool,
} from "@/lib/tools";

export type Crumb = { href: string; title: string };

const SITE_NAME = "FastTools";
const RELATED_COUNT = 3;

const bySlug = new Map(TOOLS.map((tool) => [tool.slug, tool]));
const categoryBySlug = new Map(CATEGORIES.map((cat) => [cat.slug, cat]));

export function getTool(slug: string): Tool {
  const tool = bySlug.get(slug);
  if (!tool) throw new Error(`Herramienta desconocida: ${slug}`);
  return tool;
}

export function getCategory(slug: CategorySlug): Category {
  const category = categoryBySlug.get(slug);
  if (!category) throw new Error(`Categoria desconocida: ${slug}`);
  return category;
}

export function toolHref(tool: Tool): string {
  return `/${tool.category}/${tool.slug}`;
}

export function toolsByCategory(slug: CategorySlug): Tool[] {
  return TOOLS.filter((tool) => tool.category === slug);
}

export function featuredTools(limit = 3): Tool[] {
  return TOOLS.filter((tool) => tool.badge).slice(0, limit);
}

/**
 * In-degree calculado SOLO sobre las aristas curadas. Si contara el relleno,
 * el resultado dependeria del orden de evaluacion y dejaria de ser determinista.
 */
const curatedInDegree = (() => {
  const counts = new Map(TOOLS.map((tool) => [tool.slug, 0]));
  for (const tool of TOOLS) {
    for (const slug of tool.related) {
      if (slug !== tool.slug && counts.has(slug)) {
        counts.set(slug, (counts.get(slug) ?? 0) + 1);
      }
    }
  }
  return counts;
})();

export function relatedFor(slug: string): Tool[] {
  const tool = getTool(slug);
  const chosen: Tool[] = [];
  const taken = new Set<string>([slug]);

  for (const candidate of tool.related) {
    if (chosen.length >= RELATED_COUNT) break;
    if (taken.has(candidate)) continue;
    const related = bySlug.get(candidate);
    if (!related) continue;
    chosen.push(related);
    taken.add(candidate);
  }

  if (chosen.length < RELATED_COUNT) {
    // Prioriza las menos enlazadas: el relleno empuja enlaces hacia las
    // huerfanas en vez de reforzar los hubs. Misma categoria primero.
    const fill = TOOLS.filter((c) => !taken.has(c.slug)).sort((a, b) => {
      const sameA = a.category === tool.category ? 0 : 1;
      const sameB = b.category === tool.category ? 0 : 1;
      if (sameA !== sameB) return sameA - sameB;
      const degA = curatedInDegree.get(a.slug) ?? 0;
      const degB = curatedInDegree.get(b.slug) ?? 0;
      if (degA !== degB) return degA - degB;
      return a.slug.localeCompare(b.slug);
    });

    for (const candidate of fill) {
      if (chosen.length >= RELATED_COUNT) break;
      chosen.push(candidate);
      taken.add(candidate.slug);
    }
  }

  return chosen;
}

export function breadcrumbFor(slug: string): Crumb[] {
  const tool = getTool(slug);
  const category = getCategory(tool.category);
  return [
    { href: "/", title: "Inicio" },
    { href: `/${category.slug}`, title: category.shortTitle },
    { href: toolHref(tool), title: tool.shortTitle ?? tool.title },
  ];
}

export function toolMetadata(slug: string): Metadata {
  const tool = getTool(slug);
  const href = toolHref(tool);
  const branded = `${tool.metaTitle} | ${SITE_NAME}`;

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: { canonical: href },
    openGraph: {
      title: branded,
      description: tool.metaDescription,
      url: href,
      type: "website",
    },
    twitter: {
      title: branded,
      description: tool.metaDescription,
    },
  };
}

export function toolJsonLd(slug: string) {
  const tool = getTool(slug);
  const graph: object[] = [
    {
      "@type": "SoftwareApplication",
      name: tool.title,
      description: tool.description,
      url: toolHref(tool),
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbFor(slug).map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.title,
        item: crumb.href,
      })),
    },
  ];

  if (tool.howTo) {
    graph.push({
      "@type": "HowTo",
      name: tool.howTo.name,
      step: tool.howTo.steps.map((text) => ({ "@type": "HowToStep", text })),
    });
  }

  if (tool.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: tool.faq.map((entry) => ({
        "@type": "Question",
        name: entry.q,
        acceptedAnswer: { "@type": "Answer", text: entry.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function categoryJsonLd(slug: CategorySlug) {
  const category = getCategory(slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: category.shortTitle,
            item: `/${category.slug}`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: category.title,
        itemListElement: toolsByCategory(slug).map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tool.title,
          url: toolHref(tool),
        })),
      },
    ],
  };
}
```

- [ ] **Step 4: Verificar que pasan**

Run: `npm test && npx tsc --noEmit && npx eslint src`
Expected: todos PASS. Si "deja cero huerfanas" falla, el relleno no alcanzó: revisá que `RELATED_COUNT` sea 3 y que el sort priorice in-degree ascendente.

- [ ] **Step 5: Commit**

```bash
git add src/lib/tool-registry.ts src/lib/tool-registry.test.ts
git commit -m "feat: derivar metadata, breadcrumbs y relacionadas del registro"
```

---

### Task 4: Invariantes que rompen el build

**Files:**
- Create: `src/lib/tool-registry.invariants.ts`
- Modify: `src/lib/tool-registry.ts` (importar al final)
- Test: `src/lib/tool-registry.invariants.test.ts`

**Interfaces:**
- Consumes: `TOOLS`, `CATEGORIES`, `relatedFor`.
- Produces: `assertRegistryInvariants(): void` — lanza con un mensaje que lista todos los problemas juntos.

- [ ] **Step 1: Test que falla**

```ts
import { describe, expect, it } from "vitest";
import { assertRegistryInvariants } from "@/lib/tool-registry.invariants";

describe("assertRegistryInvariants", () => {
  it("pasa con el registro real", () => {
    expect(() => assertRegistryInvariants()).not.toThrow();
  });
});
```

- [ ] **Step 2: Verificar que falla**

Run: `npm test`
Expected: FAIL — módulo inexistente.

- [ ] **Step 3: Implementar**

```ts
import { CATEGORIES, TOOLS } from "@/lib/tools";
import { relatedFor, toolHref } from "@/lib/tool-registry";

export function assertRegistryInvariants(): void {
  const problems: string[] = [];
  const slugs = TOOLS.map((tool) => tool.slug);
  const known = new Set(slugs);

  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) problems.push(`slug duplicado: ${slug}`);
    seen.add(slug);
  }

  for (const tool of TOOLS) {
    for (const rel of tool.related) {
      if (rel === tool.slug) problems.push(`${tool.slug} se enlaza a si misma`);
      else if (!known.has(rel)) {
        problems.push(`${tool.slug} enlaza a un slug inexistente: ${rel}`);
      }
    }
  }

  const inbound = new Set<string>();
  for (const tool of TOOLS) {
    for (const rel of relatedFor(tool.slug)) inbound.add(rel.slug);
  }
  for (const tool of TOOLS) {
    if (!inbound.has(tool.slug)) problems.push(`huerfana: ${tool.slug}`);
  }

  for (const category of CATEGORIES) {
    if (!TOOLS.some((tool) => tool.category === category.slug)) {
      problems.push(`categoria sin herramientas: ${category.slug}`);
    }
  }

  if (problems.length) {
    throw new Error(
      `El registro de herramientas es invalido:\n  - ${problems.join("\n  - ")}`,
    );
  }
}

// Se ejecuta al importar el registro: cualquier consumidor rompe el build.
assertRegistryInvariants();
```

Nota: el chequeo de "slug sin `page.tsx` en disco" del spec **no** va acá, porque este módulo lo importan componentes que corren en el navegador y no pueden usar `node:fs`. Va en la Tarea 10, como script de verificación.

- [ ] **Step 4: Conectar al registro**

Al final de `src/lib/tool-registry.ts`:

```ts
import "@/lib/tool-registry.invariants";
```

- [ ] **Step 5: Verificar**

Run: `npm test && npm run build`
Expected: tests PASS, build exit 0.

- [ ] **Step 6: Probar que de verdad rompe**

Agregá temporalmente a `TOOLS` una entrada con `related: ["no-existe"]`, corré `npm run build` y confirmá que **falla** con el mensaje del invariante. Revertí el cambio después. Un invariante que nunca se probó fallando no sirve de nada.

- [ ] **Step 7: Commit**

```bash
git add src/lib/tool-registry.invariants.ts src/lib/tool-registry.invariants.test.ts src/lib/tool-registry.ts
git commit -m "feat: romper el build si el registro queda inconsistente"
```

---

### Task 5: Sitemap derivado

**Files:**
- Modify: `src/app/sitemap.ts`

**Interfaces:**
- Consumes: `TOOLS`, `CATEGORIES`, `toolHref`.
- Produces: nada nuevo.

- [ ] **Step 1: Reescribir**

```ts
import type { MetadataRoute } from "next";
import { CATEGORIES, TOOLS } from "@/lib/tools";
import { toolHref } from "@/lib/tool-registry";

const STATIC_PAGES = ["/", "/herramientas", "/sobre", "/privacidad", "/terminos", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fasttools.app";
  const paths = [
    ...STATIC_PAGES,
    ...CATEGORIES.map((category) => `/${category.slug}`),
    ...TOOLS.map(toolHref),
  ];

  return paths.map((path) => ({ url: `${base}${path}` }));
}
```

Se quita `lastModified: new Date()`: marcaba las 41 URLs como modificadas en cada build, que es una señal ruidosa para Google.

- [ ] **Step 2: Verificar**

Run: `npm run build && grep -c "<url>" .next/server/app/sitemap.xml.body`
Expected: 41.

Si el archivo no está en esa ruta, buscalo con `find .next -name "sitemap*"`.

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat: derivar el sitemap del registro"
```

---

### Task 6: Componentes

**Files:**
- Modify: `src/components/Breadcrumb.tsx`
- Modify: `src/components/RelatedTools.tsx`
- Modify: `src/components/ToolLayout.tsx`

**Interfaces:**
- Consumes: `Crumb`, `breadcrumbFor`, `relatedFor`, `getTool`, `getCategory`, `toolHref`.
- Produces: `ToolLayout` que acepta **el modo nuevo y el viejo a la vez**:
  `{ slug?: string; tool: ReactNode; content?: ReactNode }` más los legacy
  `{ title?, description?, categoryHref?, categoryLabel?, breadcrumb?, relatedTools? }`.
  Si viene `slug`, deriva todo del registro e ignora los legacy. Si no, usa los legacy.

**Por qué la compatibilidad temporal.** Si esta tarea cambiara la firma de golpe,
dejaría el typecheck roto hasta que la Tarea 7 migre las 32 páginas: un commit que no
compila en la historia, que rompe `git bisect` y hace imposible revertir la Tarea 7 por
separado. El modo dual mantiene cada commit verde. La Tarea 7 borra los legacy en su
último paso, así que el código transitorio no sobrevive al plan.

- [ ] **Step 1: Unificar el nombre del campo**

`Breadcrumb` usa `label` y `RelatedTools` usa `title` para lo mismo. Cambiá `Breadcrumb` a `title` para que ambos consuman el tipo `Crumb`/`Tool` sin traducción. En `Breadcrumb`, agregá `aria-current="page"` al último crumb, que hoy falta.

- [ ] **Step 2: `RelatedTools` recibe herramientas del registro**

```tsx
import Link from "next/link";
import type { Tool } from "@/lib/tools";
import { toolHref } from "@/lib/tool-registry";

type Props = { tools: Tool[] };
```

Dentro del map, `href={toolHref(tool)}` y `{tool.title}`. Mantené las clases exactas que ya tiene.

- [ ] **Step 3: `ToolLayout` en modo dual**

```tsx
import { breadcrumbFor, getCategory, getTool, relatedFor } from "@/lib/tool-registry";

type Props = {
  slug?: string;
  tool: ReactNode;
  content?: ReactNode;
  // Legacy: los usan las 32 paginas hasta que la Tarea 7 las migre.
  // Esta tarea los borra al terminar.
  title?: string;
  description?: string;
  categoryHref?: string;
  categoryLabel?: string;
  breadcrumb?: ReactNode;
  relatedTools?: ReactNode;
};

export default function ToolLayout(props: Props) {
  const { slug, tool, content } = props;

  const derived = slug
    ? (() => {
        const meta = getTool(slug);
        const category = getCategory(meta.category);
        return {
          title: meta.title,
          description: meta.description,
          categoryHref: `/${category.slug}`,
          categoryLabel: category.shortTitle,
          crumbs: breadcrumbFor(slug),
          related: relatedFor(slug),
          faq: meta.faq,
        };
      })()
    : null;

  const title = derived?.title ?? props.title ?? "";
  const description = derived?.description ?? props.description ?? "";
  // el resto del JSX usa estas variables; cuando derived es null,
  // rinde props.breadcrumb y props.relatedTools tal como hoy
}
```

Conservá el JSX y las clases actuales; solo cambia de dónde salen los datos.

- [ ] **Step 4: Verificar**

Run: `npx tsc --noEmit && npx eslint src && npm run build`
Expected: **todo exit 0**. Las 32 páginas siguen pasando los props viejos y siguen
funcionando; nada se rompe todavía.

- [ ] **Step 5: Commit**

```bash
git add src/components
git commit -m "refactor: los componentes de herramienta consumen el registro"
```

---

### Task 7: Migrar las 32 páginas

**Files:**
- Modify: los 32 `src/app/{texto,generadores,calculadoras}/*/page.tsx`

**Interfaces:**
- Consumes: `toolMetadata`, `toolJsonLd`, `ToolLayout` con la firma nueva.
- Produces: nada.

**Paralelizable:** son 3 dominios sin solapamiento (`texto` 18, `calculadoras` 8, `generadores` 6). Un agente por categoría.

- [ ] **Step 1: Aplicar la transformación**

Antes (`src/app/texto/contador-palabras/page.tsx`, 124 líneas):

```tsx
export const metadata: Metadata = { title: "...", description: "...", alternates: {...} };
const jsonLd = { "@context": "...", "@graph": [ /* HowTo y FAQPage a mano */ ] };
const content = ( <> {/* parrafos + FAQ repetida */} </> );

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout title="..." description="..." tool={<ContadorPalabras />} content={content}
        categoryHref="/texto" categoryLabel="Texto"
        breadcrumb={<Breadcrumb crumbs={[...]} />}
        relatedTools={<RelatedTools tools={[...]} />} />
    </>
  );
}
```

Después:

```tsx
import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ContadorPalabras from "./ContadorPalabras";

const SLUG = "contador-palabras";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El contador de palabras es útil para estudiantes, redactores, periodistas y
      creadores de contenido. {/* ...el cuerpo se conserva tal cual... */}
    </p>
    <h2>Cómo usar el contador de palabras</h2>
    <ol>{/* ...se conserva... */}</ol>
  </>
);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd(SLUG)) }}
      />
      <ToolLayout slug={SLUG} tool={<ContadorPalabras />} content={content} />
    </>
  );
}
```

Reglas de la migración:

1. Borrar el objeto `metadata` literal, el `jsonLd` literal y los imports de `Breadcrumb`/`RelatedTools`.
2. **Borrar del `content` el bloque de FAQ** (el `<h2>Preguntas frecuentes</h2>` y los `<h3>`/`<p>` que le siguen). Esas preguntas ya viven en el registro y las rinde `ToolLayout` desde `tool.faq`. Hoy están escritas dos veces y pueden divergir en silencio.
3. **Conservar intacto** el resto del `content`: párrafos introductorios, el "Cómo usar", tablas y ejemplos.
4. No tocar el componente cliente (`ContadorPalabras.tsx` y equivalentes).
5. **Al final, borrar los props legacy de `ToolLayout`** (`title`, `description`,
   `categoryHref`, `categoryLabel`, `breadcrumb`, `relatedTools`) y la rama que los
   usa. Con las 32 migradas ya no los consume nadie, y `slug` pasa a ser obligatorio.
   Si `tsc` falla acá, es que quedó una página sin migrar: eso es justamente lo que
   este paso detecta.

- [ ] **Step 2: Renderizar el FAQ en `ToolLayout`**

Como el paso anterior lo saca del `content`, `ToolLayout` tiene que mostrarlo. Debajo del bloque de `content`, si `meta.faq?.length`:

```tsx
{meta.faq?.length ? (
  <section className="rounded-[1.8rem] border border-border bg-surface px-5 py-6 shadow-sm sm:px-7">
    <h2 className="text-xl font-semibold text-text">Preguntas frecuentes</h2>
    <div className="mt-4 flex flex-col gap-4">
      {meta.faq.map((entry) => (
        <div key={entry.q}>
          <h3 className="text-sm font-semibold text-text">{entry.q}</h3>
          <p className="mt-1 text-sm text-muted">{entry.a}</p>
        </div>
      ))}
    </div>
  </section>
) : null}
```

- [ ] **Step 3: Verificar**

Run: `npm test && npx tsc --noEmit && npx eslint src && npm run build`
Expected: todo exit 0, 46 páginas generadas.

- [ ] **Step 4: Commit**

```bash
git add src/app src/components/ToolLayout.tsx
git commit -m "refactor: las 32 paginas derivan metadata y contenido del registro"
```

---

### Task 8: Listados

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/herramientas/page.tsx`
- Modify: `src/app/texto/page.tsx`, `src/app/generadores/page.tsx`, `src/app/calculadoras/page.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `CATEGORIES`, `TOOLS`, `COLLECTIONS`, `toolsByCategory`, `featuredTools`, `toolHref`, `categoryJsonLd`, `getTool`.
- Produces: nada.

- [ ] **Step 1: Borrar los 11 arrays**

Eliminá `categories`, `featuredTools`, `collections`, `tools` y `stats` de `src/app/page.tsx`; `featuredTools` y `categories` de `herramientas/page.tsx`; `tools` y `collections` de las 3 categorías. Reemplazá cada uso por la función del registro. Conservá el JSX y las clases.

- [ ] **Step 2: Calcular los stats**

En `src/app/page.tsx`, en vez del literal `"32"`:

```tsx
const stats = [
  { value: String(TOOLS.length), label: "herramientas publicadas" },
  { value: String(CATEGORIES.length), label: "familias de uso" },
  { value: String(featuredTools(99).length), label: "destacadas ahora" },
];
```

Esto también corrige que hoy dos métricas distintas muestran el mismo `"3"` hardcodeado.

- [ ] **Step 3: Agregar JSON-LD a las 3 categorías**

En cada `src/app/{categoria}/page.tsx`, antes del contenido:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd("texto")) }}
/>
```

Hoy las 3 no tienen ninguno.

- [ ] **Step 4: Footer desde el registro**

Los links de categoría de `Footer.tsx` salen de `CATEGORIES.map(...)`. Los 4 institucionales quedan escritos a mano: no son herramientas y no pertenecen al registro.

- [ ] **Step 5: Verificar**

Run: `npm test && npx tsc --noEmit && npx eslint src && npm run build`
Expected: todo exit 0.

- [ ] **Step 6: Commit**

```bash
git add src/app src/components/Footer.tsx
git commit -m "refactor: los listados y el footer derivan del registro"
```

---

### Task 9: Imágenes Open Graph

**Files:**
- Create: `src/lib/og-image.tsx`
- Create: `src/app/opengraph-image.tsx`
- Create: 32 × `src/app/{categoria}/{slug}/opengraph-image.tsx`

**Interfaces:**
- Consumes: `getTool`, `getCategory`.
- Produces: `renderOgImage({ title, eyebrow }): ImageResponse`.

Antes de escribir: leé `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md`, porque la API cambió respecto a versiones previas.

- [ ] **Step 1: Factory compartido**

`src/lib/og-image.tsx` exporta `renderOgImage` usando `ImageResponse` de `next/og`, con `size = { width: 1200, height: 630 }` y `contentType = "image/png"`. Diseño: fondo `#f5f1e8`, la marca "FastTools" arriba, el `eyebrow` de la categoría en mayúsculas con tracking, y el título de la herramienta grande en `#172033`. Sin fuentes externas: la CSP y el build offline no las permiten.

- [ ] **Step 2: Uno por herramienta**

Cada `src/app/{categoria}/{slug}/opengraph-image.tsx`:

```tsx
import { renderOgImage } from "@/lib/og-image";
import { getCategory, getTool } from "@/lib/tool-registry";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "FastTools";

export default function Image() {
  const tool = getTool("contador-palabras");
  return renderOgImage({ title: tool.title, eyebrow: getCategory(tool.category).shortTitle });
}
```

Generá los 32 con un script que recorra `TOOLS`, para que el slug de cada archivo salga del registro y no de tipear a mano.

- [ ] **Step 3: Verificar**

Run: `npm run build`
Expected: exit 0. Después: `find .next -name "opengraph-image*" | wc -l` debe dar al menos 33.

Y en el HTML: `grep -o 'og:image' .next/server/app/texto/contador-palabras.html` debe aparecer.

- [ ] **Step 4: Commit**

```bash
git add src/lib/og-image.tsx src/app
git commit -m "feat: imagen open graph por herramienta"
```

---

### Task 10: Verificación final

**Files:**
- Create: `scripts/verify-build.mjs`

- [ ] **Step 1: Script de verificación sobre el HTML generado**

`scripts/verify-build.mjs` lee los `.html` de `.next/server/app` y falla con exit 1 si:

1. Alguna página de herramienta no tiene `<link rel="canonical">` con **su** ruta.
2. Alguna no tiene `og:title`, `og:description` ni `og:image`.
3. Algún `<title>` contiene `FastTools` dos veces, o ninguna (salvo el 404 y el 500).
4. Falta `BreadcrumbList` o `SoftwareApplication` en alguna de las 32.
5. Queda texto visible sin acentuar (reusá el barrido de la tanda 1: quitar `<script>` y `<style>`, extraer nodos de texto, buscar la lista de ~40 palabras).
6. **El chequeo que prueba el refactor:** para cada herramienta del registro, su `title` y su `description` aparecen **idénticos** en la página de categoría, en `/herramientas` y en la home. Es exactamente lo que hoy no se cumple en 28 de 32.
7. Cada slug del registro tiene su `page.tsx` en disco, y cada `page.tsx` de herramienta tiene su entrada en el registro (el chequeo de `node:fs` que no podía ir en los invariantes).

- [ ] **Step 2: Correr todo**

```bash
npm test && npx tsc --noEmit && npx eslint src && npm run build && node scripts/verify-build.mjs
```

Expected: todo exit 0.

- [ ] **Step 3: Confirmar que las rutas no cambiaron**

```bash
git diff main --stat -- src/app | tail -3
git diff main -- src/app | grep -E '^[+-].*href' | grep -oE 'href[:=] ?"[^"]*"' | sort | uniq -c
```

Cada `href` debe aparecer la misma cantidad de veces en `+` y en `-`.

- [ ] **Step 4: Commit**

```bash
git add scripts/verify-build.mjs
git commit -m "test: verificar el HTML generado contra el registro"
```

---

## Self-review

**Cobertura del spec:** registro (T2), derivación (T3), invariantes (T4), sitemap (T5), componentes (T6), 32 páginas (T7), listados y footer (T8), imagen OG (T9), verificación (T10). Los typos de `texto-a-lista` e `imc` están en T2 Step 2. La unificación `label`→`title` y el `aria-current` en T6 Step 1. El FAQ de fuente única en T7 Steps 1-2.

**Desvío consciente del spec:** el invariante "slug sin `page.tsx`" se movió de T4 a T10 porque necesita `node:fs` y el módulo lo importan componentes de navegador.

**Consistencia de tipos:** `Crumb` usa `title` (no `label`) en T3, T6 y T7. `relatedFor` devuelve `Tool[]` y `RelatedTools` recibe `Tool[]`. `toolHref(tool: Tool)` toma el objeto, no el slug, en las 5 tareas que lo usan.
