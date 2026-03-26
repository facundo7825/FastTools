import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-surface shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg sm:text-xl font-extrabold tracking-tight text-primary shrink-0"
        >
          FastTools
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className="px-3 py-1.5 text-sm font-medium text-muted rounded-lg hover:bg-background hover:text-text transition-colors"
          >
            Home
          </Link>
          <Link
            href="/herramientas"
            className="px-3 py-1.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-700 transition-colors"
          >
            Herramientas
          </Link>
        </div>
      </div>
    </nav>
  );
}
