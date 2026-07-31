import { ReactNode } from "react";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";
import { breadcrumbFor, getCategory, getTool, relatedFor } from "@/lib/tool-registry";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";

type Props = {
  // Modo nuevo: si viene `slug`, todo se deriva del registro y los props
  // legacy de abajo se ignoran.
  slug?: string;
  tool: ReactNode;
  content?: ReactNode;
  // Legacy: los usan las 32 paginas hasta que la Tarea 7 las migre.
  // Esta tarea los borra al terminar.
  title?: string;
  description?: string;
  categoryHref?: string;
  categoryLabel?: string;
  breadcrumb?: ReactNode;
  relatedTools?: ReactNode;
};

export default function ToolLayout(props: Props) {
  const { slug, tool, content } = props;

  const derived = slug
    ? (() => {
        const meta = getTool(slug);
        const category = getCategory(meta.category);
        return {
          title: meta.title,
          description: meta.description,
          categoryHref: `/${category.slug}`,
          categoryLabel: category.shortTitle,
          crumbs: breadcrumbFor(slug),
          related: relatedFor(slug),
        };
      })()
    : null;

  const title = derived?.title ?? props.title ?? "";
  const description = derived?.description ?? props.description ?? "";
  const categoryHref = derived?.categoryHref ?? props.categoryHref;
  const categoryLabel = derived?.categoryLabel ?? props.categoryLabel;
  const breadcrumb = derived ? <Breadcrumb crumbs={derived.crumbs} /> : props.breadcrumb;
  const relatedTools = derived ? (
    <RelatedTools tools={derived.related} />
  ) : (
    props.relatedTools
  );

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <AdPlaceholder id="ad-tool-top" />

      {breadcrumb && <div>{breadcrumb}</div>}

      <section className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_18px_40px_rgba(23,32,51,0.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_22rem),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.12),transparent_22rem)]" />
        <div className="relative grid gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1fr_0.36fr]">
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit rounded-full border border-border bg-surface-strong px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Herramienta puntual
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-text">{title}</h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted">{description}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-border bg-[#1c2434] px-5 py-4 text-white">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Uso rápido</p>
              <p className="mt-2 text-sm text-white/75">
                Entra, completa el campo y resuelve la tarea sin pasos extra.
              </p>
            </div>
            {categoryHref && categoryLabel && (
              <Link
                href={categoryHref}
                className="rounded-[1.5rem] border border-border bg-surface px-5 py-4 shadow-sm hover:-translate-y-0.5 hover:border-primary"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Categoría</p>
                <p className="mt-2 text-sm font-semibold text-text">{categoryLabel}</p>
              </Link>
            )}
            <Link
              href="/herramientas"
              className="rounded-[1.5rem] border border-border bg-surface px-5 py-4 shadow-sm hover:-translate-y-0.5 hover:border-primary"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Seguir explorando
              </p>
              <p className="mt-2 text-sm font-semibold text-text">Ver todo el catálogo</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="flex flex-col gap-6 sm:gap-8 flex-1 min-w-0">
          <section className="rounded-[1.8rem] border border-border bg-surface p-4 shadow-sm sm:p-7">
            {tool}
          </section>

          <AdPlaceholder id="ad-tool-mid" />

          {content && (
            <section className="rounded-[1.8rem] border border-border bg-surface px-5 py-6 shadow-sm sm:px-7">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                  Guía y contexto
                </p>
              </div>
              <div className="prose prose-gray max-w-none text-sm text-muted">
                {content}
              </div>
            </section>
          )}

          {relatedTools && (
            <section className="rounded-[1.8rem] border border-border bg-surface px-5 py-6 shadow-sm sm:px-7">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Sigue el flujo
                </p>
                <h2 className="mt-2 text-xl font-semibold text-text">Herramientas relacionadas</h2>
              </div>
              {relatedTools}
            </section>
          )}
        </div>

        <aside className="hidden lg:block w-[220px] shrink-0">
          <div className="sticky top-24 flex flex-col gap-4">
            <div className="rounded-[1.5rem] border border-border bg-surface px-5 py-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Consejo</p>
              <p className="mt-2 text-sm text-muted">
                Si esta herramienta te sirve, revisa también las otras del mismo grupo para
                completar el flujo sin salir del sitio.
              </p>
            </div>
            <AdPlaceholder id="ad-tool-side" />
          </div>
        </aside>
      </div>

      <AdPlaceholder id="ad-tool-bottom" />

      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href="/herramientas"
          className="rounded-full border border-border bg-surface px-4 py-2 text-muted hover:border-primary hover:text-primary"
        >
          {"<- Ver todo el catálogo"}
        </Link>
        <Link
          href="/"
          className="rounded-full border border-border bg-surface px-4 py-2 text-muted hover:border-primary hover:text-primary"
        >
          {"<- Volver al inicio"}
        </Link>
        {categoryHref && categoryLabel && (
          <Link
            href={categoryHref}
            className="rounded-full border border-border bg-surface px-4 py-2 text-muted hover:border-primary hover:text-primary"
          >
            {`<- Volver a ${categoryLabel}`}
          </Link>
        )}
      </div>
    </div>
  );
}
