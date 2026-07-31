import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import EliminarLineasDuplicadas from "./EliminarLineasDuplicadas";

const SLUG = "eliminar-lineas-duplicadas";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Esta herramienta sirve para limpiar listas, tags, keywords, registros o bloques de
      texto donde se repiten líneas completas. Mantiene solo la primera aparición de cada
      línea y elimina el resto.
    </p>
    <h2>Cómo usarla</h2>
    <ol>
      <li>Pega un texto con líneas repetidas.</li>
      <li>Revisa el resultado sin duplicados.</li>
      <li>Copia la versión final si la quieres reutilizar.</li>
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
      <ToolLayout slug={SLUG} tool={<EliminarLineasDuplicadas />} content={content} />
    </>
  );
}
