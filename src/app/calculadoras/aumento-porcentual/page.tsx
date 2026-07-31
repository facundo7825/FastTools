import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import CalculadoraAumentoPorcentual from "./CalculadoraAumentoPorcentual";

const SLUG = "aumento-porcentual";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Esta calculadora sirve para ver rápidamente cuánto aumenta un valor y a cuánto se
      va después de aplicar un porcentaje. Es útil para salarios, listas de precios,
      cuotas y ajustes comerciales.
    </p>
    <h2>Cómo usar la calculadora</h2>
    <ol>
      <li>Ingresa el valor base.</li>
      <li>Escribe el porcentaje de aumento.</li>
      <li>Revisa el monto sumado y el valor final resultante.</li>
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
      <ToolLayout slug={SLUG} tool={<CalculadoraAumentoPorcentual />} content={content} />
    </>
  );
}
