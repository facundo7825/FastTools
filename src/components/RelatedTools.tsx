import Link from "next/link";

type Tool = {
  href: string;
  title: string;
};

type Props = {
  tools: Tool[];
};

export default function RelatedTools({ tools }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          className="group rounded-[1.35rem] border border-border bg-surface px-4 py-4 shadow-sm hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_14px_24px_rgba(23,32,51,0.06)]"
        >
          <p className="text-sm font-semibold text-text group-hover:text-primary">
            {tool.title}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">
            Sigue con esta herramienta
          </p>
        </Link>
      ))}
    </div>
  );
}
