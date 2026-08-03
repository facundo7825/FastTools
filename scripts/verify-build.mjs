// Verificacion del HTML generado (post-build) contra el registro central de
// herramientas (src/lib/tools.ts). Corre DESPUES de `npm run build`, porque
// lee los .html que Next deja en .next/server/app.
//
// Por que existe: los tests de Vitest cubren la logica del registro y los
// invariantes rompen el build si los datos quedan inconsistentes, pero nada
// verifica el HTML final, que es lo que ven el usuario y Google. Este
// proyecto ya tuvo un incidente exactamente ahi: durante meses las 32
// paginas de herramienta emitieron <link rel="canonical" href="https://fasttools.app">,
// declarandose duplicados de la home, sin que ningun test lo notara.
//
// Trampas conocidas (ver .superpowers/sdd/2026-07-30-registro-central-catalogo/task-10-brief.md):
//  1. El payload RSC vive dentro de <script> en el HTML. Si se cuentan
//     ocurrencias sin excluir los <script>, los conteos se duplican.
//     Por eso todo lo que mira "texto visible" pasa por stripScriptsAndStyles.
//  2. /generadores/uuid genera UUIDs de ejemplo en tiempo de build: su HTML
//     cambia entre builds. Este script no compara entre builds (solo evalua
//     el build actual contra el registro), asi que no le afecta.
//  3. Los nombres de chunk llevan hash de build. Este script no compara
//     nombres de archivo entre builds, asi que tampoco le afecta.
//  4. El 404 y el 500 no siguen las reglas de las demas paginas: el 404
//     emite dos <meta name="robots"> en conflicto y su <title> es el
//     generico; el 500 no tiene canonical, og:image ni JSON-LD. Se excluyen
//     de los chequeos que no les aplican.
//
// tools.ts es TypeScript y este proyecto no tiene ts-node/tsx instalado. En
// vez de importarlo, se extrae el bloque `export const TOOLS: Tool[] = [...]`
// del codigo fuente y se evalua como literal de objeto JS (es sintaxis JS
// valida: solo strings, arrays y objetos, sin llamadas ni interpolacion).

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const appDir = path.join(root, ".next/server/app");

const problems = [];

// ---------------------------------------------------------------------------
// Carga de datos: registro (fuente) y HTML (build)
// ---------------------------------------------------------------------------

function loadTools() {
  const toolsPath = path.join(root, "src/lib/tools.ts");
  const source = readFileSync(toolsPath, "utf8");
  const marker = "export const TOOLS: Tool[] = ";
  const markerStart = source.indexOf(marker);
  if (markerStart === -1) {
    throw new Error("No se encontro 'export const TOOLS: Tool[] =' en src/lib/tools.ts");
  }
  const arrStart = markerStart + marker.length;
  let depth = 0;
  let end = -1;
  for (let i = arrStart; i < source.length; i++) {
    const ch = source[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end === -1) {
    throw new Error("No se pudo delimitar el arreglo TOOLS en src/lib/tools.ts (corchetes desbalanceados)");
  }
  const arraySource = source.slice(arrStart, end + 1);
  // eslint-disable-next-line no-new-func -- ver comentario de cabecera: es un literal JS, no codigo arbitrario
  const tools = new Function(`"use strict"; return (${arraySource});`)();
  if (!Array.isArray(tools) || tools.length === 0) {
    throw new Error("El arreglo TOOLS extraido de src/lib/tools.ts esta vacio o no es un arreglo");
  }
  return tools;
}

function loadSiteUrl() {
  const registryPath = path.join(root, "src/lib/tool-registry.ts");
  const source = readFileSync(registryPath, "utf8");
  const match = source.match(/const SITE_URL = "([^"]+)"/);
  if (!match) {
    throw new Error('No se encontro \'const SITE_URL = "..."\' en src/lib/tool-registry.ts');
  }
  return match[1];
}

const TOOLS = loadTools();
const SITE_URL = loadSiteUrl();
const CATEGORY_SLUGS = [...new Set(TOOLS.map((t) => t.category))];

function toolHref(tool) {
  return `/${tool.category}/${tool.slug}`;
}

