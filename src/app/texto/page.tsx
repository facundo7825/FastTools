import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Herramientas de texto",
  description:
    "Herramientas online para trabajar con texto: contadores, limpieza, lineas, saltos y conversiones.",
  alternates: {
    canonical: "/texto",
  },
  openGraph: {
    title: "Herramientas de texto | FastTools",
    description:
      "Herramientas online para trabajar con texto: contadores, limpieza, lineas, saltos y conversiones.",
    url: "/texto",
  },
  twitter: {
    title: "Herramientas de texto | FastTools",
    description:
      "Herramientas online para trabajar con texto: contadores, limpieza, lineas, saltos y conversiones.",
  },
};

const tools = [
  { href: "/texto/contador-caracteres", title: "Contador de caracteres", description: "Cuenta los caracteres de tu texto en tiempo real." },
  { href: "/texto/contador-caracteres-sin-espacios", title: "Contador sin espacios", description: "Cuenta solo caracteres reales, sin espacios ni saltos." },
  { href: "/texto/contador-palabras", title: "Contador de palabras", description: "Cuenta las palabras de tu texto en tiempo real." },
  { href: "/texto/contador-lineas", title: "Contador de lineas", description: "Cuenta las lineas totales y no vacias de tu texto." },
  { href: "/texto/quitar-espacios", title: "Quitar espacios", description: "Elimina los espacios extra de tu texto." },
  { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de linea", description: "Pasa texto con varias lineas a una sola linea continua." },
  { href: "/texto/eliminar-lineas-duplicadas", title: "Eliminar lineas duplicadas", description: "Limpia listas repetidas manteniendo solo la primera aparicion." },
  { href: "/texto/ordenar-lineas", title: "Ordenar lineas alfabeticamente", description: "Ordena listas por linea y copia el resultado al instante." },
  { href: "/texto/contador-palabras-clave", title: "Contador de palabras clave", description: "Cuenta repeticiones y densidad estimada de una keyword en tu texto." },
  { href: "/texto/extraer-texto-html", title: "Extractor de texto de HTML", description: "Convierte HTML a texto plano sin etiquetas ni ruido visual." },
  { href: "/texto/json-pretty-print", title: "JSON pretty print", description: "Formatea JSON online con validacion y sangria legible." },
  { href: "/texto/minificar-texto", title: "Minificador de texto", description: "Compacta espacios y saltos para dejar una sola version corta." },
  { href: "/texto/generador-slug", title: "Generador de slug URL", description: "Convierte titulos o frases en URLs limpias y amigables." },
  { href: "/texto/densidad-keyword", title: "Densidad de keyword", description: "Mide la presencia porcentual de una keyword dentro de un texto." },
  { href: "/texto/texto-a-lista", title: "Convertidor de texto a lista", description: "Transforma texto separado por delimitadores en una lista ordenada." },
  { href: "/texto/mayusculas-minusculas", title: "Mayusculas / Minusculas", description: "Convierte tu texto a mayusculas o minusculas." },
  { href: "/texto/capitalizar-texto", title: "Capitalizar texto", description: "Pone en mayuscula la primera letra de cada palabra." },
  { href: "/texto/invertir-texto", title: "Invertir texto", description: "Invierte los caracteres de tu texto." },
];

const collections = [
  {
    title: "SEO y contenido",
    description: "Bloque pensado para redactores, blogs, ecommerce y revisiones rapidas de contenido.",
    links: [
      { href: "/texto/contador-palabras", label: "Contador de palabras" },
      { href: "/texto/contador-palabras-clave", label: "Contador de palabras clave" },
      { href: "/texto/densidad-keyword", label: "Densidad de keyword" },
      { href: "/texto/generador-slug", label: "Generador de slug URL" },
    ],
  },
  {
    title: "Limpieza y formato",
    description: "Ideal para copiar, ordenar y dejar texto listo para reutilizar en otro lado.",
    links: [
      { href: "/texto/quitar-espacios", label: "Quitar espacios" },
      { href: "/texto/quitar-saltos-linea", label: "Quitar saltos de linea" },
      { href: "/texto/eliminar-lineas-duplicadas", label: "Eliminar lineas duplicadas" },
      { href: "/texto/texto-a-lista", label: "Convertidor de texto a lista" },
    ],
  },
  {
    title: "Datos y desarrollo",
    description: "Herramientas utiles cuando trabajas con payloads, HTML o bloques tecnicos.",
    links: [
      { href: "/texto/json-pretty-print", label: "JSON pretty print" },
      { href: "/texto/extraer-texto-html", label: "Extractor de texto de HTML" },
      { href: "/texto/minificar-texto", label: "Minificador de texto" },
      { href: "/texto/ordenar-lineas", label: "Ordenar lineas alfabeticamente" },
    ],
  },
];

export default function Texto() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }]} />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Escribir, ordenar y ajustar
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-text sm:text-5xl">
          Herramientas de texto
        </h1>
        <p className="mt-4 max-w-3xl text-muted">
          Esta categoria agrupa utilidades para limpiar, contar, transformar, ordenar,
          analizar, generar slugs, crear listas y formatear texto o datos sin abrir otra
          app ni instalar nada.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {collections.map((collection) => (
          <section
            key={collection.title}
            className="rounded-[1.7rem] border border-border bg-surface p-5 shadow-sm"
          >
            <h2 className="text-xl font-bold text-text">{collection.title}</h2>
            <p className="mt-2 text-sm text-muted">{collection.description}</p>
            <div className="mt-5 flex flex-col gap-3">
              {collection.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-text hover:border-primary hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-[1.6rem] border border-border bg-surface p-5 shadow-sm hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_26px_rgba(23,32,51,0.06)]"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Texto</p>
            <p className="mt-3 text-lg font-semibold text-text group-hover:text-primary">{tool.title}</p>
            <p className="mt-2 text-sm text-muted">{tool.description}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-text group-hover:text-primary">
              Abrir herramienta {"->"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
