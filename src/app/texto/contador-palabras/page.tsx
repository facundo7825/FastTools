import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ContadorPalabras from "./ContadorPalabras";

const SLUG = "contador-palabras";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El contador de palabras es útil para estudiantes, redactores, periodistas y
      creadores de contenido. Te permite medir rápidamente la longitud de un texto y
      ajustar entregas, publicaciones o artículos sin tener que contar manualmente.
    </p>
    <h2>Cómo usar el contador de palabras</h2>
    <ol>
      <li>Pega o escribe tu texto en el campo de entrada.</li>
      <li>El número de palabras se actualiza automáticamente.</li>
      <li>Usa <strong>Copiar</strong> para copiar el texto o <strong>Limpiar</strong> para vaciarlo.</li>
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
      <ToolLayout slug={SLUG} tool={<ContadorPalabras />} content={content} />
    </>
  );
}
