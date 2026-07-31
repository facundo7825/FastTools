import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import CalculadoraPromedio from "./CalculadoraPromedio";

const SLUG = "promedio";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      La calculadora de promedio sirve para sacar medias de notas, gastos, resultados o
      cualquier serie de números sin hacerlo manualmente. Solo pegas los valores y el
      resultado aparece enseguida.
    </p>
    <h2>Cómo usar la calculadora</h2>
    <ol>
      <li>Pega los números separados por comas, espacios o líneas.</li>
      <li>La herramienta calcula suma total, cantidad y promedio.</li>
      <li>Copia el promedio si quieres usarlo en otro lado.</li>
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
      <ToolLayout slug={SLUG} tool={<CalculadoraPromedio />} content={content} />
    </>
  );
}
