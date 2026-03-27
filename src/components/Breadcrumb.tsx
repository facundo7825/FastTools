import Link from "next/link";

type Crumb = {
  href: string;
  label: string;
};

type Props = {
  crumbs: Crumb[];
};

export default function Breadcrumb({ crumbs }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-muted"
    >
      {crumbs.map((crumb, index) => (
        <span key={crumb.href} className="flex items-center gap-2">
          {index < crumbs.length - 1 ? (
            <>
              <Link
                href={crumb.href}
                className="rounded-full border border-border bg-surface px-3 py-1 hover:border-primary hover:text-primary"
              >
                {crumb.label}
              </Link>
              <span className="text-muted/60">/</span>
            </>
          ) : (
            <span className="rounded-full border border-border bg-surface-strong px-3 py-1 text-text">
              {crumb.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
