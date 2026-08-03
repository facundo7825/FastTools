import type { Category, Tool } from "@/lib/tools";

/**
 * Devuelve la lista de problemas del registro, vacia si esta sano.
 * Recibe los datos por parametro en vez de importarlos: asi el modulo
 * no depende de tool-registry (evita el ciclo de imports) y se puede
 * testear con datos sinteticos sin tocar el registro real.
 */
export function checkRegistryInvariants(
  tools: Tool[],
  categories: Category[],
  relatedFor: (slug: string) => Tool[],
): string[] {
  const problems: string[] = [];
  const slugs = tools.map((tool) => tool.slug);
  const known = new Set(slugs);

  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) problems.push(`slug duplicado: ${slug}`);
    seen.add(slug);
  }

  for (const tool of tools) {
    for (const rel of tool.related) {
      if (rel === tool.slug) problems.push(`${tool.slug} se enlaza a si misma`);
      else if (!known.has(rel)) {
        problems.push(`${tool.slug} enlaza a un slug inexistente: ${rel}`);
      }
    }
  }

  const inbound = new Set<string>();
  for (const tool of tools) {
    for (const rel of relatedFor(tool.slug)) inbound.add(rel.slug);
  }
  for (const tool of tools) {
    if (!inbound.has(tool.slug)) {
      problems.push(
        `huerfana: ${tool.slug} — ninguna herramienta la enlaza. Agregala al array ` +
          `"related" de alguna herramienta afin en src/lib/tools.ts (o quitale una ` +
          `entrada a otra para hacerle lugar, porque relatedFor devuelve como maximo 3).`,
      );
    }
  }

  for (const category of categories) {
    if (!tools.some((tool) => tool.category === category.slug)) {
      problems.push(`categoria sin herramientas: ${category.slug}`);
    }
  }

  return problems;
}

export function assertRegistryInvariants(
  tools: Tool[],
  categories: Category[],
  relatedFor: (slug: string) => Tool[],
): void {
  const problems = checkRegistryInvariants(tools, categories, relatedFor);
  if (problems.length) {
    throw new Error(
      `El registro de herramientas es invalido:\n  - ${problems.join("\n  - ")}`,
    );
  }
}
