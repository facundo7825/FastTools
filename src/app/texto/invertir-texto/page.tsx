import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import InvertirTexto from "./InvertirTexto";

export const metadata: Metadata = {
  title: "Invertir texto online gratis - Texto al reves - FastTools",
  description:
    "Invierte cualquier texto al reves con un clic. Ideal para efectos creativos, acertijos y redes sociales. Soporta caracteres especiales.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como invertir texto al reves",
      step: [
        { "@type": "HowToStep", text: "Escribi o pega el texto que queres invertir." },
        { "@type": "HowToStep", text: "El texto al reves aparece automaticamente." },
        { "@type": "HowToStep", text: "Copia el resultado con el boton Copiar." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Para que sirve invertir texto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se usa para juegos, efectos visuales, publicaciones creativas y pruebas simples con palabras o frases.",
          },
        },
        {
          "@type": "Question",
          name: "Funciona con emojis y caracteres especiales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La herramienta invierte el texto manteniendo caracteres especiales dentro de la cadena.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo usarlo para revisar palindromos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puede servirte como referencia rapida para comparar una palabra o frase con su version invertida.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Invertir texto significa mostrar los caracteres en orden inverso. Es una funcion
      util para juegos, efectos creativos, pruebas visuales y publicaciones llamativas
      en redes sociales o piezas de diseno.
    </p>
    <h2>Como invertir texto</h2>
    <ol>
      <li>Escribi o pega el texto que queres invertir.</li>
      <li>El texto al reves aparece automaticamente.</li>
      <li>Copia el resultado con el boton <strong>Copiar</strong>.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Para que sirve invertir texto?</h3>
    <p>
      Sirve para juegos, publicaciones creativas, pruebas visuales y distintos efectos
      decorativos o de estilo.
    </p>
    <h3>Funciona con emojis y caracteres especiales?</h3>
    <p>
      Si. La herramienta invierte el texto manteniendo caracteres especiales dentro de la
      cadena.
    </p>
    <h3>Puedo usarlo para revisar palindromos?</h3>
    <p>
      Si. Puede ayudarte a comparar rapidamente una palabra o frase con su version
      invertida.
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
        title="Invertir texto"
        description="Invierte los caracteres de tu texto al reves en tiempo real."
        tool={<InvertirTexto />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/invertir-texto", label: "Invertir texto" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/mayusculas-minusculas", title: "Mayusculas / Minusculas" },
              { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
            ]}
          />
        }
      />
    </>
  );
}
