import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fasttools.app";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/herramientas`, lastModified: new Date() },
    { url: `${base}/texto`, lastModified: new Date() },
    { url: `${base}/generadores`, lastModified: new Date() },
    { url: `${base}/calculadoras`, lastModified: new Date() },
    { url: `${base}/texto/contador-caracteres`, lastModified: new Date() },
    { url: `${base}/texto/contador-palabras`, lastModified: new Date() },
    { url: `${base}/texto/quitar-espacios`, lastModified: new Date() },
    { url: `${base}/texto/mayusculas-minusculas`, lastModified: new Date() },
    { url: `${base}/texto/capitalizar-texto`, lastModified: new Date() },
    { url: `${base}/texto/invertir-texto`, lastModified: new Date() },
    { url: `${base}/generadores/password`, lastModified: new Date() },
    { url: `${base}/generadores/qr`, lastModified: new Date() },
    { url: `${base}/calculadoras/porcentaje`, lastModified: new Date() },
    { url: `${base}/calculadoras/edad`, lastModified: new Date() },
    { url: `${base}/calculadoras/regla-de-tres`, lastModified: new Date() },
  ];
}
