import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import OrdenarLineas from "./OrdenarLineas";

const SLUG = "ordenar-lineas";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Ordenar líneas alfabéticamente ayuda a limpiar listados, revisar palabras clave,
      acomodar nombres y preparar datasets pequeños sin tener que llevar el texto a una
      hoja de cálculo.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega tu lista con una línea por elemento.</li>
      <li>Elige si quieres ignorar mayúsculas y quitar líneas vacías.</li>
      <li>Copia el resultado ordenado cuando quede como necesitas.</li>
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
      <ToolLayout slug={SLUG} tool={<OrdenarLineas />} content={content} />
    </>
  );
}
