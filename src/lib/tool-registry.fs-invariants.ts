import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { CATEGORIES, TOOLS } from "@/lib/tools";

// Chequeo de paridad entre el registro (src/lib/tools.ts) y el disco
// (src/app/{categoria}/{slug}/page.tsx), en los dos sentidos.
//
// Usa node:fs, asi que este modulo se importa SOLO desde src/app/sitemap.ts
// (o cualquier otro archivo que corra exclusivamente en el servidor durante
// el build). No lo importes desde tool-registry.ts ni desde ningun
// componente: node:fs no existe en el bundle del navegador.
//
// Por que no vive en tool-registry.invariants.ts: ese modulo es puro (recibe
// los datos por parametro) para poder testearse con Vitest sin tocar disco.
// Este, en cambio, necesita leer el sistema de archivos real.

export function checkRegistryDiskParity(): string[] {
  const root = process.cwd();
  const problems: string[] = [];

  for (const tool of TOOLS) {
    const pagePath = path.join(root, "src/app", tool.category, tool.slug, "page.tsx");
    if (!existsSync(pagePath)) {
      problems.push(
        `${tool.slug}: esta en el registro (src/lib/tools.ts) pero falta ` +
          `src/app/${tool.category}/${tool.slug}/page.tsx.`,
      );
    }
  }

  const registryKeys = new Set(TOOLS.map((tool) => `${tool.category}/${tool.slug}`));
  for (const category of CATEGORIES) {
    const dir = path.join(root, "src/app", category.slug);
    if (!existsSync(dir)) continue;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const pagePath = path.join(dir, entry.name, "page.tsx");
      if (!existsSync(pagePath)) continue;
      const key = `${category.slug}/${entry.name}`;
      if (!registryKeys.has(key)) {
        problems.push(
          `src/app/${key}/page.tsx existe pero "${entry.name}" no esta en el registro ` +
            `(src/lib/tools.ts).`,
        );
      }
    }
  }

  return problems;
}

export function assertRegistryDiskParity(): void {
  const problems = checkRegistryDiskParity();
  if (problems.length) {
    throw new Error(
      `Paridad registro/disco invalida (src/lib/tools.ts vs src/app):\n  - ${problems.join("\n  - ")}`,
    );
  }
}
