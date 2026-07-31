import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ConvertidorTemperatura from "./ConvertidorTemperatura";

const SLUG = "temperatura";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Convertir temperatura entre Celsius, Fahrenheit y Kelvin es una tarea común en
      cocina, estudio, trabajo técnico y consultas cotidianas. Esta herramienta te deja
      escribir en cualquiera de las tres escalas y ver las equivalencias al instante.
    </p>
    <h2>Cómo convertir temperatura</h2>
    <ol>
      <li>Escribe una temperatura en cualquiera de los campos.</li>
      <li>Los otros dos valores se actualizan automáticamente.</li>
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
      <ToolLayout slug={SLUG} tool={<ConvertidorTemperatura />} content={content} />
    </>
  );
}
