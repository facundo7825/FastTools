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
    <nav className="flex items-center gap-1 text-sm text-gray-400">
      {crumbs.map((crumb, index) => (
        <span key={crumb.href} className="flex items-center gap-1">
          {index < crumbs.length - 1 ? (
            <>
              <Link href={crumb.href} className="hover:text-gray-700 transition-colors">
                {crumb.label}
              </Link>
              <span>›</span>
            </>
          ) : (
            <span className="text-gray-600">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
