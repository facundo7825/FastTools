import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  tool: ReactNode;
  content?: ReactNode;
  relatedTools?: ReactNode;
};

export default function ToolLayout({ title, description, tool, content, relatedTools }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div>{tool}</div>

      {content && <div>{content}</div>}

      {relatedTools && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Herramientas relacionadas</h2>
          {relatedTools}
        </div>
      )}
    </div>
  );
}
