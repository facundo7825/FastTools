import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  tool: ReactNode;
  content?: ReactNode;
  relatedTools?: ReactNode;
  breadcrumb?: ReactNode;
};

export default function ToolLayout({ title, description, tool, content, relatedTools, breadcrumb }: Props) {
  return (
    <div className="flex flex-col gap-10">

      {/* Ad placeholder: top */}
      <div id="ad-tool-top" />

      {/* Breadcrumb */}
      {breadcrumb && <div>{breadcrumb}</div>}

      {/* Title section */}
      <div className="border-b pb-6">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>

      {/* Tool area */}
      <div className="border rounded-xl p-6 bg-white">
        {tool}
      </div>

      {/* Ad placeholder: mid */}
      <div id="ad-tool-mid" />

      {/* Content area */}
      {content && (
        <div className="prose prose-gray max-w-none text-sm text-gray-600">
          {content}
        </div>
      )}

      {/* Related tools */}
      {relatedTools && (
        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">Herramientas relacionadas</h2>
          {relatedTools}
        </div>
      )}

      {/* Ad placeholder: bottom */}
      <div id="ad-tool-bottom" />

    </div>
  );
}
