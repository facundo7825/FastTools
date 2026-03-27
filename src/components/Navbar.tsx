import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/80 bg-surface/88 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 flex items-center gap-3 rounded-xl px-1 py-1 hover:opacity-90"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-text text-surface text-lg font-bold shadow-sm">
            F
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-text">
              FastTools
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Utilidades rapidas
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-muted rounded-xl hover:bg-surface-strong hover:text-text"
          >
            Inicio
          </Link>
          <Link
            href="/herramientas"
            className="px-4 py-2 text-sm font-semibold text-white bg-text rounded-xl hover:bg-primary-strong shadow-sm"
          >
            Explorar herramientas
          </Link>
        </div>
      </div>
    </nav>
  );
}
