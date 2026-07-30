import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorLineas from "./ContadorLineas";

export const metadata: Metadata = {
  title: "Contador de líneas online gratis",
  description:
    "Cuenta líneas totales y líneas no vacías al instante. Útil para listas, bloques de texto, código y archivos pegados.",
  alternates: {
    canonical: "/texto/contador-lineas",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo contar líneas de un texto",
      step: [
        { "@type": "HowToStep", text: "Pega o escribe tu texto en el campo." },
        { "@type": "HowToStep", text: "La herramienta muestra líneas totales y no vacías." },
        { "@type": "HowToStep", text: "Copia o limpia el contenido cuando quieras." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Para qué sirve contar líneas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para revisar listas, archivos pegados, bloques de código o textos donde cada línea importa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué diferencia hay entre líneas totales y no vacías?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las líneas totales incluyen todo; las no vacías excluyen líneas en blanco o con espacios.",
          },
        },
        {
          "@type": "Question",
          name: "¿Funciona con código fuente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes pegar código y ver rápidamente cuántas líneas tiene.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El contador de líneas es útil cuando trabajas con listas, datos pegados, texto
      estructurado o fragmentos de código. Te muestra de forma rápida cuántas líneas hay
      en total y cuántas contienen contenido real.
    </p>
    <h2>Cómo usar el contador de líneas</h2>
    <ol>
      <li>Pega o escribe tu texto.</li>
      <li>Revisa el total de líneas y las líneas no vacías.</li>
      <li>Si lo necesitas, copia o limpia el contenido.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Para qué sirve contar líneas?</h3>
    <p>
      Sirve para revisar listas, archivos pegados, bloques de código y otros textos donde
      cada línea tiene valor propio.
    </p>
    <h3>¿Qué diferencia hay entre líneas totales y no vacías?</h3>
    <p>
      Las líneas totales cuentan todo. Las no vacías excluyen líneas en blanco o con
      espacios.
    </p>
    <h3>¿Funciona con código fuente?</h3>
    <p>
      Sí. Puedes pegar código y obtener una referencia inmediata de su longitud.
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
        title="Contador de líneas"
        description="Cuenta las líneas de tu texto y distingue las líneas no vacías."
        tool={<ContadorLineas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/contador-lineas", label: "Contador de líneas" },
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
