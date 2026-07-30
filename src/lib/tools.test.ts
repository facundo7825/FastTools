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
