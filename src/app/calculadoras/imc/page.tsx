import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import CalculadoraIMC from "./CalculadoraIMC";

const SLUG = "imc";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El índice de masa corporal es una medida simple que relaciona peso y altura para
      ofrecer una referencia rápida. No reemplaza una evaluación profesional, pero puede
      ayudarte a ubicarte dentro de un rango general.
    </p>
    <h2>Cómo calcular el IMC</h2>
    <ol>
      <li>Ingresa tu peso en kilogramos.</li>
      <li>Ingresa tu altura en centímetros.</li>
      <li>Consulta el resultado y la categoría estimada.</li>
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
      <ToolLayout slug={SLUG} tool={<CalculadoraIMC />} content={content} />
    </>
  );
}
