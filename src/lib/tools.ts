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

export const TOOLS: Tool[] = [
  // ---------- Texto ----------
  {
    slug: "contador-caracteres",
    category: "texto",
    title: "Contador de caracteres",
    description: "Cuenta los caracteres de tu texto en tiempo real.",
    metaTitle: "Contador de caracteres online gratis",
    metaDescription:
      "Cuenta caracteres de tu texto en tiempo real. Útil para redes sociales, meta descripciones, mensajes y textos con límite.",
    related: ["contador-palabras", "quitar-espacios", "mayusculas-minusculas"],
    howTo: {
      name: "Cómo contar caracteres de un texto",
      steps: [
        "Pega o escribe tu texto en el campo de entrada.",
        "El conteo de caracteres se actualiza automáticamente.",
        "Copia o limpia el texto según lo necesites.",
      ],
    },
    faq: [
      {
        q: "¿Los espacios cuentan como caracteres?",
        a: "Sí. Cada espacio, salto de línea y signo de puntuación cuenta dentro del total.",
      },
      {
        q: "¿Para qué sirve contar caracteres?",
        a: "Sirve para respetar límites en redes sociales, mensajes, formularios y fragmentos SEO.",
      },
      {
        q: "¿Se actualiza al instante?",
        a: "Sí. El contador responde en tiempo real mientras escribes o pegas contenido.",
      },
    ],
  },
  {
    slug: "contador-caracteres-sin-espacios",
    category: "texto",
    title: "Contador sin espacios",
    shortTitle: "Contador sin espacios",
    description:
      "Cuenta solo los caracteres reales de tu texto, sin espacios ni saltos.",
    metaTitle: "Contador de caracteres sin espacios online",
    metaDescription:
      "Cuenta caracteres sin espacios, tabulaciones ni saltos de línea. Ideal para límites exactos de texto y validaciones.",
    related: ["contador-caracteres", "contador-palabras", "quitar-espacios"],
    howTo: {
      name: "Cómo contar caracteres sin espacios",
      steps: [
        "Pega o escribe tu texto en el campo de entrada.",
        "La herramienta excluye los espacios del conteo.",
        "Copia el texto o limpia el campo según lo necesites.",
      ],
    },
    faq: [
      {
        q: "¿Qué cuenta como espacio?",
        a: "Se excluyen espacios normales, tabulaciones y saltos de línea.",
      },
      {
        q: "¿Para qué sirve este conteo?",
        a: "Sirve para validar textos donde importan solo los caracteres reales y no el espaciado.",
      },
    ],
  },
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
      {
        q: "¿Cuántas palabras tiene una página de texto?",
        a: "Depende del formato, pero una página A4 con configuraciones académicas comunes puede rondar entre 250 y 500 palabras.",
      },
      {
        q: "¿Cuántas palabras puede tener un artículo SEO?",
        a: "Depende de la intención de búsqueda, pero muchos artículos informativos trabajan entre 1200 y 2500 palabras.",
      },
    ],
  },
  {
    slug: "contador-lineas",
    category: "texto",
    title: "Contador de líneas",
    description: "Cuenta las líneas de tu texto y distingue las líneas no vacías.",
    metaTitle: "Contador de líneas online gratis",
    metaDescription:
      "Cuenta líneas totales y líneas no vacías al instante. Útil para listas, bloques de texto, código y archivos pegados.",
    related: ["contador-caracteres", "contador-palabras", "quitar-espacios"],
    howTo: {
      name: "Cómo contar líneas de un texto",
      steps: [
        "Pega o escribe tu texto en el campo.",
        "La herramienta muestra líneas totales y no vacías.",
        "Copia o limpia el contenido cuando quieras.",
      ],
    },
    faq: [
      {
        q: "¿Para qué sirve contar líneas?",
        a: "Sirve para revisar listas, archivos pegados, bloques de código o textos donde cada línea importa.",
      },
      {
        q: "¿Qué diferencia hay entre líneas totales y no vacías?",
        a: "Las líneas totales incluyen todo; las no vacías excluyen líneas en blanco o con espacios.",
      },
      {
        q: "¿Funciona con código fuente?",
        a: "Sí. Puedes pegar código y ver rápidamente cuántas líneas tiene.",
      },
    ],
  },
  {
    slug: "quitar-espacios",
    category: "texto",
    title: "Quitar espacios",
    description: "Elimina los espacios extra de tu texto en tiempo real.",
    metaTitle: "Quitar espacios extra del texto online",
    metaDescription:
      "Elimina espacios dobles y espaciado irregular de tu texto al instante. Ideal para limpiar contenido copiado de PDFs, webs o documentos.",
    related: ["contador-caracteres", "contador-palabras", "invertir-texto"],
    howTo: {
      name: "Cómo quitar espacios extra de un texto",
      steps: [
        "Pega el texto con espaciado irregular.",
        "El resultado limpio aparece automáticamente.",
        "Copia el resultado para usarlo donde quieras.",
      ],
    },
    faq: [
      {
        q: "¿Qué espacios elimina la herramienta?",
        a: "Reduce espacios duplicados y limpia espacios al comienzo y al final del texto.",
      },
      {
        q: "¿Sirve para texto copiado de PDF o web?",
        a: "Sí. Es útil para normalizar texto que llega con saltos o espacios irregulares.",
      },
      {
        q: "¿Se pierden acentos o símbolos?",
        a: "No. La herramienta solo ajusta el espaciado y mantiene intactos los caracteres.",
      },
    ],
  },
  {
    slug: "quitar-saltos-linea",
    category: "texto",
    title: "Quitar saltos de línea",
    description: "Convierte texto con varias líneas en una sola línea continua.",
    metaTitle: "Quitar saltos de línea online",
    metaDescription:
      "Convierte texto con varias líneas en una sola línea. Ideal para formularios, CSV simples y texto copiado.",
    related: ["quitar-espacios", "contador-lineas", "eliminar-lineas-duplicadas"],
    howTo: {
      name: "Cómo quitar saltos de línea",
      steps: [
        "Pega un texto con múltiples líneas.",
        "La herramienta lo convierte en una sola línea.",
        "Copia el resultado cuando lo necesites.",
      ],
    },
  },
  {
    slug: "eliminar-lineas-duplicadas",
    category: "texto",
    title: "Eliminar líneas duplicadas",
    description:
      "Limpia listas repetidas conservando solo la primera aparición de cada línea.",
    metaTitle: "Eliminar líneas duplicadas online",
    metaDescription:
      "Quita líneas repetidas de una lista o bloque de texto manteniendo la primera aparición de cada una.",
    related: ["contador-lineas", "quitar-saltos-linea", "quitar-espacios"],
    howTo: {
      name: "Cómo eliminar líneas duplicadas",
      steps: [
        "Pega una lista o texto con líneas repetidas.",
        "La herramienta elimina las repeticiones.",
        "Copia el resultado limpio cuando lo necesites.",
      ],
    },
  },
  {
    slug: "ordenar-lineas",
    category: "texto",
    title: "Ordenar líneas alfabéticamente",
    shortTitle: "Ordenar líneas",
    description: "Ordena listas por línea en segundos y copia el resultado limpio.",
    metaTitle: "Ordenar líneas alfabéticamente online",
    metaDescription:
      "Ordena líneas alfabéticamente al instante. Ideal para listas, keywords, nombres, tags y contenido copiado.",
    related: ["eliminar-lineas-duplicadas", "quitar-saltos-linea", "contador-lineas"],
    howTo: {
      name: "Cómo ordenar líneas alfabéticamente",
      steps: [
        "Pega tu lista con una línea por elemento.",
        "Activa o desactiva las opciones que necesitas.",
        "Copia el resultado ordenado cuando quede como quieres.",
      ],
    },
    faq: [
      {
        q: "¿Sirve para listas con palabras repetidas?",
        a: "Sí. La herramienta ordena las líneas tal como las recibe. Si luego quieres limpiar repeticiones, puedes usar la herramienta para eliminar líneas duplicadas.",
      },
      {
        q: "¿Respeta mayúsculas y minúsculas?",
        a: "Puedes elegir si ignorar o no las mayúsculas y minúsculas al ordenar.",
      },
      {
        q: "¿Puedo quitar líneas vacías?",
        a: "Sí. Hay una opción para excluir líneas vacías antes de generar el resultado.",
      },
    ],
  },
  {
    slug: "contador-palabras-clave",
    category: "texto",
    title: "Contador de palabras clave",
    description: "Mide repeticiones y densidad estimada de una keyword en cualquier texto.",
    metaTitle: "Contador de palabras clave online",
    metaDescription:
      "Cuenta cuántas veces aparece una palabra o frase clave dentro de un texto y estima su densidad en segundos.",
    related: ["contador-palabras", "contador-caracteres", "ordenar-lineas"],
    howTo: {
      name: "Cómo contar palabras clave en un texto",
      steps: [
        "Escribe la palabra o frase clave que quieres analizar.",
        "Pega el texto completo en el área principal.",
        "Revisa coincidencias, palabras totales y densidad estimada.",
      ],
    },
    faq: [
      {
        q: "¿Cuenta frases completas o solo palabras sueltas?",
        a: "La herramienta permite analizar tanto una sola palabra como una frase completa.",
      },
      {
        q: "¿Distingue mayúsculas y minúsculas?",
        a: "No. El conteo se hace sin distinguir mayúsculas y minúsculas para dar una lectura más práctica.",
      },
      {
        q: "¿La densidad es exacta para SEO?",
        a: "Es una estimación útil para orientarte. La interpretación final depende del contexto, la intención del texto y otros factores de redacción.",
      },
    ],
  },
  {
    slug: "extraer-texto-html",
    category: "texto",
    title: "Extractor de texto de HTML",
    description: "Pega HTML, limpia etiquetas y copia solo el contenido textual.",
    metaTitle: "Extractor de texto de HTML online",
    metaDescription:
      "Extrae texto plano desde código HTML en segundos. Ideal para limpiar contenido copiado de webs, CMS o emails.",
    related: ["quitar-saltos-linea", "minificar-texto", "json-pretty-print"],
    howTo: {
      name: "Cómo extraer texto de HTML",
      steps: [
        "Pega el código HTML en el campo de entrada.",
        "La herramienta elimina etiquetas y deja solo texto plano.",
        "Copia el resultado si quieres reutilizarlo en otro lugar.",
      ],
    },
    faq: [
      {
        q: "¿Elimina etiquetas script y style?",
        a: "Sí. La herramienta descarta ese contenido para dejar un resultado más limpio.",
      },
      {
        q: "¿Sirve para contenido copiado desde un CMS?",
        a: "Sí. Es útil para limpiar texto desde editores, newsletters, bloques HTML o webs.",
      },
      {
        q: "¿Convierte entidades HTML comunes?",
        a: "Sí. Convierte entidades frecuentes como ampersand, comillas o espacios no separables.",
      },
    ],
  },
  {
    slug: "json-pretty-print",
    category: "texto",
    title: "JSON pretty print",
    description: "Formatea JSON online y valida si la estructura es correcta.",
    metaTitle: "JSON pretty print online",
    metaDescription:
      "Formatea JSON online al instante con indentación legible. Ideal para desarrollo, pruebas, APIs y revisión de datos.",
    related: ["extraer-texto-html", "minificar-texto", "uuid"],
    howTo: {
      name: "Cómo formatear JSON online",
      steps: [
        "Pega el JSON en el área de entrada.",
        "Elige la cantidad de espacios para la indentación.",
        "Copia el resultado formateado si lo necesitas.",
      ],
    },
    faq: [
      {
        q: "¿Valida si el JSON tiene errores?",
        a: "Sí. Cuando el JSON no es válido, la herramienta muestra el error en pantalla.",
      },
      {
        q: "¿Puedo elegir la indentación?",
        a: "Sí. Puedes formatear con 2 o 4 espacios según tu preferencia.",
      },
      {
        q: "¿Sirve para respuestas de API?",
        a: "Sí. Es útil para revisar payloads, respuestas de API y archivos JSON de configuración.",
      },
    ],
  },
  {
    slug: "minificar-texto",
    category: "texto",
    title: "Minificador de texto",
    description: "Compacta texto en una sola línea y reduce espacios innecesarios.",
    metaTitle: "Minificador de texto online",
    metaDescription:
      "Minifica texto online compactando espacios y saltos de línea. Ideal para prompts, mensajes, campos con límite y contenido limpio.",
    related: ["quitar-espacios", "quitar-saltos-linea", "extraer-texto-html"],
    howTo: {
      name: "Cómo minificar texto online",
      steps: [
        "Pega el texto que quieres compactar.",
        "La herramienta reduce espacios y saltos automáticamente.",
        "Copia la versión minificada cuando esté lista.",
      ],
    },
    faq: [
      {
        q: "¿Elimina todos los saltos de línea?",
        a: "Sí. La salida compacta el contenido en una sola línea con espacios simples.",
      },
      {
        q: "¿Sirve para prompts o campos con límite?",
        a: "Sí. Es útil para reducir longitud antes de pegar contenido en formularios o herramientas con límites.",
      },
      {
        q: "¿Muestra cuánto se redujo el texto?",
        a: "Sí. La interfaz muestra caracteres originales, resultado final y ahorro estimado.",
      },
    ],
  },
  {
    slug: "generador-slug",
    category: "texto",
    title: "Generador de slug URL",
    badge: "Nueva",
    description: "Convierte texto en slugs limpios para URLs, artículos y páginas.",
    metaTitle: "Generador de slug URL online",
    metaDescription:
      "Genera slugs limpios para URLs, artículos y páginas en segundos. Convierte texto a formato web legible y corto.",
    related: ["contador-palabras-clave", "extraer-texto-html", "minificar-texto"],
    howTo: {
      name: "Cómo generar un slug URL",
      steps: [
        "Escribe o pega el título o frase base.",
        "Elige el separador que prefieras para la URL.",
        "Copia el slug generado y úsalo en tu página o artículo.",
      ],
    },
    faq: [
      {
        q: "¿Elimina acentos y caracteres especiales?",
        a: "Sí. La herramienta limpia acentos, símbolos y deja solo caracteres aptos para una URL.",
      },
      {
        q: "¿Puedo elegir guion o guion bajo?",
        a: "Sí. Puedes generar el slug con guion medio o guion bajo.",
      },
      {
        q: "¿Sirve para títulos de blog o ecommerce?",
        a: "Sí. Es útil para artículos, categorías, productos y cualquier URL amigable.",
      },
    ],
  },
  {
    slug: "densidad-keyword",
    category: "texto",
    title: "Densidad de keyword",
    shortTitle: "Densidad de keyword",
    badge: "SEO",
    description: "Mide la presencia porcentual de una keyword dentro de un texto.",
    metaTitle: "Contador de densidad de keyword online",
    metaDescription:
      "Calcula la densidad de una keyword o frase clave en cualquier texto. Útil para SEO, redacción y revisión de contenido.",
    related: ["contador-palabras-clave", "generador-slug", "contador-palabras"],
    howTo: {
      name: "Cómo calcular la densidad de una keyword",
      steps: [
        "Escribe la keyword o frase clave que quieres medir.",
        "Pega el texto completo en el área principal.",
        "Revisa coincidencias, palabras totales y densidad estimada.",
      ],
    },
    faq: [
      {
        q: "¿Sirve para una palabra o una frase?",
        a: "Sí. Puedes medir una keyword simple o una frase completa.",
      },
      {
        q: "¿La densidad se calcula automáticamente?",
        a: "Sí. La herramienta actualiza los datos en tiempo real mientras escribes o pegas contenido.",
      },
      {
        q: "¿Es una referencia útil para SEO?",
        a: "Sí. Sirve como referencia rápida, aunque la calidad del contenido depende de más factores que una sola métrica.",
      },
    ],
  },
  {
    slug: "texto-a-lista",
    category: "texto",
    title: "Convertidor de texto a lista",
    shortTitle: "Texto a lista",
    badge: "Nueva",
    description: "Pasa texto separado por delimitadores a una lista limpia y ordenada.",
    metaTitle: "Convertidor de texto a lista online",
    metaDescription:
      "Convierte texto separado por comas, líneas o punto y coma en una lista para pegar donde quieras.",
    related: ["ordenar-lineas", "eliminar-lineas-duplicadas", "minificar-texto"],
    howTo: {
      name: "Cómo convertir texto a lista",
      steps: [
        "Pega el texto separado por comas, líneas o punto y coma.",
        "Elige el formato de lista que prefieras.",
        "Copia el resultado y pégalo donde lo necesites.",
      ],
    },
    faq: [
      {
        q: "¿Sirve para listas de productos o keywords?",
        a: "Sí. Es útil para productos, tags, keywords, nombres o cualquier secuencia separada por delimitadores.",
      },
      {
        q: "¿Puedo cambiar el formato de la lista?",
        a: "Sí. Puedes elegir entre guiones, viñetas o una lista numerada simple.",
      },
      {
        q: "¿Acepta comas y saltos de línea?",
        a: "Sí. La herramienta acepta comas, punto y coma y líneas nuevas como separadores.",
      },
    ],
  },
  {
    slug: "mayusculas-minusculas",
    category: "texto",
    title: "Mayúsculas / Minúsculas",
    description: "Convierte tu texto a mayúsculas o minúsculas en tiempo real.",
    metaTitle: "Convertir texto a mayúsculas o minúsculas online",
    metaDescription:
      "Convierte cualquier texto a mayúsculas o minúsculas al instante. Útil para limpiar datos, ajustar títulos y reformatear contenido.",
    related: ["capitalizar-texto", "invertir-texto", "contador-caracteres"],
    howTo: {
      name: "Cómo convertir texto a mayúsculas o minúsculas",
      steps: [
        "Pega o escribe tu texto.",
        "Elige el modo de conversión.",
        "Copia el resultado cuando esté listo.",
      ],
    },
    faq: [
      {
        q: "¿Convierte bien caracteres del español?",
        a: "Sí. La herramienta se apoya en las funciones nativas del navegador para convertir letras.",
      },
      {
        q: "¿Para qué sirve este cambio?",
        a: "Sirve para uniformar texto, corregir datos importados y ajustar encabezados o bloques de contenido.",
      },
      {
        q: "¿Cambia números o signos?",
        a: "No. Solo se modifican las letras; el resto del contenido se conserva.",
      },
    ],
  },
  {
    slug: "capitalizar-texto",
    category: "texto",
    title: "Capitalizar texto",
    description: "Convierte la primera letra de cada palabra a mayúscula en tiempo real.",
    metaTitle: "Capitalizar texto online - Primera letra en mayúscula",
    metaDescription:
      "Convierte la primera letra de cada palabra a mayúscula al instante. Ideal para títulos, nombres propios y encabezados. Gratis y sin registro.",
    related: ["mayusculas-minusculas", "invertir-texto", "contador-palabras"],
    howTo: {
      name: "Cómo capitalizar texto",
      steps: [
        "Pega o escribe el texto que quieres capitalizar.",
        "El resultado aparece automáticamente con la primera letra de cada palabra en mayúscula.",
        "Copia el resultado con el botón Copiar.",
      ],
    },
    faq: [
      {
        q: "¿Qué significa capitalizar texto?",
        a: "Capitalizar significa poner en mayúscula la primera letra de cada palabra. Por ejemplo, hola mundo pasa a Hola Mundo.",
      },
      {
        q: "¿Funciona con palabras que tienen tildes?",
        a: "Sí. La herramienta busca capitalizar respetando caracteres comunes del español y otros caracteres Unicode al comienzo de cada palabra.",
      },
      {
        q: "¿Cuándo conviene usar este formato?",
        a: "Es útil para títulos, encabezados, nombres propios y textos cortos donde quieres mejorar la presentación de forma rápida.",
      },
    ],
  },
  {
    slug: "invertir-texto",
    category: "texto",
    title: "Invertir texto",
    description: "Invierte los caracteres de tu texto al revés en tiempo real.",
    metaTitle: "Invertir texto online gratis - Texto al revés",
    metaDescription:
      "Invierte cualquier texto al revés con un clic. Ideal para efectos creativos, acertijos y redes sociales. Soporta caracteres especiales.",
    related: ["mayusculas-minusculas", "capitalizar-texto", "quitar-espacios"],
    howTo: {
      name: "Cómo invertir texto al revés",
      steps: [
        "Escribe o pega el texto que quieres invertir.",
        "El texto al revés aparece automáticamente.",
        "Copia el resultado con el botón Copiar.",
      ],
    },
    faq: [
      {
        q: "¿Para qué sirve invertir texto?",
        a: "Se usa para juegos, efectos visuales, publicaciones creativas y pruebas simples con palabras o frases.",
      },
      {
        q: "¿Funciona con emojis y caracteres especiales?",
        a: "Sí. La herramienta invierte el texto manteniendo caracteres especiales dentro de la cadena.",
      },
      {
        q: "¿Puedo usarlo para revisar palíndromos?",
        a: "Sí. Puede servirte como referencia rápida para comparar una palabra o frase con su versión invertida.",
      },
    ],
  },

  // ---------- Generadores ----------
  {
    slug: "password",
    category: "generadores",
    title: "Generador de contraseñas",
    description: "Genera contraseñas seguras y aleatorias sin salir del navegador.",
    metaTitle: "Generador de contraseñas seguras online gratis",
    metaDescription:
      "Genera contraseñas seguras y aleatorias al instante. Elige longitud y tipos de caracteres sin registro.",
    related: ["qr", "lorem-ipsum"],
    howTo: {
      name: "Cómo generar una contraseña segura",
      steps: [
        "Ajusta la longitud.",
        "Elige los tipos de caracteres que quieres incluir.",
        "Genera la contraseña y cópiala si te sirve.",
      ],
    },
    faq: [
      {
        q: "¿Se guardan las contraseñas generadas?",
        a: "No. La herramienta genera el resultado en tu sesión y no requiere guardar datos.",
      },
      {
        q: "¿Cuántos caracteres conviene usar?",
        a: "En general, cuanto más larga y variada sea la contraseña, mejor. Para muchas cuentas conviene usar 12 caracteres o más.",
      },
      {
        q: "¿Puedo copiarla al instante?",
        a: "Sí. Después de generarla, puedes copiarla directamente desde la herramienta.",
      },
    ],
  },
  {
    slug: "qr",
    category: "generadores",
    title: "Generador de QR",
    description:
      "Crea un código QR a partir de texto o URLs, descárgalo en PNG o cópialo como imagen.",
    metaTitle: "Generador de código QR online gratis",
    metaDescription:
      "Crea códigos QR para URLs y texto en segundos. Sin registro, sin marcas de agua. Descarga el QR en PNG o cópialo como imagen completamente gratis.",
    related: ["password", "lorem-ipsum"],
    howTo: {
      name: "Cómo crear un código QR",
      steps: [
        "Escribe o pega el texto o URL que quieres codificar.",
        "El código QR se genera automáticamente al instante.",
        "Descarga el QR en PNG o cópialo como imagen para usarlo en tus materiales.",
      ],
    },
    faq: [
      {
        q: "¿Qué puedo codificar en un código QR?",
        a: "Puedes codificar texto libre y URLs de sitios web. Solo pega el contenido que quieras convertir y el QR se genera al instante.",
      },
      {
        q: "¿Los códigos QR generados tienen fecha de vencimiento?",
        a: "No. Los QR generados con esta herramienta son estáticos y no tienen fecha de vencimiento. Mientras el contenido codificado siga siendo válido, el QR funcionará.",
      },
      {
        q: "¿En qué formato puedo guardar el QR?",
        a: "Puedes descargarlo en PNG o copiar la imagen al portapapeles para pegarla en otros documentos o diseños compatibles.",
      },
    ],
  },
  {
    slug: "uuid",
    category: "generadores",
    title: "Generador de UUID",
    description: "Genera UUID v4 desde el navegador y cópialos en bloque.",
    metaTitle: "Generador de UUID online gratis",
    metaDescription:
      "Genera UUID v4 al instante desde el navegador. Útil para desarrollo, bases de datos, identificadores y pruebas.",
    related: ["password", "qr", "lorem-ipsum"],
    howTo: {
      name: "Cómo generar UUIDs",
      steps: [
        "Elige cuántas IDs quieres generar.",
        "La herramienta crea los UUIDs automáticamente.",
        "Copia la lista completa si la necesitas.",
      ],
    },
  },
  {
    slug: "hashes",
    category: "generadores",
    title: "Generador de hashes",
    description: "Genera hashes de texto con algoritmos comunes sin salir del navegador.",
    metaTitle: "Generador de hashes online",
    metaDescription:
      "Genera hashes online con SHA-1, SHA-256 y SHA-512. Ideal para pruebas, verificación y flujos técnicos.",
    related: ["uuid", "json-pretty-print", "password"],
    howTo: {
      name: "Cómo generar un hash de texto",
      steps: [
        "Escribe o pega el texto de entrada.",
        "Elige el algoritmo de hash.",
        "Copia el resultado generado si lo necesitas.",
      ],
    },
    faq: [
      {
        q: "¿Qué algoritmos incluye?",
        a: "La herramienta incluye SHA-1, SHA-256 y SHA-512.",
      },
      {
        q: "¿El hash cambia si modifico un solo carácter?",
        a: "Sí. Un cambio mínimo en el texto genera un hash totalmente distinto.",
      },
      {
        q: "¿Se genera en el navegador?",
        a: "Sí. El hash se calcula localmente en el navegador sin depender de un servicio externo.",
      },
    ],
  },
  {
    slug: "nombres-usuario",
    category: "generadores",
    title: "Generador de nombres de usuario",
    badge: "Top",
    description: "Crea sugerencias rápidas para redes, cuentas, proyectos y perfiles.",
    metaTitle: "Generador de nombres de usuario online",
    metaDescription:
      "Genera nombres de usuario originales para redes, perfiles, proyectos y cuentas en segundos.",
    related: ["password", "uuid", "lorem-ipsum"],
    howTo: {
      name: "Cómo generar nombres de usuario",
      steps: [
        "Escribe una palabra base opcional para orientar el estilo.",
        "Ajusta la cantidad de sugerencias y las opciones de formato.",
        "Genera la lista y copia la opción que más te guste.",
      ],
    },
    faq: [
      {
        q: "¿Sirve para Instagram, TikTok o gaming?",
        a: "Sí. Las sugerencias se pueden usar como punto de partida para redes sociales, perfiles personales o nombres de proyecto.",
      },
      {
        q: "¿Puedo incluir una palabra propia?",
        a: "Sí. Puedes escribir una palabra base y el generador la mezcla con otros términos para crear opciones.",
      },
      {
        q: "¿Agrega números automáticamente?",
        a: "Si quieres, puedes activar o desactivar la inclusión de números en las sugerencias.",
      },
    ],
  },
  {
    slug: "lorem-ipsum",
    category: "generadores",
    title: "Generador de Lorem Ipsum",
    description: "Genera texto Lorem Ipsum para tus diseños y prototipos al instante.",
    metaTitle: "Generador de Lorem Ipsum online gratis",
    metaDescription:
      "Genera texto Lorem Ipsum al instante para tus diseños, maquetas y prototipos. Elige la cantidad de párrafos. Sin registro y completamente gratis.",
    related: ["password", "qr"],
    howTo: {
      name: "Cómo generar texto Lorem Ipsum",
      steps: [
        "Elige la cantidad de párrafos que necesitas con el control deslizante.",
        "El texto Lorem Ipsum aparece automáticamente.",
        "Copia el texto con el botón Copiar y pégalo en tu diseño o prototipo.",
      ],
    },
    faq: [
      {
        q: "¿Qué es Lorem Ipsum?",
        a: "Es un texto de relleno muy usado en diseño y maquetación para simular contenido antes de tener el texto final.",
      },
      {
        q: "¿Para qué se usa Lorem Ipsum?",
        a: "Se usa para prototipos, maquetas y piezas visuales donde hace falta ver bloques de texto sin depender del contenido definitivo.",
      },
      {
        q: "¿Tiene significado real?",
        a: "Su origen viene del latín clásico modificado, pero en la práctica se usa como texto de relleno sin sentido funcional para el lector.",
      },
    ],
  },

  // ---------- Calculadoras ----------
  {
    slug: "porcentaje",
    category: "calculadoras",
    title: "Calculadora de porcentaje",
    description: "Calcula el porcentaje de cualquier valor de forma rápida y sencilla.",
    metaTitle: "Calculadora de porcentaje online gratis",
    metaDescription:
      "Calcula porcentajes al instante para descuentos, subas, IVA y cuentas cotidianas. Simple, clara y sin registro.",
    related: ["edad", "regla-de-tres"],
    howTo: {
      name: "Cómo calcular un porcentaje",
      steps: [
        "Ingresa el valor base y el porcentaje.",
        "El resultado aparece al instante.",
        "Úsalo para descuentos, IVA o cálculos simples.",
      ],
    },
    faq: [
      {
        q: "¿Cómo se calcula el porcentaje de un número?",
        a: "Se multiplica el valor base por el porcentaje y luego se divide por 100.",
      },
      {
        q: "¿Sirve para descuentos o IVA?",
        a: "Sí. Puedes usarla como apoyo para descuentos, impuestos o aumentos.",
      },
      {
        q: "¿Hace el resultado automáticamente?",
        a: "Sí. Apenas completas los campos, la calculadora muestra el resultado.",
      },
    ],
  },
  {
    slug: "descuento",
    category: "calculadoras",
    title: "Calculadora de descuento",
    description: "Calcula cuánto te descuentan y cuál es el precio final.",
    metaTitle: "Calculadora de descuento online gratis",
    metaDescription:
      "Calcula descuentos y precio final al instante. Ideal para ofertas, rebajas, ventas y compras cotidianas.",
    related: ["porcentaje", "regla-de-tres", "edad"],
    howTo: {
      name: "Cómo calcular un descuento",
      steps: [
        "Ingresa el precio original.",
        "Escribe el porcentaje de descuento.",
        "La herramienta muestra el monto descontado y el precio final.",
      ],
    },
  },
  {
    slug: "promedio",
    category: "calculadoras",
    title: "Calculadora de promedio",
    description: "Saca promedios automáticamente a partir de una lista de valores.",
    metaTitle: "Calculadora de promedio online",
    metaDescription:
      "Calcula promedios online en segundos. Ideal para notas, gastos, resultados y listas de valores.",
    related: ["porcentaje", "regla-de-tres", "descuento"],
    howTo: {
      name: "Cómo calcular un promedio",
      steps: [
        "Pega los números separados por comas, espacios o líneas.",
        "La herramienta suma los valores y divide por la cantidad.",
        "Copia el promedio si quieres reutilizarlo.",
      ],
    },
    faq: [
      {
        q: "¿Sirve para notas o exámenes?",
        a: "Sí. Puedes pegar varias calificaciones y obtener el promedio al instante.",
      },
      {
        q: "¿Acepta números con decimales?",
        a: "Sí. Puedes usar valores enteros o decimales.",
      },
      {
        q: "¿Puedo separar los valores de distintas formas?",
        a: "Sí. La calculadora acepta comas, espacios, saltos de línea y punto y coma.",
      },
    ],
  },
  {
    slug: "aumento-porcentual",
    category: "calculadoras",
    title: "Calculadora de aumento porcentual",
    description: "Calcula aumentos y valores finales a partir de un porcentaje.",
    metaTitle: "Calculadora de aumento porcentual online",
    metaDescription:
      "Calcula aumentos porcentuales online al instante. Ve el monto aumentado y el valor final sin fórmulas.",
    related: ["porcentaje", "descuento", "promedio"],
    howTo: {
      name: "Cómo calcular un aumento porcentual",
      steps: [
        "Ingresa el valor base.",
        "Escribe el porcentaje de aumento.",
        "La herramienta muestra el aumento y el valor final.",
      ],
    },
    faq: [
      {
        q: "¿Sirve para aumentos de sueldo o precios?",
        a: "Sí. Puedes usarla para estimar aumentos salariales, precios, cuotas o presupuestos.",
      },
      {
        q: "¿Muestra el monto del aumento y el total?",
        a: "Sí. La calculadora separa cuánto se suma y cuál es el valor final.",
      },
      {
        q: "¿Hace la cuenta automáticamente?",
        a: "Sí. Apenas completas los campos, el resultado aparece al instante.",
      },
    ],
  },
  {
    slug: "edad",
    category: "calculadoras",
    title: "Calculadora de edad",
    description:
      "Calcula tu edad exacta en años, meses y días desde tu fecha de nacimiento.",
    metaTitle: "Calculadora de edad exacta online gratis",
    metaDescription:
      "Calcula tu edad exacta en años, meses y días a partir de tu fecha de nacimiento. Rápida y sin registro.",
    related: ["porcentaje", "regla-de-tres"],
    howTo: {
      name: "Cómo calcular la edad exacta",
      steps: [
        "Selecciona tu fecha de nacimiento.",
        "La herramienta calcula la edad automáticamente.",
        "Revisa el resultado en años, meses y días.",
      ],
    },
    faq: [
      {
        q: "¿La calculadora considera meses y días?",
        a: "Sí. El resultado muestra años, meses y días transcurridos desde la fecha ingresada.",
      },
      {
        q: "¿Sirve para trámites o verificaciones?",
        a: "Puede servir como referencia rápida para conocer una edad exacta antes de revisar documentación oficial.",
      },
      {
        q: "¿Se actualiza con la fecha actual?",
        a: "Sí. El cálculo toma como referencia la fecha del día en que usas la herramienta.",
      },
    ],
  },
  {
    slug: "regla-de-tres",
    category: "calculadoras",
    title: "Regla de tres",
    description: "Resuelve una proporción simple de forma rápida y clara.",
    metaTitle: "Regla de tres online gratis",
    metaDescription:
      "Resuelve una regla de tres simple al instante. Útil para proporciones, recetas, escalas y cuentas rápidas.",
    related: ["porcentaje", "edad"],
    howTo: {
      name: "Cómo resolver una regla de tres",
      steps: [
        "Completa los tres valores conocidos.",
        "La herramienta calcula el valor faltante.",
        "Usa el resultado como referencia para tu proporción.",
      ],
    },
    faq: [
      {
        q: "¿Para qué sirve la regla de tres?",
        a: "Sirve para resolver proporciones simples en recetas, precios, cantidades y escalas.",
      },
      {
        q: "¿Esta herramienta calcula relaciones directas?",
        a: "Sí. Esta versión está pensada para reglas de tres simples y directas.",
      },
      {
        q: "¿Hace el cálculo automáticamente?",
        a: "Sí. Apenas completas los datos necesarios, el valor X aparece en pantalla.",
      },
    ],
  },
  {
    slug: "imc",
    category: "calculadoras",
    title: "Calculadora de IMC",
    description: "Calcula tu índice de masa corporal ingresando peso y altura.",
    metaTitle: "Calculadora de IMC online gratis",
    metaDescription:
      "Calcula tu índice de masa corporal ingresando peso y altura. Obtén una referencia rápida de tu categoría.",
    related: ["edad", "porcentaje", "regla-de-tres"],
    howTo: {
      name: "Cómo calcular el IMC",
      steps: [
        "Ingresa tu peso en kilogramos.",
        "Ingresa tu altura en centímetros.",
        "Consulta el IMC y la categoría resultante.",
      ],
    },
    faq: [
      {
        q: "¿Cómo se calcula el IMC?",
        a: "Se divide el peso en kilogramos por la altura en metros al cuadrado.",
      },
      {
        q: "¿Para qué sirve este valor?",
        a: "Sirve como referencia general para relacionar peso y altura de forma simple.",
      },
      {
        q: "¿Es un diagnóstico médico?",
        a: "No. Es una referencia rápida y no reemplaza la evaluación profesional.",
      },
    ],
  },
  {
    slug: "temperatura",
    category: "calculadoras",
    title: "Conversor de temperatura",
    description: "Convierte entre Celsius, Fahrenheit y Kelvin al instante.",
    metaTitle: "Convertir temperatura online gratis",
    metaDescription:
      "Convierte temperaturas entre Celsius, Fahrenheit y Kelvin al instante escribiendo en cualquiera de los campos.",
    related: ["imc", "porcentaje", "regla-de-tres"],
    howTo: {
      name: "Cómo convertir temperatura",
      steps: [
        "Escribe una temperatura en cualquiera de los campos.",
        "Los otros valores se actualizan automáticamente.",
      ],
    },
    faq: [
      {
        q: "¿Qué escalas incluye?",
        a: "Incluye Celsius, Fahrenheit y Kelvin.",
      },
      {
        q: "¿Puedo escribir en cualquier campo?",
        a: "Sí. Puedes ingresar un valor en cualquiera de las tres escalas.",
      },
      {
        q: "¿Sirve para uso cotidiano y técnico?",
        a: "Sí. Puede servir tanto para cocina y clima como para referencias generales de estudio o trabajo.",
      },
    ],
  },
];

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
