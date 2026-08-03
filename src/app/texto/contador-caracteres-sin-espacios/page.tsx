import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ContadorCaracteresSinEspacios from "./ContadorCaracteresSinEspacios";

const SLUG = "contador-caracteres-sin-espacios";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Esta herramienta cuenta solo los caracteres reales del texto y deja afuera el
      espaciado. Es útil cuando necesitas medir contenido sin considerar separaciones,
      saltos de línea o tabulaciones.
    </p>
    <h2>Cómo usar el contador</h2>
    <ol>
      <li>Pega o escribe tu texto.</li>
      <li>Revisa el total de caracteres sin espacios.</li>
      <li>Si quieres, copia el contenido o limpia el campo para empezar otra vez.</li>
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
      <ToolLayout slug={SLUG} tool={<ContadorCaracteresSinEspacios />} content={content} />
    </>
  );
}
