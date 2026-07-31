import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import ContadorPalabrasClave from "./ContadorPalabrasClave";

const SLUG = "contador-palabras-clave";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      Esta herramienta sirve para revisar repeticiones de términos en artículos,
      ensayos, apuntes o textos SEO sin hacer búsquedas manuales una por una. También
      te da una referencia rápida de densidad para entender si una keyword aparece poco
      o demasiado.
    </p>
    <h2>Cómo usar el contador de palabras clave</h2>
    <ol>
      <li>Escribe la palabra o frase que quieres medir.</li>
      <li>Pega el texto completo en el campo principal.</li>
      <li>Revisa coincidencias, cantidad de palabras y densidad estimada.</li>
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
      <ToolLayout slug={SLUG} tool={<ContadorPalabrasClave />} content={content} />
    </>
  );
}
