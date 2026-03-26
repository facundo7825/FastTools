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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {tools.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          className="block bg-surface border border-border rounded-2xl px-4 py-3 text-sm font-medium text-text shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition-all"
        >
          {tool.title}
        </Link>
      ))}
    </div>
  );
}
