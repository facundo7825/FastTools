import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import GeneradorHashes from "./GeneradorHashes";

export const metadata: Metadata = {
  title: "Generador de hashes online",
  description:
    "Genera hashes online con SHA-1, SHA-256 y SHA-512. Ideal para pruebas, verificacion y flujos tecnicos.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como generar un hash de texto",
      step: [
        { "@type": "HowToStep", text: "Escribe o pega el texto de entrada." },
        { "@type": "HowToStep", text: "Elige el algoritmo de hash." },
        { "@type": "HowToStep", text: "Copia el resultado generado si lo necesitas." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Que algoritmos incluye?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La herramienta incluye SHA-1, SHA-256 y SHA-512.",
          },
        },
        {
          "@type": "Question",
          name: "El hash cambia si modifico un solo caracter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Un cambio minimo en el texto genera un hash totalmente distinto.",
          },
        },
        {
          "@type": "Question",
          name: "Se genera en el navegador?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. El hash se calcula localmente en el navegador sin depender de un servicio externo.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El generador de hashes sirve para obtener rapidamente una huella digital de un
      texto. Es util para pruebas tecnicas, validaciones, comparaciones y pequenos
      flujos de desarrollo donde necesitas un hash legible al instante.
    </p>
    <h2>Como usar el generador</h2>
    <ol>
      <li>Escribe o pega el texto que quieres procesar.</li>
      <li>Elige entre SHA-1, SHA-256 o SHA-512.</li>
      <li>Copia el hash generado para usarlo en tu flujo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Que algoritmos incluye?</h3>
    <p>
      La herramienta incluye SHA-1, SHA-256 y SHA-512 para cubrir casos de uso comunes.
    </p>
    <h3>El hash cambia si modifico un solo caracter?</h3>
    <p>
      Si. Un cambio minimo en el texto de entrada produce un resultado completamente
      diferente.
    </p>
    <h3>Se genera en el navegador?</h3>
    <p>
      Si. El calculo se hace localmente en el navegador, sin necesidad de un servicio
      externo.
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
        title="Generador de hashes"
        description="Genera hashes de texto con algoritmos comunes sin salir del navegador."
        tool={<GeneradorHashes />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/generadores", label: "Generadores" },
              { href: "/generadores/hashes", label: "Generador de hashes" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/generadores/uuid", title: "Generador de UUID" },
              { href: "/texto/json-pretty-print", title: "JSON pretty print" },
              { href: "/generadores/password", title: "Generador de contrasenas" },
            ]}
          />
        }
      />
    </>
  );
}