function readPage(relFile) {
  const filePath = path.join(appDir, relFile);
  if (!existsSync(filePath)) return null;
  return readFileSync(filePath, "utf8");
}

// Manifiesto de paginas esperadas en el build.
const toolPages = TOOLS.map((tool) => ({
  kind: "tool",
  tool,
  route: toolHref(tool),
  file: `${tool.category}/${tool.slug}.html`,
}));

const categoryPages = CATEGORY_SLUGS.map((slug) => ({
  kind: "category",
  slug,
  route: `/${slug}`,
  file: `${slug}.html`,
}));

const STATIC_SLUGS = ["herramientas", "contacto", "privacidad", "sobre", "terminos"];
const staticPages = STATIC_SLUGS.map((slug) => ({
  kind: "static",
  slug,
  route: `/${slug}`,
  file: `${slug}.html`,
}));

const homePage = { kind: "home", route: "/", file: "index.html" };
const notFoundPage = { kind: "not-found", route: "/404", file: "_not-found.html" };
const serverErrorPage = { kind: "server-error", route: "/500", file: "_global-error.html" };

// Adjunta el HTML leido a cada entrada; si falta el archivo, lo reporta y lo
// deja fuera de los chequeos que lo necesiten (evita que un crash tape el
// resto de los problemas).
function withHtml(pages) {
  const out = [];
  for (const page of pages) {
    const html = readPage(page.file);
    if (html === null) {
      problems.push(
        `[build] Falta .next/server/app/${page.file} (ruta ${page.route}). Corre "npm run build" antes de verificar.`,
      );
      continue;
    }
    out.push({ ...page, html });
  }
  return out;
}

if (!existsSync(appDir)) {
  console.error(
    `No existe ${path.relative(root, appDir)}. Corre "npm run build" antes de "node scripts/verify-build.mjs".`,
  );
  process.exit(1);
}

const toolPagesHtml = withHtml(toolPages);
const categoryPagesHtml = withHtml(categoryPages);
const staticPagesHtml = withHtml(staticPages);
const homeHtml = withHtml([homePage])[0];
const notFoundHtml = readPage(notFoundPage.file);
const serverErrorHtml = readPage(serverErrorPage.file);

const allNamedPages = [...toolPagesHtml, ...categoryPagesHtml, ...staticPagesHtml, ...(homeHtml ? [homeHtml] : [])];

if (notFoundHtml === null) problems.push(`[build] Falta .next/server/app/${notFoundPage.file} (pagina 404).`);
if (serverErrorHtml === null) problems.push(`[build] Falta .next/server/app/${serverErrorPage.file} (pagina 500).`);

// ---------------------------------------------------------------------------
// Utilidades de parseo de HTML
// ---------------------------------------------------------------------------

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function decodeEntities(str) {
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function stripScriptsAndStyles(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
}

// Texto visible: sin <script>/<style> (trampa 1 del brief), sin tags, con
// entidades decodificadas y espacios colapsados.
function visibleText(html) {
  const withoutScriptsStyles = stripScriptsAndStyles(html);
  const withoutTags = withoutScriptsStyles.replace(/<[^>]+>/g, " ");
  return decodeEntities(withoutTags).replace(/\s+/g, " ").trim();
}

function getTitleTag(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/);
  return m ? decodeEntities(m[1]) : null;
}

function getLinkHrefs(html, relValue) {
  const out = [];
  const tagRe = /<link\b[^>]*>/g;
  let m;
  while ((m = tagRe.exec(html))) {
    const tag = m[0];
    if (new RegExp(`rel="${escapeRegex(relValue)}"`).test(tag)) {
      const hm = tag.match(/href="([^"]*)"/);
      if (hm) out.push(decodeEntities(hm[1]));
    }
  }
  return out;
}

function getMetaContents(html, attr, value) {
  const out = [];
  const tagRe = /<meta\b[^>]*>/g;
  let m;
  while ((m = tagRe.exec(html))) {
    const tag = m[0];
    if (new RegExp(`${attr}="${escapeRegex(value)}"`).test(tag)) {
      const cm = tag.match(/content="([^"]*)"/);
      if (cm) out.push(decodeEntities(cm[1]));
    }
  }
  return out;
}

