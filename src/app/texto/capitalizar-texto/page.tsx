import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import CapitalizarTexto from "./CapitalizarTexto";

const SLUG = "capitalizar-texto";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Capitalizar un texto significa convertir la primera letra de cada palabra en
      mayúscula. Es un formato útil para títulos, nombres propios, encabezados y otros
      textos cortos que necesitan mejor presentación sin editar palabra por palabra.
    </p>
    <h2>Cómo capitalizar texto</h2>
    <ol>
      <li>Pega o escribe el texto que quieres capitalizar.</li>
      <li>El resultado aparece automáticamente con la primera letra de cada palabra en mayúscula.</li>
      <li>Copia el resultado con el botón <strong>Copiar</strong>.</li>
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
      <ToolLayout slug={SLUG} tool={<CapitalizarTexto />} content={content} />
    </>
  );
}
