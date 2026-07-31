import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import GeneradorUUID from "./GeneradorUUID";

const SLUG = "uuid";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Esta herramienta genera UUID v4 directamente en el navegador. Es útil para pruebas,
      desarrollo, identificadores temporales y cualquier caso donde necesites IDs únicas
      sin depender de una librería externa.
    </p>
    <h2>Cómo usar el generador</h2>
    <ol>
      <li>Elige cuántas IDs quieres generar.</li>
      <li>La herramienta crea la lista automáticamente.</li>
      <li>Copia todos los UUIDs si quieres llevarlos a otro lugar.</li>
    </ol>
  </>
);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd(SLUG)) }}
      />
      <ToolLayout slug={SLUG} tool={<GeneradorUUID />} content={content} />
    </>
  );
}
