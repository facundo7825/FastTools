import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import CalculadoraDescuento from "./CalculadoraDescuento";

const SLUG = "descuento";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Esta calculadora te ayuda a saber rápidamente cuánto descuentan sobre un precio y
      cuánto terminarías pagando. Es útil para ofertas, compras online, rebajas y
      comparaciones simples.
    </p>
    <h2>Cómo usar la calculadora</h2>
    <ol>
      <li>Ingresa el precio original.</li>
      <li>Escribe el porcentaje de descuento.</li>
      <li>Revisa el monto descontado y el precio final.</li>
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
      <ToolLayout slug={SLUG} tool={<CalculadoraDescuento />} content={content} />
    </>
  );
}
