import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorPalabras from "./ContadorPalabras";

export const metadata: Metadata = {
  title: "Contador de palabras online gratis",
  description:
    "Cuenta palabras de cualquier texto en tiempo real. Útil para ensayos, artículos, contenido SEO y trabajos académicos. Gratis y sin registro.",
  alternates: {
    canonical: "/texto/contador-palabras",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo contar palabras de un texto",
      step: [
        { "@type": "HowToStep", text: "Pega o escribe tu texto en el campo de entrada." },
        { "@type": "HowToStep", text: "El número de palabras se actualiza automáticamente." },
        { "@type": "HowToStep", text: "Usa Copiar para copiar el texto o Limpiar para vaciarlo." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo se cuentan las palabras con guiones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las palabras unidas por guion, como bien-estar, suelen contarse como una sola palabra. Las separadas por espacio se cuentan individualmente.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántas palabras tiene una página de texto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende del formato, pero una página A4 con configuraciones académicas comunes puede rondar entre 250 y 500 palabras.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántas palabras puede tener un artículo SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de la intención de búsqueda, pero muchos artículos informativos trabajan entre 1200 y 2500 palabras.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El contador de palabras es útil para estudiantes, redactores, periodistas y
      creadores de contenido. Te permite medir rápidamente la longitud de un texto y
      ajustar entregas, publicaciones o artículos sin tener que contar manualmente.
    </p>
    <h2>Cómo usar el contador de palabras</h2>
    <ol>
      <li>Pega o escribe tu texto en el campo de entrada.</li>
      <li>El número de palabras se actualiza automáticamente.</li>
      <li>Usa <strong>Copiar</strong> para copiar el texto o <strong>Limpiar</strong> para vaciarlo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Cómo se cuentan las palabras con guiones?</h3>
    <p>
      Las palabras unidas por guion, como bien-estar, suelen contarse como una sola
      palabra. Las separadas por espacio se cuentan individualmente.
    </p>
    <h3>¿Cuántas palabras tiene una página de texto?</h3>
    <p>
      Depende del formato, pero una página A4 con configuraciones académicas comunes
      puede rondar entre 250 y 500 palabras.
    </p>
    <h3>¿Cuántas palabras puede tener un artículo SEO?</h3>
    <p>
      Depende de la intención de búsqueda, pero muchos artículos informativos trabajan
      entre 1200 y 2500 palabras.
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
        title="Contador de palabras"
        description="Cuenta las palabras de tu texto en tiempo real."
        tool={<ContadorPalabras />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/contador-palabras", label: "Contador de palabras" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
              { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
            ]}
          />
        }
      />
    </>
  );
}
