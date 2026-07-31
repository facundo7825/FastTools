import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import DensidadKeyword from "./DensidadKeyword";

const SLUG = "densidad-keyword";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El contador de densidad de keyword ayuda a medir qué tan presente está una palabra
      o frase clave dentro de un texto. Es útil para revisiones SEO, contenidos
      académicos y cualquier caso donde quieras controlar repeticiones.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Escribe la keyword o frase que quieres analizar.</li>
      <li>Pega el texto completo en el campo principal.</li>
      <li>Revisa coincidencias, cantidad de palabras y densidad estimada.</li>
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
      <ToolLayout slug={SLUG} tool={<DensidadKeyword />} content={content} />
    </>
  );
}
