import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import QuitarSaltosLinea from "./QuitarSaltosLinea";

const SLUG = "quitar-saltos-linea";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Quitar saltos de línea sirve para convertir texto multilínea en un bloque continuo.
      Es útil para formularios, importaciones simples, prompts y contenido que debe ir en
      una sola línea.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega un texto con varias líneas.</li>
      <li>La herramienta lo pasa automáticamente a una sola línea.</li>
      <li>Copia el resultado final cuando te sirva.</li>
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
      <ToolLayout slug={SLUG} tool={<QuitarSaltosLinea />} content={content} />
    </>
  );
}
