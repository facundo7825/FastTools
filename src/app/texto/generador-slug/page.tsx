import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import GeneradorSlug from "./GeneradorSlug";

export const metadata: Metadata = {
  title: "Generador de slug URL online",
  description:
    "Genera slugs limpios para URLs, artículos y páginas en segundos. Convierte texto a formato web legible y corto.",
  alternates: {
    canonical: "/texto/generador-slug",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo generar un slug URL",
      step: [
        { "@type": "HowToStep", text: "Escribe o pega el título o frase base." },
        { "@type": "HowToStep", text: "Elige el separador que prefieras para la URL." },
        { "@type": "HowToStep", text: "Copia el slug generado y úsalo en tu página o artículo." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Elimina acentos y caracteres especiales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La herramienta limpia acentos, símbolos y deja solo caracteres aptos para una URL.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo elegir guion o guion bajo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes generar el slug con guion medio o guion bajo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Sirve para títulos de blog o ecommerce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Es útil para artículos, categorías, productos y cualquier URL amigable.",
          },
        },
      ],
    },
  ],
};

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
    <h2>Preguntas frecuentes</h2>
    <h3>¿Elimina acentos y caracteres especiales?</h3>
    <p>
      Sí. La herramienta limpia acentos, espacios extra y símbolos para dejar una URL
      más segura y legible.
    </p>
    <h3>¿Puedo elegir guion o guion bajo?</h3>
    <p>
      Sí. Puedes cambiar el separador según el estilo que prefieras usar.
    </p>
    <h3>¿Sirve para títulos de blog o ecommerce?</h3>
    <p>
      Sí. Funciona bien para productos, categorías, artículos y páginas internas.
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
        description="Convierte texto en slugs limpios para URLs, artículos y páginas."
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
