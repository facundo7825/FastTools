import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fasttools.app";
  const pages = [
    "/",
    "/herramientas",
    "/sobre",
    "/privacidad",
    "/terminos",
    "/contacto",
    "/texto",
    "/generadores",
    "/calculadoras",
    "/texto/contador-caracteres",
    "/texto/contador-palabras",
    "/texto/contador-lineas",
    "/texto/quitar-espacios",
    "/texto/mayusculas-minusculas",
    "/texto/capitalizar-texto",
    "/texto/invertir-texto",
    "/generadores/password",
    "/generadores/qr",
    "/generadores/lorem-ipsum",
    "/calculadoras/porcentaje",
    "/calculadoras/edad",
    "/calculadoras/regla-de-tres",
    "/calculadoras/imc",
    "/calculadoras/temperatura",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
