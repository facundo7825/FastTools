import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ContadorCaracteres from "./ContadorCaracteres";

const SLUG = "contador-caracteres";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El contador de caracteres ayuda a medir rápidamente la longitud exacta de un texto.
      Es útil para redes sociales, mensajes breves, títulos, meta descripciones y
      cualquier campo donde el espacio disponible importa.
    </p>
    <h2>Cómo usar el contador de caracteres</h2>
    <ol>
      <li>Pega o escribe tu texto en el campo de entrada.</li>
      <li>El total de caracteres se actualiza automáticamente.</li>
      <li>Si lo necesitas, copia el texto o limpia el campo para empezar de nuevo.</li>
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
      <ToolLayout slug={SLUG} tool={<ContadorCaracteres />} content={content} />
    </>
  );
}
