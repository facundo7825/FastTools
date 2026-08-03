import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import MayusculasMinusculas from "./MayusculasMinusculas";

const SLUG = "mayusculas-minusculas";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Cambiar entre mayúsculas y minúsculas es una tarea común cuando ordenas textos,
      títulos, tablas o contenido copiado desde distintas fuentes. Esta herramienta lo
      hace al instante y deja el resto del texto intacto.
    </p>
    <h2>Cómo convertir texto</h2>
    <ol>
      <li>Pega o escribe tu texto.</li>
      <li>Elige si quieres pasarlo a mayúsculas o minúsculas.</li>
      <li>Copia el resultado cuando quede como necesitas.</li>
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
      <ToolLayout slug={SLUG} tool={<MayusculasMinusculas />} content={content} />
    </>
  );
}
