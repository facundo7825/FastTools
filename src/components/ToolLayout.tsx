import { ReactNode } from "react";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

type Props = {
  title: string;
  description: string;
  tool: ReactNode;
  content?: ReactNode;
  relatedTools?: ReactNode;
  breadcrumb?: ReactNode;
  categoryHref?: string;
  categoryLabel?: string;
};

export default function ToolLayout({ title, description, tool, content, relatedTools, breadcrumb, categoryHref, categoryLabel }: Props) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">

      {/* Ad placeholder: top */}
      <AdPlaceholder id="ad-tool-top" />

      {/* Breadcrumb */}
      {breadcrumb && <div>{breadcrumb}</div>}

      {/* Title section */}
      <div className="border-b border-border pb-5 sm:pb-6">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-text">{title}</h1>
        <p className="text-muted text-sm sm:text-base">{description}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">

        {/* Main column */}
        <div className="flex flex-col gap-6 sm:gap-8 flex-1 min-w-0">

          {/* Tool area */}
          <div className="border border-border rounded-2xl p-4 sm:p-7 bg-surface shadow-sm">
            {tool}
          </div>

          {/* Ad placeholder: mid */}
          <AdPlaceholder id="ad-tool-mid" />

          {/* Content area */}
          {content && (
            <div className="prose prose-gray max-w-none text-sm text-muted">
              {content}
            </div>
          )}

          {/* Related tools */}
          {relatedTools && (
            <div className="border-t border-border pt-6 sm:pt-8">
              <h2 className="text-lg font-semibold text-text mb-4">Herramientas relacionadas</h2>
              {relatedTools}
            </div>
          )}

        </div>

        {/* Ad placeholder: side */}
        <aside className="hidden lg:block w-[160px] shrink-0">
          <AdPlaceholder id="ad-tool-side" />
        </aside>

      </div>

      {/* Ad placeholder: bottom */}
      <AdPlaceholder id="ad-tool-bottom" />

      {/* Bottom navigation */}
      <div className="flex flex-wrap gap-4 border-t border-border pt-6 text-sm">
        <Link href="/" className="text-muted hover:text-primary transition-colors">
          ← Home
        </Link>
        {categoryHref && categoryLabel && (
          <Link href={categoryHref} className="text-muted hover:text-primary transition-colors">
            ← {categoryLabel}
          </Link>
        )}
      </div>

    </div>
  );
}
