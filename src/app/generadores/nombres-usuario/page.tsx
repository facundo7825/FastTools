import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import GeneradorNombresUsuario from "./GeneradorNombresUsuario";

const SLUG = "nombres-usuario";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El generador de nombres de usuario ayuda cuando necesitas ideas rápidas para una
      cuenta nueva, una comunidad, un alias de juego o un perfil de proyecto. Puedes
      partir de una palabra propia y producir variantes en segundos.
    </p>
    <h2>Cómo usar el generador</h2>
    <ol>
      <li>Escribe una palabra base si quieres orientar el estilo.</li>
      <li>Elige cuántas opciones quieres generar y si deseas números o separadores.</li>
      <li>Copia la sugerencia que mejor encaje con tu cuenta o proyecto.</li>
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
      <ToolLayout slug={SLUG} tool={<GeneradorNombresUsuario />} content={content} />
    </>
  );
}
