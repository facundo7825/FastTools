import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorCaracteresSinEspacios from "./ContadorCaracteresSinEspacios";

export const metadata: Metadata = {
  title: "Contador de caracteres sin espacios online",
  description:
    "Cuenta caracteres sin espacios, tabulaciones ni saltos de línea. Ideal para límites exactos de texto y validaciones.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo contar caracteres sin espacios",
      step: [
        { "@type": "HowToStep", text: "Pega o escribe tu texto en el campo de entrada." },
        { "@type": "HowToStep", text: "La herramienta excluye los espacios del conteo." },
        { "@type": "HowToStep", text: "Copia el texto o limpia el campo según lo necesites." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué cuenta como espacio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se excluyen espacios normales, tabulaciones y saltos de línea.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué sirve este conteo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para validar textos donde importan solo los caracteres reales y no el espaciado.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Esta herramienta cuenta solo los caracteres reales del texto y deja afuera el
      espaciado. Es útil cuando necesitas medir contenido sin considerar separaciones,
      saltos de línea o tabulaciones.
    </p>
    <h2>Cómo usar el contador</h2>
    <ol>
      <li>Pega o escribe tu texto.</li>
      <li>Revisa el total de caracteres sin espacios.</li>
      <li>Si quieres, copia el contenido o limpia el campo para empezar otra vez.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué cuenta como espacio?</h3>
    <p>Se excluyen espacios normales, tabulaciones y saltos de línea.</p>
    <h3>¿Para qué sirve este conteo?</h3>
    <p>
      Sirve para validar textos donde importa el contenido puro y no el espaciado visual.
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
        title="Contador de caracteres sin espacios"
        description="Cuenta solo los caracteres reales de tu texto, sin espacios ni saltos."
        tool={<ContadorCaracteresSinEspacios />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              {
                href: "/texto/contador-caracteres-sin-espacios",
                label: "Contador sin espacios",
              },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
              { href: "/texto/contador-palabras", title: "Contador de palabras" },
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
            ]}
          />
        }
      />
    </>
  );
}
