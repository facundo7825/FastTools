import Link from "next/link";

// not-found.tsx no admite export de metadata (solo global-not-found.tsx).
// No hace falta: Next inyecta <meta name="robots" content="noindex" />
// automaticamente en las respuestas con estado 404.

const suggestions = [
  { href: "/texto", label: "Herramientas de texto" },
  { href: "/generadores", label: "Generadores" },
  { href: "/calculadoras", label: "Calculadoras" },
];

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 py-6 sm:py-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-10 shadow-[0_18px_40px_rgba(23,32,51,0.06)] sm:px-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_22rem),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.12),transparent_22rem)]" />
        <div className="relative flex flex-col gap-5">
          <div className="inline-flex w-fit rounded-full border border-border bg-surface-strong px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            Error 404
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-text sm:text-5xl">
              Esta página no existe
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              Puede que el enlace esté mal escrito o que la herramienta haya cambiado de
              dirección. Desde aquí puedes volver al catálogo y seguir donde estabas.
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
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Explora por categoría
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {suggestions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-4 rounded-[1.4rem] border border-border bg-surface px-4 py-4 shadow-sm hover:-translate-y-0.5 hover:border-primary"
            >
              <span className="text-sm font-semibold text-text group-hover:text-primary">
                {item.label}
              </span>
              <span className="text-muted group-hover:text-primary">-&gt;</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
