import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, COLLECTIONS, TOOLS } from "@/lib/tools";
import { featuredTools, getCategory, getTool, toolHref } from "@/lib/tool-registry";

export const metadata: Metadata = {
  // El template "%s | FastTools" del layout raiz NO se aplica a este page,
  // porque vive en el mismo segmento que el layout que lo define. Sin la marca
  // explicita, la home era la unica pagina del sitio sin "FastTools" en el title.
  title: { absolute: "FastTools | Herramientas online gratuitas" },
  description:
    "Explora herramientas online para texto, generadores y calculadoras. Todo en un solo lugar, gratis y sin registro.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Herramientas online gratuitas | FastTools",
    description:
      "Explora herramientas online para texto, generadores y calculadoras. Todo en un solo lugar, gratis y sin registro.",
    url: "/",
  },
  twitter: {
    title: "Herramientas online gratuitas | FastTools",
    description:
      "Explora herramientas online para texto, generadores y calculadoras. Todo en un solo lugar, gratis y sin registro.",
  },
};

const stats = [
  { value: String(TOOLS.length), label: "herramientas publicadas" },
  { value: String(CATEGORIES.length), label: "familias de uso" },
  { value: String(featuredTools().length), label: "destacadas ahora" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <section className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_18px_60px_rgba(23,32,51,0.08)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_28rem),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.12),transparent_26rem)]" />
        <div className="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_0.75fr] lg:items-end">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-text">
              Gratis
              <span className="text-muted">&bull;</span>
              Sin registro
              <span className="text-muted">&bull;</span>
              Directo al punto
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-text sm:text-6xl">
                Utilidades web con aspecto de caja de herramientas, no de lista aburrida.
              </h1>
              <p className="max-w-2xl text-base text-muted sm:text-xl">
                FastTools junta cálculos rápidos, limpieza de texto y generadores útiles en
                una sola mesa de trabajo. Entras, resuelves y sigues.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/herramientas"
                className="inline-flex items-center justify-center rounded-2xl bg-text px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-primary-strong"
              >
                Ver todas las herramientas
              </Link>
              <Link
                href="/texto/generador-slug"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Probar una de las nuevas
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-border bg-[#1c2434] p-6 text-white shadow-lg">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                Favoritas del momento
              </p>
              <div className="mt-4 grid gap-3">
                {featuredTools(3).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={toolHref(tool)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/8"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{tool.title}</p>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-white/65">
                        {tool.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/65">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] border border-border bg-surface px-5 py-5 shadow-sm"
          >
            <p className="text-3xl font-extrabold text-text">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Explora por objetivo
          </p>
          <h2 className="text-2xl font-bold text-text sm:text-4xl">
            Atajos para llegar más rápido a lo que necesitas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {COLLECTIONS.map((collection) => (
            <section
              key={collection.title}
              className="rounded-[1.8rem] border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-text">{collection.title}</h3>
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
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Explora por tipo
          </p>
          <h2 className="text-2xl font-bold text-text sm:text-4xl">
            Tres familias para resolver cosas distintas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group relative overflow-hidden rounded-[1.8rem] border border-border bg-surface p-6 shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(23,32,51,0.08)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent}`} />
              <div className="relative flex h-full flex-col gap-4">
                <div className="w-fit rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {cat.eyebrow}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text">{cat.title}</h3>
                  <p className="mt-2 text-sm text-muted">{cat.description}</p>
                </div>
                <span className="mt-auto text-sm font-semibold text-text group-hover:text-primary">
                  {`Entrar en ${cat.title.toLowerCase()} ->`}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Catálogo completo
            </p>
            <h2 className="text-2xl font-bold text-text sm:text-4xl">
              Herramientas para tareas pequeñas que aparecen seguido
            </h2>
          </div>
          <Link href="/herramientas" className="text-sm font-semibold text-text hover:text-primary">
            Ver índice completo {"->"}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={toolHref(tool)}
              className="group flex items-center justify-between gap-4 rounded-[1.4rem] border border-border bg-surface px-4 py-4 shadow-sm hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_14px_26px_rgba(23,32,51,0.06)]"
            >
              <div>
                <p className="text-sm font-semibold text-text group-hover:text-primary">
                  {tool.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                  {getCategory(tool.category).shortTitle}
                </p>
              </div>
              <span className="text-muted group-hover:text-primary">-&gt;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
