import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import GeneradorLoremIpsum from "./GeneradorLoremIpsum";

const SLUG = "lorem-ipsum";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Lorem Ipsum es el texto de relleno más usado en diseño gráfico, maquetas y
      prototipos. Sirve para evaluar layout, espaciado y jerarquía visual antes de tener
      el contenido definitivo.
    </p>
    <h2>Cómo generar texto Lorem Ipsum</h2>
    <ol>
      <li>Elige la cantidad de párrafos que necesitas con el control deslizante.</li>
      <li>El texto Lorem Ipsum aparece automáticamente.</li>
      <li>Copia el texto con el botón <strong>Copiar</strong> y pégalo en tu diseño o prototipo.</li>
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
      <ToolLayout slug={SLUG} tool={<GeneradorLoremIpsum />} content={content} />
    </>
  );
}
