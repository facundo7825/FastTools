import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import GeneradorHashes from "./GeneradorHashes";

const SLUG = "hashes";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El generador de hashes sirve para obtener rápidamente una huella digital de un
      texto. Es útil para pruebas técnicas, validaciones, comparaciones y pequeños
      flujos de desarrollo donde necesitas un hash legible al instante.
    </p>
    <h2>Cómo usar el generador</h2>
    <ol>
      <li>Escribe o pega el texto que quieres procesar.</li>
      <li>Elige entre SHA-1, SHA-256 o SHA-512.</li>
      <li>Copia el hash generado para usarlo en tu flujo.</li>
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
      <ToolLayout slug={SLUG} tool={<GeneradorHashes />} content={content} />
    </>
  );
}
