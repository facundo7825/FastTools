import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import TextoALista from "./TextoALista";

const SLUG = "texto-a-lista";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El convertidor de texto a lista sirve para transformar secuencias de palabras o
      frases en un formato más claro y fácil de reutilizar. Es práctico para productos,
      keywords, ideas, tags o apuntes rápidos.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega el texto separado por comas, punto y coma o líneas.</li>
      <li>Elige si quieres una lista con guiones, viñetas o numeración simple.</li>
      <li>Copia el resultado final y pégalo donde quieras usarlo.</li>
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
      <ToolLayout slug={SLUG} tool={<TextoALista />} content={content} />
    </>
  );
}
