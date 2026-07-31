import type { MetadataRoute } from "next";
import { CATEGORIES, TOOLS } from "@/lib/tools";
import { toolHref } from "@/lib/tool-registry";

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
