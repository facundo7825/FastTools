import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorLoremIpsum from "./GeneradorLoremIpsum";

export const metadata: Metadata = {
  title: "Generador de Lorem Ipsum online gratis - FastTools",
  description:
    "Genera texto Lorem Ipsum al instante para tus disenos, maquetas y prototipos. Elige la cantidad de parrafos. Sin registro y completamente gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como generar texto Lorem Ipsum",
      step: [
        {
          "@type": "HowToStep",
          text: "Elige la cantidad de parrafos que necesitas con el control deslizante.",
        },
        { "@type": "HowToStep", text: "El texto Lorem Ipsum aparece automaticamente." },
        {
          "@type": "HowToStep",
          text: "Copia el texto con el boton Copiar y pegalo en tu diseno o prototipo.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Que es Lorem Ipsum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un texto de relleno muy usado en diseno y maquetacion para simular contenido antes de tener el texto final.",
          },
        },
        {
          "@type": "Question",
          name: "Para que se usa Lorem Ipsum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se usa para prototipos, maquetas y piezas visuales donde hace falta ver bloques de texto sin depender del contenido definitivo.",
          },
        },
        {
          "@type": "Question",
          name: "Tiene significado real?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Su origen viene del latin clasico modificado, pero en la practica se usa como texto de relleno sin sentido funcional para el lector.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Lorem Ipsum es el texto de relleno mas usado en diseno grafico, maquetas y
      prototipos. Sirve para evaluar layout, espaciado y jerarquia visual antes de tener
      el contenido definitivo.
    </p>
    <h2>Como generar texto Lorem Ipsum</h2>
    <ol>
      <li>Elige la cantidad de parrafos que necesitas con el control deslizante.</li>
      <li>El texto Lorem Ipsum aparece automaticamente.</li>
      <li>Copia el texto con el boton <strong>Copiar</strong> y pegalo en tu diseno o prototipo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Que es Lorem Ipsum?</h3>
    <p>
      Es un texto de relleno muy usado en diseno y maquetacion para simular contenido
      antes de tener el texto final.
    </p>
    <h3>Para que se usa Lorem Ipsum?</h3>
    <p>
      Se usa para prototipos, maquetas y piezas visuales donde hace falta ver bloques de
      texto sin depender del contenido definitivo.
    </p>
    <h3>Tiene significado real?</h3>
    <p>
      Su origen viene del latin clasico modificado, pero en la practica se usa como
      texto de relleno sin sentido funcional para el lector.
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
        title="Generador de Lorem Ipsum"
        description="Genera texto Lorem Ipsum para tus disenos y prototipos al instante."
        tool={<GeneradorLoremIpsum />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/generadores", label: "Generadores" },
              { href: "/generadores/lorem-ipsum", label: "Generador de Lorem Ipsum" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/generadores/password", title: "Generador de contrasenas" },
              { href: "/generadores/qr", title: "Generador de QR" },
            ]}
          />
        }
      />
    </>
  );
}
