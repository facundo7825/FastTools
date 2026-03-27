import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fasttools.app/sitemap.xml",
    host: "https://fasttools.app",
  };
}
