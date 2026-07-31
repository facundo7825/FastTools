import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ReglaDeTres from "./ReglaDeTres";

const SLUG = "regla-de-tres";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      La regla de tres es una forma rápida de resolver proporciones cuando conoces tres
      valores y necesitas calcular el cuarto. Es útil en recetas, escalas, compras,
      rendimientos y cuentas cotidianas.
    </p>
    <h2>Cómo usar la regla de tres</h2>
    <ol>
      <li>Completa los tres valores conocidos.</li>
      <li>La herramienta calcula automáticamente el valor X.</li>
      <li>Usa ese resultado como referencia para tu proporción.</li>
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
      <ToolLayout slug={SLUG} tool={<ReglaDeTres />} content={content} />
    </>
  );
}
