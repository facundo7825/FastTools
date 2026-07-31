import ToolLayout from "@/components/ToolLayout";
import { toolJsonLd, toolMetadata } from "@/lib/tool-registry";
import GeneradorSlug from "./GeneradorSlug";

const SLUG = "generador-slug";

export const metadata = toolMetadata(SLUG);

const content = (
  <>
    <p>
      El generador de slug convierte un título o frase larga en una versión limpia y
      apta para usar en URLs. Es útil para blogs, ecommerce, categorías, landings y
      cualquier página donde quieras una dirección simple y legible.
    </p>
    <h2>Cómo usar el generador</h2>
    <ol>
      <li>Pega el título, frase o texto base.</li>
      <li>Elige si quieres usar guion medio o guion bajo.</li>
      <li>Copia el slug generado y úsalo en tu URL.</li>
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
      <ToolLayout slug={SLUG} tool={<GeneradorSlug />} content={content} />
    </>
  );
}
