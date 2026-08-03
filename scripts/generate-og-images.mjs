// Script de un solo uso: genera src/app/{categoria}/{slug}/opengraph-image.tsx
// para cada herramienta del registro (src/lib/tools.ts), asi el slug de cada
// archivo sale del registro y no de tipear a mano.
//
// tools.ts es TypeScript y este proyecto no tiene ts-node/tsx instalado, asi
// que en vez de importar el modulo, parseamos con una regex el bloque
// `slug: "...",` seguido de `category: "...",` dentro de cada objeto Tool.
// El formato es estable (se verifico a mano contra las 32 entradas antes de
// correr el script).
//
// Uso: node scripts/generate-og-images.mjs

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const toolsFile = path.join(root, "src/lib/tools.ts");

const source = readFileSync(toolsFile, "utf8");

const start = source.indexOf("export const TOOLS");
const end = source.indexOf("export const COLLECTIONS");
if (start === -1 || end === -1) {
  throw new Error("No se pudo delimitar el bloque TOOLS en tools.ts");
}
const toolsBlock = source.slice(start, end);

const pairRegex = /slug:\s*"([^"]+)",\s*\n\s*category:\s*"([^"]+)",/g;
const tools = [];
let match;
while ((match = pairRegex.exec(toolsBlock)) !== null) {
  tools.push({ slug: match[1], category: match[2] });
}

if (tools.length === 0) {
  throw new Error("No se encontro ninguna herramienta. Revisa la regex contra tools.ts");
}

console.log(`Encontradas ${tools.length} herramientas.`);

for (const { slug, category } of tools) {
  const dir = path.join(root, "src/app", category, slug);
  if (!existsSync(dir)) {
    throw new Error(`No existe el directorio de la herramienta: ${dir}`);
  }
  mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, "opengraph-image.tsx");
  const content = `import { renderOgImage } from "@/lib/og-image";
import { getCategory, getTool } from "@/lib/tool-registry";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "FastTools";

export default function Image() {
  const tool = getTool("${slug}");
  return renderOgImage({ title: tool.title, eyebrow: getCategory(tool.category).shortTitle });
}
`;
  writeFileSync(filePath, content, "utf8");
}

console.log(`Generados ${tools.length} archivos opengraph-image.tsx.`);
