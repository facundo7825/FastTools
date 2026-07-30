import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorLoremIpsum from "./GeneradorLoremIpsum";

export const metadata: Metadata = {
  title: "Generador de Lorem Ipsum online gratis",
  description:
    "Genera texto Lorem Ipsum al instante para tus diseños, maquetas y prototipos. Elige la cantidad de párrafos. Sin registro y completamente gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo generar texto Lorem Ipsum",
      step: [
        {
          "@type": "HowToStep",
          text: "Elige la cantidad de párrafos que necesitas con el control deslizante.",
        },
        { "@type": "HowToStep", text: "El texto Lorem Ipsum aparece automáticamente." },
        {
          "@type": "HowToStep",
          text: "Copia el texto con el botón Copiar y pégalo en tu diseño o prototipo.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es Lorem Ipsum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un texto de relleno muy usado en diseño y maquetación para simular contenido antes de tener el texto final.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué se usa Lorem Ipsum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se usa para prototipos, maquetas y piezas visuales donde hace falta ver bloques de texto sin depender del contenido definitivo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Tiene significado real?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Su origen viene del latín clásico modificado, pero en la práctica se usa como texto de relleno sin sentido funcional para el lector.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Lorem Ipsum es el texto de relleno más usado en diseño gráfico, maquetas y
      prototipos. Sirve para evaluar layout, espaciado y jerarquía visual antes de tener
      el contenido definitivo.
    </p>
    <h2>Cómo generar texto Lorem Ipsum</h2>
    <ol>
      <li>Elige la cantidad de párrafos que necesitas con el control deslizante.</li>
      <li>El texto Lorem Ipsum aparece automáticamente.</li>
      <li>Copia el texto con el botón <strong>Copiar</strong> y pégalo en tu diseño o prototipo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué es Lorem Ipsum?</h3>
    <p>
      Es un texto de relleno muy usado en diseño y maquetación para simular contenido
      antes de tener el texto final.
    </p>
    <h3>¿Para qué se usa Lorem Ipsum?</h3>
    <p>
      Se usa para prototipos, maquetas y piezas visuales donde hace falta ver bloques de
      texto sin depender del contenido definitivo.
    </p>
    <h3>¿Tiene significado real?</h3>
    <p>
      Su origen viene del latín clásico modificado, pero en la práctica se usa como
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
        description="Genera texto Lorem Ipsum para tus diseños y prototipos al instante."
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
              { href: "/generadores/password", title: "Generador de contraseñas" },
              { href: "/generadores/qr", title: "Generador de QR" },
            ]}
          />
        }
      />
    </>
  );
}