function getJsonLdBlocks(html) {
  const out = [];
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

// ---------------------------------------------------------------------------
// Chequeo 1: cada pagina de herramienta tiene su propio canonical
// ---------------------------------------------------------------------------

function checkCanonical() {
  for (const { tool, route, html } of toolPagesHtml) {
    const canonicals = getLinkHrefs(html, "canonical");
    const expected = `${SITE_URL}${route}`;
    if (canonicals.length === 0) {
      problems.push(`[canonical] ${route}: no tiene <link rel="canonical">.`);
    } else if (canonicals.length > 1) {
      problems.push(`[canonical] ${route}: tiene ${canonicals.length} <link rel="canonical"> (se espera 1).`);
    } else if (canonicals[0] !== expected) {
      problems.push(
        `[canonical] ${route} (${tool.slug}): el canonical es "${canonicals[0]}", se esperaba "${expected}".`,
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Chequeo 2: og:title, og:description y og:image presentes en cada herramienta
// ---------------------------------------------------------------------------

function checkOgBasics() {
  for (const { tool, route, html } of toolPagesHtml) {
    const missing = [];
    if (getMetaContents(html, "property", "og:title").length === 0) missing.push("og:title");
    if (getMetaContents(html, "property", "og:description").length === 0) missing.push("og:description");
    if (getMetaContents(html, "property", "og:image").length === 0) missing.push("og:image");
    if (missing.length) {
      problems.push(`[og-basico] ${route} (${tool.slug}): falta ${missing.join(", ")}.`);
    }
  }
}

// ---------------------------------------------------------------------------
// Chequeo 3: <title> contiene "FastTools" exactamente una vez (excepto 404/500)
// ---------------------------------------------------------------------------

function checkTitleBrand() {
  for (const { route, html } of allNamedPages) {
    const title = getTitleTag(html) ?? "";
    const count = (title.match(/FastTools/g) || []).length;
    if (count !== 1) {
      problems.push(
        `[title-marca] ${route}: el <title> "${title}" contiene "FastTools" ${count} veces (se espera exactamente 1).`,
      );
    }
  }
  // El 404 y el 500 quedan explicitamente afuera: el brief documenta que el
  // 404 usa el titulo generico heredado y el 500 es la pagina generica de
  // Next, ninguno sigue la regla de marca del resto del sitio.
}

// ---------------------------------------------------------------------------
// Chequeo 4: JSON-LD de cada herramienta incluye BreadcrumbList y SoftwareApplication
// ---------------------------------------------------------------------------

function parseJsonLdGraph(html, route, label, collectedProblems) {
  const blocks = getJsonLdBlocks(html);
  if (blocks.length === 0) {
    collectedProblems.push(`[json-ld] ${route}${label}: no tiene ningun <script type="application/ld+json">.`);
    return null;
  }
  if (blocks.length > 1) {
    collectedProblems.push(`[json-ld] ${route}${label}: tiene ${blocks.length} bloques ld+json (se espera 1).`);
  }
  let parsed;
  try {
    parsed = JSON.parse(blocks[0]);
  } catch (err) {
    collectedProblems.push(`[json-ld] ${route}${label}: el JSON-LD no parsea (${err.message}).`);
    return null;
  }
  if (!Array.isArray(parsed["@graph"])) {
    collectedProblems.push(`[json-ld] ${route}${label}: no tiene un "@graph" con un arreglo.`);
    return null;
  }
  return parsed;
}

function checkBreadcrumbAndSoftwareApplication() {
  for (const { tool, route, html } of toolPagesHtml) {
    const parsed = parseJsonLdGraph(html, route, ` (${tool.slug})`, problems);
    if (!parsed) continue;
    const types = new Set(parsed["@graph"].map((n) => n["@type"]));
    const missing = [];
    if (!types.has("SoftwareApplication")) missing.push("SoftwareApplication");
    if (!types.has("BreadcrumbList")) missing.push("BreadcrumbList");
    if (missing.length) {
      problems.push(`[breadcrumb-software] ${route} (${tool.slug}): falta ${missing.join(" y ")} en el JSON-LD.`);
    }
  }
}

// ---------------------------------------------------------------------------
// Chequeo 5: texto visible sin acentuar
// ---------------------------------------------------------------------------

// Lista de formas SIN acento que, si aparecen en texto visible, casi seguro
// deberian llevar tilde/eñe en este sitio. Deliberadamente se excluyen
// palabras cortas ambiguas (mas/esta/el/tu/si/solo) que son palabras reales
// distintas sin acento y darian falsos positivos.
const UNACCENTED_WORDS = [
  "contrasena", "contrasenas",
  "anos",
  "numero", "numeros",
  "codigo", "codigos",
  "linea", "lineas",
  "pagina", "paginas", "paginas",
  "util", "utiles",
  "rapido", "rapida", "rapidos", "rapidas",
  "catalogo",
  "categoria", "categorias",
  "tambien",
  "mayusculas", "mayuscula",
  "minusculas", "minuscula",
  "terminos", "termino",
  "friccion",
  "articulo", "articulos",
  "pequenas", "pequenos",
  "facil",
  "practico", "practica", "practicas",
  "tecnico", "tecnica", "tecnicas", "tecnicos",
  "limite", "limites",
  "simbolos", "simbolo",
  "validacion",
  "verificacion",
  "informacion",
  "configuracion",
  "indentacion",
  "generacion",
  "conversion",
  "correccion",
  "presentacion",
  "proporcion",
  "puntuacion",
  "redaccion",
  "interpretacion",
  "calculo", "calculos",
  "diseno", "disenos",
  "direccion",
  "metrica",
  "maquetacion",
  "jerarquia",
  "politica",
  "examenes",
  "dia", "dias",
  "guia",
  "area",
  "indice",
  "titulo", "titulos",
  "opcion",
  "sesion",
];

const LETTER_CLASS = "A-Za-zÁÉÍÓÚÜÑáéíóúüñ";

function checkAccents() {
  const pagesToCheck = [...allNamedPages, notFoundHtml !== null ? { route: "/404", html: notFoundHtml } : null].filter(
    Boolean,
  );
  for (const { route, html } of pagesToCheck) {
    const text = visibleText(html);
    const hits = [];
    for (const word of UNACCENTED_WORDS) {
      const re = new RegExp(`(?<![${LETTER_CLASS}])${word}(?![${LETTER_CLASS}])`, "gi");
      let m;
      while ((m = re.exec(text))) {
        const start = Math.max(0, m.index - 20);
        const end = Math.min(text.length, m.index + word.length + 20);
        hits.push(`"${word}" en "...${text.slice(start, end)}..."`);
      }
    }
    if (hits.length) {
      problems.push(`[acentos] ${route}: texto visible sin acentuar -> ${hits.join(" | ")}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Chequeo 6: title/description identicos en categoria, /herramientas y home
// ---------------------------------------------------------------------------

// Umbral para distinguir "solo hay boilerplate despues del titulo" (CTAs como
// "Abrir herramienta ->", categoria, flechas) de "hay una descripcion mostrada
// que tiene que coincidir con el registro". La descripcion mas corta del
// registro tiene 47 caracteres; el boilerplate mas largo ronda 20.
const DESCRIPTION_LIKE_THRESHOLD = 25;

function checkListingConsistency() {
  const listingPages = [...categoryPagesHtml, ...staticPagesHtml.filter((p) => p.slug === "herramientas"), homeHtml];

  for (const { route, html } of listingPages) {
    const cleaned = stripScriptsAndStyles(html);
    for (const tool of TOOLS) {
      const href = toolHref(tool);
      const anchorRe = new RegExp(`<a\\b[^>]*?href="${escapeRegex(href)}"[^>]*>([\\s\\S]*?)<\\/a>`, "g");
      let m;
      while ((m = anchorRe.exec(cleaned))) {
        const innerText = decodeEntities(m[1].replace(/<[^>]+>/g, " "))
          .replace(/\s+/g, " ")
          .trim();

        // No todos los <a href="/categoria/slug"> de estas paginas son
        // "tarjetas de listado" (title + description): la home tambien tiene
        // CTAs sueltos como "Probar una de las nuevas" que enlazan a una
        // herramienta puntual sin mostrar su titulo. Si el titulo no aparece
        // en el texto del enlace, no es una tarjeta de listado: se salta sin
        // reportar problema. Lo que este chequeo garantiza es que, cuando SI
        // se muestra el titulo, cualquier texto adicional sustancial que lo
        // acompana coincide con la descripcion del registro (el bug historico
        // que prueba: duplicar contenido a mano que despues se desincroniza).
        const titleIdx = innerText.indexOf(tool.title);
        if (titleIdx === -1) continue;

        let rest = innerText.slice(titleIdx + tool.title.length).trim();
        if (tool.badge && rest.startsWith(tool.badge)) {
          rest = rest.slice(tool.badge.length).trim();
        }

        if (rest.length > DESCRIPTION_LIKE_THRESHOLD && !rest.startsWith(tool.description)) {
          problems.push(
            `[consistencia] ${route}: el enlace a ${tool.slug} muestra una descripcion que no coincide con el registro.\n` +
              `      esperado:  "${tool.description}"\n` +
              `      encontrado: "${rest}"`,
          );
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Chequeo 7: slug <-> page.tsx (registro <-> disco, en ambas direcciones)
// ---------------------------------------------------------------------------

function checkRegistryDiskParity() {
  for (const tool of TOOLS) {
    const pagePath = path.join(root, "src/app", tool.category, tool.slug, "page.tsx");
    if (!existsSync(pagePath)) {
      problems.push(
        `[registro-disco] ${tool.slug}: esta en el registro pero falta src/app/${tool.category}/${tool.slug}/page.tsx.`,
      );
    }
  }

  const registryKeys = new Set(TOOLS.map((t) => `${t.category}/${t.slug}`));
  for (const category of CATEGORY_SLUGS) {
    const dir = path.join(root, "src/app", category);
    if (!existsSync(dir)) continue;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const pagePath = path.join(dir, entry.name, "page.tsx");
      if (!existsSync(pagePath)) continue;
      const key = `${category}/${entry.name}`;
      if (!registryKeys.has(key)) {
        problems.push(`[disco-registro] src/app/${key}/page.tsx existe pero ${entry.name} no esta en el registro.`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Chequeo 8 (extra): og:image propia en las 32, generica en las 9 restantes,
// URL absoluta y 1200x630
// ---------------------------------------------------------------------------

function checkOgImageOwnership() {
  const genericBase = `${SITE_URL}/opengraph-image`;

  function checkDimensions(route, html, label) {
    const widths = getMetaContents(html, "property", "og:image:width");
    const heights = getMetaContents(html, "property", "og:image:height");
    if (widths[0] !== "1200" || heights[0] !== "630") {
      problems.push(
        `[og-image] ${route}${label}: dimensiones "${widths[0] ?? "?"}x${heights[0] ?? "?"}" (se esperaba 1200x630).`,
      );
    }
  }

  for (const { tool, route, html } of toolPagesHtml) {
    const images = getMetaContents(html, "property", "og:image");
    const expectedBase = `${SITE_URL}${route}/opengraph-image`;
    const own = images[0] === expectedBase || (images[0] ?? "").startsWith(`${expectedBase}?`);
    if (!images.length) {
      problems.push(`[og-image] ${route} (${tool.slug}): no tiene og:image.`);
    } else if (!own) {
      problems.push(
        `[og-image] ${route} (${tool.slug}): og:image es "${images[0]}", se esperaba la imagen propia ("${expectedBase}...").`,
      );
    } else if (!images[0].startsWith("https://")) {
      problems.push(`[og-image] ${route} (${tool.slug}): og:image no es una URL absoluta ("${images[0]}").`);
    }
    checkDimensions(route, html, ` (${tool.slug})`);
  }

  const genericPages = [...categoryPagesHtml, ...staticPagesHtml, homeHtml];
  for (const { route, html } of genericPages) {
    const images = getMetaContents(html, "property", "og:image");
    const generic = images[0] === genericBase || (images[0] ?? "").startsWith(`${genericBase}?`);
    if (!images.length) {
      problems.push(`[og-image] ${route}: no tiene og:image.`);
    } else if (!generic) {
      problems.push(
        `[og-image] ${route}: og:image es "${images[0]}", se esperaba la imagen generica ("${genericBase}...").`,
      );
    } else if (!images[0].startsWith("https://")) {
      problems.push(`[og-image] ${route}: og:image no es una URL absoluta ("${images[0]}").`);
    }
    checkDimensions(route, html, "");
  }
}

// ---------------------------------------------------------------------------
// Chequeo 9 (extra): JSON-LD de las 35 paginas parsea, conserva sus tipos y
// todas las URLs internas son absolutas
// ---------------------------------------------------------------------------

function collectUrlLikeValues(node, found) {
  if (Array.isArray(node)) {
    for (const item of node) collectUrlLikeValues(item, found);
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      if ((key === "url" || key === "item") && typeof value === "string") {
        found.push(value);
      } else {
        collectUrlLikeValues(value, found);
      }
    }
  }
}

function checkJsonLdShapeAndAbsoluteUrls() {
  for (const { tool, route, html } of toolPagesHtml) {
    const localProblems = [];
    const parsed = parseJsonLdGraph(html, route, ` (${tool.slug})`, localProblems);
    problems.push(...localProblems);
    if (!parsed) continue;

    const types = new Set(parsed["@graph"].map((n) => n["@type"]));
    const expectedAlways = ["SoftwareApplication", "BreadcrumbList", "HowTo"];
    for (const type of expectedAlways) {
      if (!types.has(type)) {
        problems.push(`[json-ld-tipos] ${route} (${tool.slug}): falta el tipo "${type}" en el JSON-LD.`);
      }
    }
    const expectsFaq = Boolean(tool.faq && tool.faq.length > 0);
    if (expectsFaq && !types.has("FAQPage")) {
      problems.push(
        `[json-ld-tipos] ${route} (${tool.slug}): el registro tiene FAQ pero el JSON-LD no incluye "FAQPage".`,
      );
    }
    if (!expectsFaq && types.has("FAQPage")) {
      problems.push(
        `[json-ld-tipos] ${route} (${tool.slug}): el JSON-LD incluye "FAQPage" pero el registro no tiene FAQ para esta herramienta.`,
      );
    }

    const urls = [];
    collectUrlLikeValues(parsed, urls);
    for (const url of urls) {
      if (!url.startsWith(SITE_URL)) {
        problems.push(`[json-ld-urls] ${route} (${tool.slug}): URL no absoluta en el JSON-LD: "${url}".`);
      }
    }
  }

  for (const { slug, route, html } of categoryPagesHtml) {
    const localProblems = [];
    const parsed = parseJsonLdGraph(html, route, ` (categoria ${slug})`, localProblems);
    problems.push(...localProblems);
    if (!parsed) continue;

    const types = new Set(parsed["@graph"].map((n) => n["@type"]));
    for (const type of ["BreadcrumbList", "ItemList"]) {
      if (!types.has(type)) {
        problems.push(`[json-ld-tipos] ${route}: falta el tipo "${type}" en el JSON-LD de la categoria.`);
      }
    }

    const urls = [];
    collectUrlLikeValues(parsed, urls);
    for (const url of urls) {
      if (!url.startsWith(SITE_URL)) {
        problems.push(`[json-ld-urls] ${route}: URL no absoluta en el JSON-LD: "${url}".`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Ejecucion
// ---------------------------------------------------------------------------

checkCanonical();
checkOgBasics();
checkTitleBrand();
checkBreadcrumbAndSoftwareApplication();
checkAccents();
checkListingConsistency();
checkRegistryDiskParity();
checkOgImageOwnership();
checkJsonLdShapeAndAbsoluteUrls();

if (problems.length > 0) {
  console.error(`\nVerificacion del build fallida: ${problems.length} problema(s) encontrado(s).\n`);
  for (const problem of problems) {
    console.error(`  - ${problem}`);
  }
  console.error("");
  process.exit(1);
}

console.log(
  `Verificacion del build OK: ${toolPagesHtml.length} herramientas, ${categoryPagesHtml.length} categorias, ${staticPagesHtml.length} paginas estaticas, home, 404 y 500 revisados sin problemas.`,
);
