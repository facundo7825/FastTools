import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import ExtraerTextoHTML from "./ExtraerTextoHTML";

export const metadata: Metadata = {
  title: "Extractor de texto de HTML online",
  description:
    "Extrae texto plano desde código HTML en segundos. Ideal para limpiar contenido copiado de webs, CMS o emails.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo extraer texto de HTML",
      step: [
        { "@type": "HowToStep", text: "Pega el código HTML en el campo de entrada." },
        { "@type": "HowToStep", text: "La herramienta elimina etiquetas y deja solo texto plano." },
        { "@type": "HowToStep", text: "Copia el resultado si quieres reutilizarlo en otro lugar." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Elimina etiquetas script y style?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La herramienta descarta ese contenido para dejar un resultado más limpio.",
          },
        },
        {
          "@type": "Question",
          name: "¿Sirve para contenido copiado desde un CMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Es útil para limpiar texto desde editores, newsletters, bloques HTML o webs.",
          },
        },
        {
          "@type": "Question",
          name: "¿Convierte entidades HTML comunes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Convierte entidades frecuentes como ampersand, comillas o espacios no separables.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Extraer texto plano desde HTML es útil cuando copias contenido desde una web o un
      CMS y necesitas quedarte solo con lo importante. Esta herramienta elimina etiquetas
      comunes y deja una salida lista para leer, revisar o reutilizar.
    </p>
    <h2>Cómo usar el extractor</h2>
    <ol>
      <li>Pega el código HTML completo en el campo de entrada.</li>
      <li>Revisa el texto limpio generado automáticamente.</li>
      <li>Copia el resultado para usarlo donde necesites.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Elimina etiquetas script y style?</h3>
    <p>
      Sí. La salida ignora ese contenido para que el resultado sea más útil como texto
      plano.
    </p>
    <h3>¿Sirve para contenido copiado desde un CMS?</h3>
    <p>
      Sí. Funciona bien para limpiar bloques HTML desde newsletters, editores o webs.
    </p>
    <h3>¿Convierte entidades HTML comunes?</h3>
    <p>
      Sí. Se resuelven entidades frecuentes como espacios no separables, ampersand y
      comillas básicas.
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
              { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de línea" },
              { href: "/texto/minificar-texto", title: "Minificador de texto" },
              { href: "/texto/json-pretty-print", title: "JSON pretty print" },
            ]}
          />
        }
      />
    </>
  );
}
