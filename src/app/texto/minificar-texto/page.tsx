import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import MinificarTexto from "./MinificarTexto";

const SLUG = "minificar-texto";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El minificador de texto compacta espacios y saltos de línea para dejar una versión
      más corta y uniforme. Es muy útil para prompts, mensajes extensos, campos con
      límite de caracteres o contenido que quieres pegar sin ruido visual.
    </p>
    <h2>Cómo usar el minificador</h2>
    <ol>
      <li>Pega el texto que quieres compactar.</li>
      <li>Revisa la diferencia entre la versión original y la minificada.</li>
      <li>Copia el resultado para reutilizarlo donde haga falta.</li>
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
      <ToolLayout slug={SLUG} tool={<MinificarTexto />} content={content} />
    </>
  );
}
