import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CATEGORIES } from "@/lib/tools";
import { featuredTools, toolHref, toolsByCategory } from "@/lib/tool-registry";

export const metadata: Metadata = {
  title: "Todas las herramientas",
  description:
    "Explora todas las herramientas online gratuitas de FastTools: texto, generadores y calculadoras en un solo índice.",
  alternates: {
    canonical: "/herramientas",
  },
  openGraph: {
    title: "Todas las herramientas | FastTools",
    description:
      "Explora todas las herramientas online gratuitas de FastTools: texto, generadores y calculadoras en un solo índice.",
    url: "/herramientas",
  },
  twitter: {
    title: "Todas las herramientas | FastTools",
    description:
      "Explora todas las herramientas online gratuitas de FastTools: texto, generadores y calculadoras en un solo índice.",
  },
};

export default function Herramientas() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <Breadcrumb crumbs={[{ href: "/", title: "Inicio" }, { href: "/herramientas", title: "Herramientas" }]} />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Catálogo completo</p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">Todas las herramientas en un solo panel</h1>
        <p className="mt-4 max-w-3xl text-muted">
          FastTools organiza las utilidades por tipo de tarea para que encuentres rápido lo que necesitas: escribir mejor, generar recursos o resolver cálculos.
        </p>
      </section>

      <section className="rounded-[1.8rem] border border-border bg-surface px-5 py-6 shadow-sm sm:px-7">
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Puntos de entrada</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-text">Herramientas destacadas para arrancar rápido</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featuredTools(4).map((tool) => (
            <Link
              key={tool.slug}
              href={toolHref(tool)}
              className="group rounded-[1.45rem] border border-border bg-background px-5 py-5 hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-semibold text-text group-hover:text-primary">{tool.title}</p>
                <span className="rounded-full bg-surface-strong px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
                  {tool.badge}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{tool.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-text group-hover:text-primary">
                Abrir herramienta {"->"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-8">
        {CATEGORIES.map((cat) => (
          <section
            key={cat.slug}
            className="rounded-[1.8rem] border border-border bg-surface px-5 py-6 shadow-sm sm:px-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">{cat.eyebrow}</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-text">{cat.title}</h2>
                <p className="mt-2 text-sm text-muted">{cat.description}</p>
              </div>
              <Link
                href={`/${cat.slug}`}
                className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-semibold text-text hover:border-primary hover:text-primary"
              >
                Ver categoría {"->"}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {toolsByCategory(cat.slug).map((tool) => (
                <Link
                  key={tool.slug}
                  href={toolHref(tool)}
                  className="group rounded-[1.35rem] border border-border bg-background px-4 py-4 hover:-translate-y-0.5 hover:border-primary"
                >
                  <p className="text-sm font-semibold text-text group-hover:text-primary">{tool.title}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">Abrir herramienta</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
