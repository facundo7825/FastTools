import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import QuitarEspacios from "./QuitarEspacios";

const SLUG = "quitar-espacios";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Cuando copias texto desde un PDF, un documento o una web, es común que aparezcan
      espacios dobles o cortes raros. Esta herramienta normaliza ese espaciado y deja el
      contenido mucho más limpio para reutilizarlo.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega el texto con espaciado irregular.</li>
      <li>El resultado limpio aparece automáticamente.</li>
      <li>Copia el texto corregido cuando lo necesites.</li>
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
      <ToolLayout slug={SLUG} tool={<QuitarEspacios />} content={content} />
    </>
  );
}
