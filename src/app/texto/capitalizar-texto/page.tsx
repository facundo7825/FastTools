import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CapitalizarTexto from "./CapitalizarTexto";

export const metadata: Metadata = {
  title: "Capitalizar texto online - Primera letra en mayuscula - FastTools",
  description:
    "Convierte la primera letra de cada palabra a mayuscula al instante. Ideal para titulos, nombres propios y encabezados. Gratis y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como capitalizar texto",
      step: [
        { "@type": "HowToStep", text: "Pega o escribi el texto que queres capitalizar." },
        {
          "@type": "HowToStep",
          text: "El resultado aparece automaticamente con la primera letra de cada palabra en mayuscula.",
        },
        { "@type": "HowToStep", text: "Copia el resultado con el boton Copiar." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Que significa capitalizar texto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Capitalizar significa poner en mayuscula la primera letra de cada palabra. Por ejemplo, hola mundo pasa a Hola Mundo.",
          },
        },
        {
          "@type": "Question",
          name: "Funciona con palabras que tienen tildes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La herramienta busca capitalizar respetando caracteres comunes del espanol y otros caracteres Unicode al comienzo de cada palabra.",
          },
        },
        {
          "@type": "Question",
          name: "Cuando conviene usar este formato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es util para titulos, encabezados, nombres propios y textos cortos donde queres mejorar la presentacion de forma rapida.",
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
      mayuscula. Es un formato util para titulos, nombres propios, encabezados y otros
      textos cortos que necesitan mejor presentacion sin editar palabra por palabra.
    </p>
    <h2>Como capitalizar texto</h2>
    <ol>
      <li>Pega o escribi el texto que queres capitalizar.</li>
      <li>El resultado aparece automaticamente con la primera letra de cada palabra en mayuscula.</li>
      <li>Copia el resultado con el boton <strong>Copiar</strong>.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Que significa capitalizar texto?</h3>
    <p>
      Significa poner en mayuscula la primera letra de cada palabra. Por ejemplo, hola
      mundo pasa a Hola Mundo.
    </p>
    <h3>Funciona con palabras que tienen tildes?</h3>
    <p>
      Si. La herramienta intenta respetar caracteres comunes del espanol y otros
      caracteres Unicode al comienzo de cada palabra.
    </p>
    <h3>Cuando conviene usar este formato?</h3>
    <p>
      Conviene para titulos, encabezados, nombres propios y textos cortos donde queres
      mejorar la presentacion rapidamente.
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
        description="Convierte la primera letra de cada palabra a mayuscula en tiempo real."
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
              { href: "/texto/mayusculas-minusculas", title: "Mayusculas / Minusculas" },
              { href: "/texto/invertir-texto", title: "Invertir texto" },
              { href: "/texto/contador-palabras", title: "Contador de palabras" },
            ]}
          />
        }
      />
    </>
  );
}
