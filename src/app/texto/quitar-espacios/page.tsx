import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import QuitarEspacios from "./QuitarEspacios";

export const metadata: Metadata = {
  title: "Quitar espacios extra del texto online - FastTools",
  description: "Eliminá espacios dobles, tabulaciones y líneas en blanco de tu texto con un clic. Ideal para limpiar texto copiado de PDF, Word o webs. Gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo quitar espacios extra de un texto",
      "step": [
        { "@type": "HowToStep", "text": "Pegá el texto con espacios irregulares en el campo de entrada." },
        { "@type": "HowToStep", "text": "El resultado limpio aparece automáticamente al instante." },
        { "@type": "HowToStep", "text": "Copiá el texto corregido con el botón Copiar." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué tipos de espacios elimina la herramienta?",
          "acceptedAnswer": { "@type": "Answer", "text": "Elimina espacios duplicados entre palabras, espacios al principio y al final del texto (trim), y puede reducir múltiples saltos de línea a uno solo. El contenido y el orden de las palabras no se modifica." },
        },
        {
          "@type": "Question",
          "name": "¿Funciona con texto copiado de Excel o PDF?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. El texto copiado desde Excel suele incluir tabulaciones entre celdas, y el de los PDF frecuentemente tiene espacios irregulares. Esta herramienta normaliza ambos casos de forma automática." },
        },
        {
          "@type": "Question",
          "name": "¿Se pierden los acentos o caracteres especiales al quitar espacios?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. La herramienta solo modifica los espacios y el espaciado. Todos los caracteres, acentos, ñ, símbolos y emojis se conservan intactos." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Cuando copiás texto de un PDF, un documento de Word o una página web, es común que aparezcan espacios dobles, tabulaciones y saltos de línea extras que arruinan el formato. Esta herramienta normaliza el texto automáticamente: elimina espacios repetidos y deja el contenido limpio y listo para usar en cualquier editor, formulario o base de datos.
    </p>
    <h2>¿Cómo usar la herramienta para quitar espacios?</h2>
    <ol>
      <li>Pegá el texto con espacios irregulares en el campo de entrada.</li>
      <li>El resultado limpio aparece automáticamente al instante.</li>
      <li>Copiá el texto corregido con el botón <strong>Copiar</strong>.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué tipos de espacios elimina?</h3>
    <p>La herramienta elimina espacios duplicados entre palabras, espacios al principio y al final del texto (trim), y puede reducir múltiples saltos de línea a uno solo. El contenido y el orden de las palabras no se modifica.</p>
    <h3>¿Funciona con texto copiado de Excel o PDF?</h3>
    <p>Sí. El texto copiado desde Excel suele incluir tabulaciones entre celdas, y el de los PDF frecuentemente tiene espacios irregulares. Esta herramienta normaliza ambos casos de forma automática.</p>
    <h3>¿Se pierden los acentos o caracteres especiales?</h3>
    <p>No. La herramienta solo modifica los espacios y el espaciado. Todos los caracteres, acentos, ñ, símbolos y emojis se conservan intactos.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Quitar espacios"
        description="Eliminá los espacios extra de tu texto en tiempo real."
        tool={<QuitarEspacios />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/quitar-espacios", label: "Quitar espacios" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
            { href: "/texto/contador-palabras", title: "Contador de palabras" },
            { href: "/texto/invertir-texto", title: "Invertir texto" },
          ]} />
        }
      />
    </>
  );
}
