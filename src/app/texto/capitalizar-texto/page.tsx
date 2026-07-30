import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CapitalizarTexto from "./CapitalizarTexto";

export const metadata: Metadata = {
  title: "Capitalizar texto online - Primera letra en mayúscula",
  description:
    "Convierte la primera letra de cada palabra a mayúscula al instante. Ideal para títulos, nombres propios y encabezados. Gratis y sin registro.",
  alternates: {
    canonical: "/texto/capitalizar-texto",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo capitalizar texto",
      step: [
        { "@type": "HowToStep", text: "Pega o escribe el texto que quieres capitalizar." },
        {
          "@type": "HowToStep",
          text: "El resultado aparece automáticamente con la primera letra de cada palabra en mayúscula.",
        },
        { "@type": "HowToStep", text: "Copia el resultado con el botón Copiar." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué significa capitalizar texto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Capitalizar significa poner en mayúscula la primera letra de cada palabra. Por ejemplo, hola mundo pasa a Hola Mundo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Funciona con palabras que tienen tildes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La herramienta busca capitalizar respetando caracteres comunes del español y otros caracteres Unicode al comienzo de cada palabra.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuándo conviene usar este formato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es útil para títulos, encabezados, nombres propios y textos cortos donde quieres mejorar la presentación de forma rápida.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Capitalizar un texto significa convertir la primera letra de cada palabra en
      mayúscula. Es un formato útil para títulos, nombres propios, encabezados y otros
      textos cortos que necesitan mejor presentación sin editar palabra por palabra.
    </p>
    <h2>Cómo capitalizar texto</h2>
    <ol>
      <li>Pega o escribe el texto que quieres capitalizar.</li>
      <li>El resultado aparece automáticamente con la primera letra de cada palabra en mayúscula.</li>
      <li>Copia el resultado con el botón <strong>Copiar</strong>.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué significa capitalizar texto?</h3>
    <p>
      Significa poner en mayúscula la primera letra de cada palabra. Por ejemplo, hola
      mundo pasa a Hola Mundo.
    </p>
    <h3>¿Funciona con palabras que tienen tildes?</h3>
    <p>
      Sí. La herramienta intenta respetar caracteres comunes del español y otros
      caracteres Unicode al comienzo de cada palabra.
    </p>
    <h3>¿Cuándo conviene usar este formato?</h3>
    <p>
      Conviene para títulos, encabezados, nombres propios y textos cortos donde quieres
      mejorar la presentación rápidamente.
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
        title="Capitalizar texto"
        description="Convierte la primera letra de cada palabra a mayúscula en tiempo real."
        tool={<CapitalizarTexto />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/capitalizar-texto", label: "Capitalizar texto" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
              { href: "/texto/invertir-texto", title: "Invertir texto" },
              { href: "/texto/contador-palabras", title: "Contador de palabras" },
            ]}
          />
        }
      />
    </>
  );
}
