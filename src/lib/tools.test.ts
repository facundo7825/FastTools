import { describe, expect, it } from "vitest";
import { TOOLS } from "@/lib/tools";

describe("TOOLS", () => {
  it("tiene las 32 herramientas publicadas", () => {
    expect(TOOLS).toHaveLength(32);
  });
});
