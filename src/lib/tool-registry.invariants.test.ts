import { describe, expect, it } from "vitest";
import { CATEGORIES, TOOLS, type Category, type Tool } from "@/lib/tools";
import { relatedFor } from "@/lib/tool-registry";
import {
  assertRegistryInvariants,
  checkRegistryInvariants,
} from "@/lib/tool-registry.invariants";

function makeTool(overrides: Partial<Tool> & Pick<Tool, "slug" | "category">): Tool {
  return {
    title: `Tool ${overrides.slug}`,
    description: "descripcion",
    metaTitle: "meta title",
    metaDescription: "meta description",
    related: [],
    ...overrides,
  };
}

function makeCategory(overrides: Partial<Category> & Pick<Category, "slug">): Category {
  return {
    title: `Categoria ${overrides.slug}`,
    shortTitle: overrides.slug,
    eyebrow: "eyebrow",
    description: "descripcion",
    metaDescription: "meta description",
    accent: "accent",
    ...overrides,
  };
}

// relatedFor sintetico que no genera huerfanas: cada llamada devuelve todas
// las herramientas del set, asi el problema bajo prueba queda aislado.
function relatedForAll(tools: Tool[]): (slug: string) => Tool[] {
  return () => tools;
}

describe("checkRegistryInvariants", () => {
  it("no encuentra problemas con el registro real", () => {
    expect(checkRegistryInvariants(TOOLS, CATEGORIES, relatedFor)).toEqual([]);
  });

  it("detecta un slug duplicado", () => {
    const tools = [
      makeTool({ slug: "a", category: "texto" }),
      makeTool({ slug: "a", category: "texto" }),
    ];
    const categories = [makeCategory({ slug: "texto" })];

    const problems = checkRegistryInvariants(tools, categories, relatedForAll(tools));

    expect(problems).toContain("slug duplicado: a");
  });

  it("detecta un related que apunta a un slug inexistente", () => {
    const tools = [
      makeTool({ slug: "a", category: "texto", related: ["no-existe"] }),
      makeTool({ slug: "b", category: "texto" }),
    ];
    const categories = [makeCategory({ slug: "texto" })];

    const problems = checkRegistryInvariants(tools, categories, relatedForAll(tools));

    expect(problems).toContain("a enlaza a un slug inexistente: no-existe");
  });

  it("detecta una herramienta que se enlaza a si misma", () => {
    const tools = [makeTool({ slug: "a", category: "texto", related: ["a"] })];
    const categories = [makeCategory({ slug: "texto" })];

    const problems = checkRegistryInvariants(tools, categories, relatedForAll(tools));

    expect(problems).toContain("a se enlaza a si misma");
  });

  it("detecta una categoria sin herramientas", () => {
    const tools = [makeTool({ slug: "a", category: "texto" })];
    const categories = [
      makeCategory({ slug: "texto" }),
      makeCategory({ slug: "generadores" }),
    ];

    const problems = checkRegistryInvariants(tools, categories, relatedForAll(tools));

    expect(problems).toContain("categoria sin herramientas: generadores");
  });

  it("detecta una herramienta huerfana", () => {
    const tools = [
      makeTool({ slug: "a", category: "texto" }),
      makeTool({ slug: "b", category: "texto" }),
    ];
    const categories = [makeCategory({ slug: "texto" })];
    // "b" nunca aparece como relacionada de nadie: queda huerfana.
    const onlyA = () => [tools[0]];

    const problems = checkRegistryInvariants(tools, categories, onlyA);

    expect(problems).toContain("huerfana: b");
  });

  it("junta todos los problemas a la vez, no solo el primero", () => {
    const tools = [
      makeTool({ slug: "a", category: "texto", related: ["a", "no-existe"] }),
      makeTool({ slug: "a", category: "texto" }),
    ];
    const categories = [
      makeCategory({ slug: "texto" }),
      makeCategory({ slug: "generadores" }),
    ];
    const noRelated = () => [];

    const problems = checkRegistryInvariants(tools, categories, noRelated);

    expect(problems).toContain("slug duplicado: a");
    expect(problems).toContain("a se enlaza a si misma");
    expect(problems).toContain("a enlaza a un slug inexistente: no-existe");
    expect(problems).toContain("categoria sin herramientas: generadores");
    expect(problems.length).toBeGreaterThan(1);
  });
});

describe("assertRegistryInvariants", () => {
  it("pasa con el registro real", () => {
    expect(() => assertRegistryInvariants(TOOLS, CATEGORIES, relatedFor)).not.toThrow();
  });

  it("lanza con un mensaje que lista todos los problemas juntos", () => {
    const tools = [
      makeTool({ slug: "a", category: "texto", related: ["a", "no-existe"] }),
      makeTool({ slug: "a", category: "texto" }),
    ];
    const categories = [
      makeCategory({ slug: "texto" }),
      makeCategory({ slug: "generadores" }),
    ];
    const noRelated = () => [];

    let error: Error | undefined;
    try {
      assertRegistryInvariants(tools, categories, noRelated);
    } catch (e) {
      error = e as Error;
    }

    expect(error).toBeDefined();
    expect(error?.message).toContain("slug duplicado: a");
    expect(error?.message).toContain("a se enlaza a si misma");
    expect(error?.message).toContain("a enlaza a un slug inexistente: no-existe");
    expect(error?.message).toContain("categoria sin herramientas: generadores");
  });
});
