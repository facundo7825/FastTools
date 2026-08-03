import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import CalculadoraEdad from "./CalculadoraEdad";

const SLUG = "edad";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      La calculadora de edad te permite saber con precisión cuántos años, meses y días
      pasaron desde una fecha de nacimiento hasta hoy. Es útil para trámites, controles o
      simplemente para tener el dato exacto sin hacer la cuenta manualmente.
    </p>
    <h2>Cómo calcular la edad exacta</h2>
    <ol>
      <li>Selecciona tu fecha de nacimiento.</li>
      <li>La herramienta calcula la edad automáticamente.</li>
      <li>Consulta el resultado en años, meses y días.</li>
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
      <ToolLayout slug={SLUG} tool={<CalculadoraEdad />} content={content} />
    </>
  );
}
