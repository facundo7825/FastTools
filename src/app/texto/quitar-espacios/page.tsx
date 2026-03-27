import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import QuitarEspacios from "./QuitarEspacios";

export const metadata: Metadata = {
  title: "Quitar espacios extra del texto online",
  description:
    "Elimina espacios dobles y espaciado irregular de tu texto al instante. Ideal para limpiar contenido copiado de PDFs, webs o documentos.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como quitar espacios extra de un texto",
      step: [
        { "@type": "HowToStep", text: "Pega el texto con espaciado irregular." },
        { "@type": "HowToStep", text: "El resultado limpio aparece automaticamente." },
        { "@type": "HowToStep", text: "Copia el resultado para usarlo donde quieras." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Que espacios elimina la herramienta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reduce espacios duplicados y limpia espacios al comienzo y al final del texto.",
          },
        },
        {
          "@type": "Question",
          name: "Sirve para texto copiado de PDF o web?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Es util para normalizar texto que llega con saltos o espacios irregulares.",
          },
        },
        {
          "@type": "Question",
          name: "Se pierden acentos o simbolos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. La herramienta solo ajusta el espaciado y mantiene intactos los caracteres.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Cuando copias texto desde un PDF, un documento o una web, es comun que aparezcan
      espacios dobles o cortes raros. Esta herramienta normaliza ese espaciado y deja el
      contenido mucho mas limpio para reutilizarlo.
    </p>
    <h2>Como usar la herramienta</h2>
    <ol>
      <li>Pega el texto con espaciado irregular.</li>
      <li>El resultado limpio aparece automaticamente.</li>
      <li>Copia el texto corregido cuando lo necesites.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Que espacios elimina?</h3>
    <p>
      Reduce espacios duplicados y limpia espacios sobrantes al comienzo y al final del
      contenido.
    </p>
    <h3>Sirve para texto copiado de PDF o web?</h3>
    <p>
      Si. Es especialmente util cuando el texto llega con formato roto o con separaciones
      irregulares.
    </p>
    <h3>Se pierden acentos o simbolos?</h3>
    <p>
      No. Solo cambia el espaciado; el contenido sigue siendo el mismo.
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
        title="Quitar espacios"
        description="Elimina los espacios extra de tu texto en tiempo real."
        tool={<QuitarEspacios />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/quitar-espacios", label: "Quitar espacios" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
              { href: "/texto/contador-palabras", title: "Contador de palabras" },
              { href: "/texto/invertir-texto", title: "Invertir texto" },
            ]}
          />
        }
      />
    </>
  );
}
