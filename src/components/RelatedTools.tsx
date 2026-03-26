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
          className="block border rounded-xl px-4 py-3 text-sm font-medium hover:border-gray-400 hover:shadow-sm transition-all"
        >
          {tool.title}
        </Link>
      ))}
    </div>
  );
}
