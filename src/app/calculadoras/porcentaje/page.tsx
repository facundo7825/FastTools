import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import CalculadoraPorcentaje from "./CalculadoraPorcentaje";

const SLUG = "porcentaje";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Calcular porcentajes es una necesidad común en compras, presupuestos, facturas y
      ajustes de precios. Esta herramienta resuelve esa cuenta en segundos sin fórmulas ni
      pasos de más.
    </p>
    <h2>Cómo usar la calculadora de porcentaje</h2>
    <ol>
      <li>Ingresa el valor base.</li>
      <li>Escribe el porcentaje que quieres calcular.</li>
      <li>El resultado aparece automáticamente debajo.</li>
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
      <ToolLayout slug={SLUG} tool={<CalculadoraPorcentaje />} content={content} />
    </>
  );
}
