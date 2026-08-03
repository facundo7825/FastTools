import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { COLLECTIONS } from "@/lib/tools";
import { categoryJsonLd, getTool, toolHref, toolsByCategory } from "@/lib/tool-registry";
import { DEFAULT_OG_IMAGE } from "@/lib/og-image";

export const metadata: Metadata = {
  title: "Herramientas de texto",
  description:
    "Herramientas online para trabajar con texto: contadores, limpieza, líneas, saltos y conversiones.",
  alternates: {
    canonical: "/texto",
  },
  openGraph: {
    title: "Herramientas de texto | FastTools",
    description:
      "Herramientas online para trabajar con texto: contadores, limpieza, líneas, saltos y conversiones.",
    url: "/texto",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Herramientas de texto | FastTools",
    description:
      "Herramientas online para trabajar con texto: contadores, limpieza, líneas, saltos y conversiones.",
  },
};

export default function Texto() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd("texto")) }}
      />
      <Breadcrumb crumbs={[{ href: "/", title: "Inicio" }, { href: "/texto", title: "Texto" }]} />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Escribir, ordenar y ajustar
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-text sm:text-5xl">
          Herramientas de texto
        </h1>
        <p className="mt-4 max-w-3xl text-muted">
          Esta categoría agrupa utilidades para limpiar, contar, transformar, ordenar,
          analizar, generar slugs, crear listas y formatear texto o datos sin abrir otra
          app ni instalar nada.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {COLLECTIONS.map((collection) => (
          <section
            key={collection.title}
            className="rounded-[1.7rem] border border-border bg-surface p-5 shadow-sm"
          >
            <h2 className="text-xl font-bold text-text">{collection.title}</h2>
            <p className="mt-2 text-sm text-muted">{collection.description}</p>
            <div className="mt-5 flex flex-col gap-3">
              {collection.slugs.map((slug) => {
                const tool = getTool(slug);
                return (
                  <Link
                    key={slug}
                    href={toolHref(tool)}
                    className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-text hover:border-primary hover:text-primary"
                  >
                    {tool.title}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {toolsByCategory("texto").map((tool) => (
          <Link
            key={tool.slug}
            href={toolHref(tool)}
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
