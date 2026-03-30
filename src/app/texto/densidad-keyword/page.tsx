import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import DensidadKeyword from "./DensidadKeyword";

export const metadata: Metadata = {
  title: "Contador de densidad de keyword online",
  description:
    "Calcula la densidad de una keyword o frase clave en cualquier texto. Util para SEO, redaccion y revision de contenido.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como calcular la densidad de una keyword",
      step: [
        { "@type": "HowToStep", text: "Escribe la keyword o frase clave que quieres medir." },
        { "@type": "HowToStep", text: "Pega el texto completo en el area principal." },
        { "@type": "HowToStep", text: "Revisa coincidencias, palabras totales y densidad estimada." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Sirve para una palabra o una frase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes medir una keyword simple o una frase completa.",
          },
        },
        {
          "@type": "Question",
          name: "La densidad se calcula automaticamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La herramienta actualiza los datos en tiempo real mientras escribes o pegas contenido.",
          },
        },
        {
          "@type": "Question",
          name: "Es una referencia util para SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Sirve como referencia rapida, aunque la calidad del contenido depende de mas factores que una sola metrica.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El contador de densidad de keyword ayuda a medir que tan presente esta una palabra
      o frase clave dentro de un texto. Es util para revisiones SEO, contenidos
      academicos y cualquier caso donde quieras controlar repeticiones.
    </p>
    <h2>Como usar la herramienta</h2>
    <ol>
      <li>Escribe la keyword o frase que quieres analizar.</li>
      <li>Pega el texto completo en el campo principal.</li>
      <li>Revisa coincidencias, cantidad de palabras y densidad estimada.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Sirve para una palabra o una frase?</h3>
    <p>
      Si. Puedes trabajar con una keyword individual o con una frase completa.
    </p>
    <h3>La densidad se calcula automaticamente?</h3>
    <p>
      Si. El resultado cambia en tiempo real a medida que editas el contenido.
    </p>
    <h3>Es una referencia util para SEO?</h3>
    <p>
      Si. Es una metrica de apoyo util, aunque la calidad final del contenido depende de
      varios factores y no solo de la densidad.
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
        title="Contador de densidad de keyword"
        description="Mide la presencia porcentual de una keyword dentro de un texto."
        tool={<DensidadKeyword />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/densidad-keyword", label: "Densidad de keyword" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-palabras-clave", title: "Contador de palabras clave" },
              { href: "/texto/generador-slug", title: "Generador de slug URL" },
              { href: "/texto/contador-palabras", title: "Contador de palabras" },
            ]}
          />
        }
      />
    </>
  );
}
