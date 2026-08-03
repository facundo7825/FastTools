import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import JsonPrettyPrint from "./JsonPrettyPrint";

const SLUG = "json-pretty-print";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El pretty print de JSON convierte bloques compactos o difíciles de leer en una
      versión ordenada y clara. Es una utilidad simple, pero muy práctica para revisar
      respuestas de API, archivos de configuración y datos de pruebas.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega el JSON completo en el área de entrada.</li>
      <li>Elige si quieres 2 o 4 espacios de indentación.</li>
      <li>Copia el resultado ya formateado para seguir trabajando.</li>
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
      <ToolLayout slug={SLUG} tool={<JsonPrettyPrint />} content={content} />
    </>
  );
}
