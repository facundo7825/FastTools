import type { MetadataRoute } from "next";
import { CATEGORIES, TOOLS } from "@/lib/tools";
import { toolHref } from "@/lib/tool-registry";
import { assertRegistryDiskParity } from "@/lib/tool-registry.fs-invariants";

// Corre en el servidor durante el build (sitemap.ts nunca se bundlea para el
// navegador): si una entrada del registro no tiene su page.tsx en disco, o
// si sobra un directorio de herramienta que no esta en el registro, esto
// tira y el build falla en vez de emitir una URL rota al sitemap.
assertRegistryDiskParity();

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
