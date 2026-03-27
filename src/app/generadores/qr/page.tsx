import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorQR from "./GeneradorQR";

export const metadata: Metadata = {
  title: "Generador de codigo QR online gratis - FastTools",
  description:
    "Crea codigos QR para URLs y texto en segundos. Sin registro, sin marcas de agua. Descarga el QR en PNG o copialo como imagen completamente gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como crear un codigo QR",
      step: [
        { "@type": "HowToStep", text: "Escribi o pega el texto o URL que queres codificar." },
        { "@type": "HowToStep", text: "El codigo QR se genera automaticamente al instante." },
        {
          "@type": "HowToStep",
          text: "Descarga el QR en PNG o copialo como imagen para usarlo en tus materiales.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Que puedo codificar en un codigo QR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Podes codificar texto libre y URLs de sitios web. Solo pega el contenido que quieras convertir y el QR se genera al instante.",
          },
        },
        {
          "@type": "Question",
          name: "Los codigos QR generados tienen fecha de vencimiento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Los QR generados con esta herramienta son estaticos y no tienen fecha de vencimiento. Mientras el contenido codificado siga siendo valido, el QR funcionara.",
          },
        },
        {
          "@type": "Question",
          name: "En que formato puedo guardar el QR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Podes descargarlo en PNG o copiar la imagen al portapapeles para pegarla en otros documentos o disenos compatibles.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Un codigo QR (Quick Response) es un codigo de barras bidimensional que permite
      compartir texto o URLs de forma rapida. Se usa en menus, carteles, etiquetas,
      tarjetas y piezas impresas que necesitan conectar el mundo fisico con el digital.
    </p>
    <h2>Como crear un codigo QR</h2>
    <ol>
      <li>Escribi o pega el texto o URL que queres codificar.</li>
      <li>El codigo QR se genera automaticamente al instante.</li>
      <li>Descarga el QR en PNG o copialo como imagen para usarlo donde quieras.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Que puedo codificar en un codigo QR?</h3>
    <p>
      Podes codificar texto libre y URLs de sitios web. Si necesitas compartir un
      enlace, un mensaje corto o un acceso rapido, esta herramienta te sirve sin pasos
      extra.
    </p>
    <h3>Los codigos QR generados tienen fecha de vencimiento?</h3>
    <p>
      No. El QR es estatico, asi que seguira funcionando mientras el contenido que
      contiene siga siendo valido.
    </p>
    <h3>En que formato puedo guardar el QR?</h3>
    <p>
      Podes descargarlo en PNG o copiar la imagen al portapapeles para pegarla en
      presentaciones, documentos o piezas de diseno compatibles.
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
        description="Crea un codigo QR a partir de texto o URLs, descargalo en PNG o copialo como imagen."
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
