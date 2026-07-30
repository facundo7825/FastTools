import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import InvertirTexto from "./InvertirTexto";

export const metadata: Metadata = {
  title: "Invertir texto online gratis - Texto al revés",
  description:
    "Invierte cualquier texto al revés con un clic. Ideal para efectos creativos, acertijos y redes sociales. Soporta caracteres especiales.",
  alternates: {
    canonical: "/texto/invertir-texto",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo invertir texto al revés",
      step: [
        { "@type": "HowToStep", text: "Escribe o pega el texto que quieres invertir." },
        { "@type": "HowToStep", text: "El texto al revés aparece automáticamente." },
        { "@type": "HowToStep", text: "Copia el resultado con el botón Copiar." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Para qué sirve invertir texto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se usa para juegos, efectos visuales, publicaciones creativas y pruebas simples con palabras o frases.",
          },
        },
        {
          "@type": "Question",
          name: "¿Funciona con emojis y caracteres especiales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La herramienta invierte el texto manteniendo caracteres especiales dentro de la cadena.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo usarlo para revisar palíndromos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puede servirte como referencia rápida para comparar una palabra o frase con su versión invertida.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Invertir texto significa mostrar los caracteres en orden inverso. Es una función
      útil para juegos, efectos creativos, pruebas visuales y publicaciones llamativas
      en redes sociales o piezas de diseño.
    </p>
    <h2>Cómo invertir texto</h2>
    <ol>
      <li>Escribe o pega el texto que quieres invertir.</li>
      <li>El texto al revés aparece automáticamente.</li>
      <li>Copia el resultado con el botón <strong>Copiar</strong>.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Para qué sirve invertir texto?</h3>
    <p>
      Sirve para juegos, publicaciones creativas, pruebas visuales y distintos efectos
      decorativos o de estilo.
    </p>
    <h3>¿Funciona con emojis y caracteres especiales?</h3>
    <p>
      Sí. La herramienta invierte el texto manteniendo caracteres especiales dentro de la
      cadena.
    </p>
    <h3>¿Puedo usarlo para revisar palíndromos?</h3>
    <p>
      Sí. Puede ayudarte a comparar rápidamente una palabra o frase con su versión
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
        description="Invierte los caracteres de tu texto al revés en tiempo real."
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
              { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
              { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
            ]}
          />
        }
      />
    </>
  );
}
