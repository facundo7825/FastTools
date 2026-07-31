import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import InvertirTexto from "./InvertirTexto";

const SLUG = "invertir-texto";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Invertir texto significa mostrar los caracteres en orden inverso. Es una función
      útil para juegos, efectos creativos, pruebas visuales y publicaciones llamativas
      en redes sociales o piezas de diseño.
    </p>
    <h2>Cómo invertir texto</h2>
    <ol>
      <li>Escribe o pega el texto que quieres invertir.</li>
      <li>El texto al revés aparece automáticamente.</li>
      <li>Copia el resultado con el botón <strong>Copiar</strong>.</li>
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
      <ToolLayout slug={SLUG} tool={<InvertirTexto />} content={content} />
    </>
  );
}
