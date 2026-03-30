import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import GeneradorSlug from "./GeneradorSlug";

export const metadata: Metadata = {
  title: "Generador de slug URL online",
  description:
    "Genera slugs limpios para URLs, articulos y paginas en segundos. Convierte texto a formato web legible y corto.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como generar un slug URL",
      step: [
        { "@type": "HowToStep", text: "Escribe o pega el titulo o frase base." },
        { "@type": "HowToStep", text: "Elige el separador que prefieras para la URL." },
        { "@type": "HowToStep", text: "Copia el slug generado y usalo en tu pagina o articulo." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Elimina acentos y caracteres especiales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La herramienta limpia acentos, simbolos y deja solo caracteres aptos para una URL.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo elegir guion o guion bajo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes generar el slug con guion medio o guion bajo.",
          },
        },
        {
          "@type": "Question",
          name: "Sirve para titulos de blog o ecommerce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Es util para articulos, categorias, productos y cualquier URL amigable.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El generador de slug convierte un titulo o frase larga en una version limpia y
      apta para usar en URLs. Es util para blogs, ecommerce, categorias, landings y
      cualquier pagina donde quieras una direccion simple y legible.
    </p>
    <h2>Como usar el generador</h2>
    <ol>
      <li>Pega el titulo, frase o texto base.</li>
      <li>Elige si quieres usar guion medio o guion bajo.</li>
      <li>Copia el slug generado y usalo en tu URL.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Elimina acentos y caracteres especiales?</h3>
    <p>
      Si. La herramienta limpia acentos, espacios extra y simbolos para dejar una URL
      mas segura y legible.
    </p>
    <h3>Puedo elegir guion o guion bajo?</h3>
    <p>
      Si. Puedes cambiar el separador segun el estilo que prefieras usar.
    </p>
    <h3>Sirve para titulos de blog o ecommerce?</h3>
    <p>
      Si. Funciona bien para productos, categorias, articulos y paginas internas.
    </p>
  </>
);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout
        title="Generador de slug URL"
        description="Convierte texto en slugs limpios para URLs, articulos y paginas."
        tool={<GeneradorSlug />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/generador-slug", label: "Generador de slug URL" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-palabras-clave", title: "Contador de palabras clave" },
              { href: "/texto/extraer-texto-html", title: "Extractor de texto de HTML" },
              { href: "/texto/minificar-texto", title: "Minificador de texto" },
            ]}
          />
        }
      />
    </>
  );
}
