import { describe, expect, it } from "vitest";
import { CATEGORIES, TOOLS } from "@/lib/tools";
import {
  breadcrumbFor,
  categoryMetadata,
  featuredTools,
  getCategory,
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

describe("featuredTools", () => {
  it("sin limite devuelve todas las que tienen badge", () => {
    const all = featuredTools();
    expect(all).toHaveLength(4);
    for (const t of all) expect(t.badge).toBeTruthy();
  });

  it("con limite recorta la lista", () => {
    expect(featuredTools(2)).toHaveLength(2);
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

  it("nunca devuelve mas de 3", () => {
    for (const tool of TOOLS) {
      expect(relatedFor(tool.slug)).toHaveLength(3);
    }
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

describe("categoryMetadata", () => {
  it("declara el canonical propio", () => {
    expect(categoryMetadata("texto").alternates?.canonical).toBe("/texto");
  });

  it("no duplica la marca en el title", () => {
    expect(categoryMetadata("texto").title).not.toContain("FastTools");
  });

  it("usa la description del registro (metaDescription de la categoria)", () => {
    const category = getCategory("texto");
    expect(categoryMetadata("texto").description).toBe(category.metaDescription);
  });

  it("pone la marca en openGraph, que no recibe el template", () => {
    const og = categoryMetadata("texto").openGraph;
    expect(og?.title).toContain("FastTools");
  });

  it("pone la marca en twitter, que no recibe el template", () => {
    const twitter = categoryMetadata("texto").twitter;
    expect(twitter?.title).toContain("FastTools");
  });

  it("incluye la imagen generica de open graph (Next reemplaza el objeto por segmento)", () => {
    const og = categoryMetadata("texto").openGraph;
    expect(og?.images).toBeDefined();
  });

  it("funciona para las 3 categorias", () => {
    for (const category of CATEGORIES) {
      const meta = categoryMetadata(category.slug);
      expect(meta.title).toBe(category.title);
      expect(meta.description).toBe(category.metaDescription);
      expect(meta.alternates?.canonical).toBe(`/${category.slug}`);
    }
  });
});
