import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorQR from "./GeneradorQR";

export const metadata: Metadata = {
  title: "Generador de código QR online gratis",
  description:
    "Crea códigos QR para URLs y texto en segundos. Sin registro, sin marcas de agua. Descarga el QR en PNG o cópialo como imagen completamente gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo crear un código QR",
      step: [
        { "@type": "HowToStep", text: "Escribe o pega el texto o URL que quieres codificar." },
        { "@type": "HowToStep", text: "El código QR se genera automáticamente al instante." },
        {
          "@type": "HowToStep",
          text: "Descarga el QR en PNG o cópialo como imagen para usarlo en tus materiales.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué puedo codificar en un código QR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes codificar texto libre y URLs de sitios web. Solo pega el contenido que quieras convertir y el QR se genera al instante.",
          },
        },
        {
          "@type": "Question",
          name: "¿Los códigos QR generados tienen fecha de vencimiento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Los QR generados con esta herramienta son estáticos y no tienen fecha de vencimiento. Mientras el contenido codificado siga siendo válido, el QR funcionará.",
          },
        },
        {
          "@type": "Question",
          name: "¿En qué formato puedo guardar el QR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes descargarlo en PNG o copiar la imagen al portapapeles para pegarla en otros documentos o diseños compatibles.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Un código QR (Quick Response) es un código de barras bidimensional que permite
      compartir texto o URLs de forma rápida. Se usa en menús, carteles, etiquetas,
      tarjetas y piezas impresas que necesitan conectar el mundo físico con el digital.
    </p>
    <h2>Cómo crear un código QR</h2>
    <ol>
      <li>Escribe o pega el texto o URL que quieres codificar.</li>
      <li>El código QR se genera automáticamente al instante.</li>
      <li>Descarga el QR en PNG o cópialo como imagen para usarlo donde quieras.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué puedo codificar en un código QR?</h3>
    <p>
      Puedes codificar texto libre y URLs de sitios web. Si necesitas compartir un
      enlace, un mensaje corto o un acceso rápido, esta herramienta te sirve sin pasos
      extra.
    </p>
    <h3>¿Los códigos QR generados tienen fecha de vencimiento?</h3>
    <p>
      No. El QR es estático, así que seguirá funcionando mientras el contenido que
      contiene siga siendo válido.
    </p>
    <h3>¿En qué formato puedo guardar el QR?</h3>
    <p>
      Puedes descargarlo en PNG o copiar la imagen al portapapeles para pegarla en
      presentaciones, documentos o piezas de diseño compatibles.
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
        title="Generador de QR"
        description="Crea un código QR a partir de texto o URLs, descárgalo en PNG o cópialo como imagen."
        tool={<GeneradorQR />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/generadores", label: "Generadores" },
              { href: "/generadores/qr", label: "Generador de QR" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/generadores/password", title: "Generador de contraseñas" },
              { href: "/generadores/lorem-ipsum", title: "Generador de Lorem Ipsum" },
            ]}
          />
        }
      />
    </>
  );
}
