import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ExtraerTextoHTML from "./ExtraerTextoHTML";

const SLUG = "extraer-texto-html";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Extraer texto plano desde HTML es útil cuando copias contenido desde una web o un
      CMS y necesitas quedarte solo con lo importante. Esta herramienta elimina etiquetas
      comunes y deja una salida lista para leer, revisar o reutilizar.
    </p>
    <h2>Cómo usar el extractor</h2>
    <ol>
      <li>Pega el código HTML completo en el campo de entrada.</li>
      <li>Revisa el texto limpio generado automáticamente.</li>
      <li>Copia el resultado para usarlo donde necesites.</li>
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
      <ToolLayout slug={SLUG} tool={<ExtraerTextoHTML />} content={content} />
    </>
  );
}
