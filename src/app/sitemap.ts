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
    "/texto/contador-caracteres-sin-espacios",
    "/texto/contador-palabras",
    "/texto/contador-lineas",
    "/texto/quitar-espacios",
    "/texto/quitar-saltos-linea",
    "/texto/eliminar-lineas-duplicadas",
    "/texto/ordenar-lineas",
    "/texto/contador-palabras-clave",
    "/texto/extraer-texto-html",
    "/texto/json-pretty-print",
    "/texto/minificar-texto",
    "/texto/generador-slug",
    "/texto/densidad-keyword",
    "/texto/texto-a-lista",
    "/texto/mayusculas-minusculas",
    "/texto/capitalizar-texto",
    "/texto/invertir-texto",
    "/generadores/password",
    "/generadores/qr",
    "/generadores/uuid",
    "/generadores/hashes",
    "/generadores/nombres-usuario",
    "/generadores/lorem-ipsum",
    "/calculadoras/porcentaje",
    "/calculadoras/descuento",
    "/calculadoras/promedio",
    "/calculadoras/aumento-porcentual",
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
