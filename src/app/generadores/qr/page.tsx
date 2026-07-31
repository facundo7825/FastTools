import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import GeneradorQR from "./GeneradorQR";

const SLUG = "qr";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Un código QR (Quick Response) es un código de barras bidimensional que permite
      compartir texto o URLs de forma rápida. Se usa en menús, carteles, etiquetas,
      tarjetas y piezas impresas que necesitan conectar el mundo físico con el digital.
    </p>
    <h2>Cómo crear un código QR</h2>
    <ol>
      <li>Escribe o pega el texto o URL que quieres codificar.</li>
      <li>El código QR se genera automáticamente al instante.</li>
      <li>Descarga el QR en PNG o cópialo como imagen para usarlo donde quieras.</li>
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
      <ToolLayout slug={SLUG} tool={<GeneradorQR />} content={content} />
    </>
  );
}
