import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorLineas from "./ContadorLineas";

export const metadata: Metadata = {
  title: "Contador de lineas online gratis",
  description:
    "Cuenta lineas totales y lineas no vacias al instante. Util para listas, bloques de texto, codigo y archivos pegados.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como contar lineas de un texto",
      step: [
        { "@type": "HowToStep", text: "Pega o escribe tu texto en el campo." },
        { "@type": "HowToStep", text: "La herramienta muestra lineas totales y no vacias." },
        { "@type": "HowToStep", text: "Copia o limpia el contenido cuando quieras." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Para que sirve contar lineas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para revisar listas, archivos pegados, bloques de codigo o textos donde cada linea importa.",
          },
        },
        {
          "@type": "Question",
          name: "Que diferencia hay entre lineas totales y no vacias?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las lineas totales incluyen todo; las no vacias excluyen lineas en blanco o con espacios.",
          },
        },
        {
          "@type": "Question",
          name: "Funciona con codigo fuente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes pegar codigo y ver rapidamente cuantas lineas tiene.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El contador de lineas es util cuando trabajas con listas, datos pegados, texto
      estructurado o fragmentos de codigo. Te muestra de forma rapida cuantas lineas hay
      en total y cuantas contienen contenido real.
    </p>
    <h2>Como usar el contador de lineas</h2>
    <ol>
      <li>Pega o escribe tu texto.</li>
      <li>Revisa el total de lineas y las lineas no vacias.</li>
      <li>Si lo necesitas, copia o limpia el contenido.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Para que sirve contar lineas?</h3>
    <p>
      Sirve para revisar listas, archivos pegados, bloques de codigo y otros textos donde
      cada linea tiene valor propio.
    </p>
    <h3>Que diferencia hay entre lineas totales y no vacias?</h3>
    <p>
      Las lineas totales cuentan todo. Las no vacias excluyen lineas en blanco o con
      espacios.
    </p>
    <h3>Funciona con codigo fuente?</h3>
    <p>
      Si. Puedes pegar codigo y obtener una referencia inmediata de su longitud.
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
        title="Contador de lineas"
        description="Cuenta las lineas de tu texto y distingue las lineas no vacias."
        tool={<ContadorLineas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/contador-lineas", label: "Contador de lineas" },
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
