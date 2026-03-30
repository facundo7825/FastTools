import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import ExtraerTextoHTML from "./ExtraerTextoHTML";

export const metadata: Metadata = {
  title: "Extractor de texto de HTML online",
  description:
    "Extrae texto plano desde codigo HTML en segundos. Ideal para limpiar contenido copiado de webs, CMS o emails.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como extraer texto de HTML",
      step: [
        { "@type": "HowToStep", text: "Pega el codigo HTML en el campo de entrada." },
        { "@type": "HowToStep", text: "La herramienta elimina etiquetas y deja solo texto plano." },
        { "@type": "HowToStep", text: "Copia el resultado si quieres reutilizarlo en otro lugar." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Elimina etiquetas script y style?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La herramienta descarta ese contenido para dejar un resultado mas limpio.",
          },
        },
        {
          "@type": "Question",
          name: "Sirve para contenido copiado desde un CMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Es util para limpiar texto desde editores, newsletters, bloques HTML o webs.",
          },
        },
        {
          "@type": "Question",
          name: "Convierte entidades HTML comunes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Convierte entidades frecuentes como ampersand, comillas o espacios no separables.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Extraer texto plano desde HTML es util cuando copias contenido desde una web o un
      CMS y necesitas quedarte solo con lo importante. Esta herramienta elimina etiquetas
      comunes y deja una salida lista para leer, revisar o reutilizar.
    </p>
    <h2>Como usar el extractor</h2>
    <ol>
      <li>Pega el codigo HTML completo en el campo de entrada.</li>
      <li>Revisa el texto limpio generado automaticamente.</li>
      <li>Copia el resultado para usarlo donde necesites.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Elimina etiquetas script y style?</h3>
    <p>
      Si. La salida ignora ese contenido para que el resultado sea mas util como texto
      plano.
    </p>
    <h3>Sirve para contenido copiado desde un CMS?</h3>
    <p>
      Si. Funciona bien para limpiar bloques HTML desde newsletters, editores o webs.
    </p>
    <h3>Convierte entidades HTML comunes?</h3>
    <p>
      Si. Se resuelven entidades frecuentes como espacios no separables, ampersand y
      comillas basicas.
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
        title="Extractor de texto de HTML"
        description="Pega HTML, limpia etiquetas y copia solo el contenido textual."
        tool={<ExtraerTextoHTML />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/extraer-texto-html", label: "Extractor de texto de HTML" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de linea" },
              { href: "/texto/minificar-texto", title: "Minificador de texto" },
              { href: "/texto/json-pretty-print", title: "JSON pretty print" },
            ]}
          />
        }
      />
    </>
  );
}
