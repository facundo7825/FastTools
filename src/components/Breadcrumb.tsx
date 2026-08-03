import Link from "next/link";
import type { Crumb } from "@/lib/tool-registry";

type Props = {
  crumbs: Crumb[];
};

export default function Breadcrumb({ crumbs }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-muted"
    >
      {crumbs.map((crumb, index) => {
        const text = crumb.title;
        return (
          <span key={crumb.href} className="flex items-center gap-2">
            {index < crumbs.length - 1 ? (
              <>
                <Link
                  href={crumb.href}
                  className="rounded-full border border-border bg-surface px-3 py-1 hover:border-primary hover:text-primary"
                >
                  {text}
                </Link>
                <span className="text-muted/60">/</span>
              </>
            ) : (
              <span
                aria-current="page"
                className="rounded-full border border-border bg-surface-strong px-3 py-1 text-text"
              >
                {text}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
