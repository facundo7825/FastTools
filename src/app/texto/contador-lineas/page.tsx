import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ContadorLineas from "./ContadorLineas";

const SLUG = "contador-lineas";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El contador de líneas es útil cuando trabajas con listas, datos pegados, texto
      estructurado o fragmentos de código. Te muestra de forma rápida cuántas líneas hay
      en total y cuántas contienen contenido real.
    </p>
    <h2>Cómo usar el contador de líneas</h2>
    <ol>
      <li>Pega o escribe tu texto.</li>
      <li>Revisa el total de líneas y las líneas no vacías.</li>
      <li>Si lo necesitas, copia o limpia el contenido.</li>
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
      <ToolLayout slug={SLUG} tool={<ContadorLineas />} content={content} />
    </>
  );
}
