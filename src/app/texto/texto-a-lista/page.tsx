import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import TextoALista from "./TextoALista";

export const metadata: Metadata = {
  title: "Convertidor de texto a lista online",
  description:
    "Convierte texto separado por comas, líneas o punto y coma en una lista lista para pegar donde quieras.",
  alternates: {
    canonical: "/texto/texto-a-lista",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo convertir texto a lista",
      step: [
        { "@type": "HowToStep", text: "Pega el texto separado por comas, líneas o punto y coma." },
        { "@type": "HowToStep", text: "Elige el formato de lista que prefieras." },
        { "@type": "HowToStep", text: "Copia el resultado y pégalo donde lo necesites." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Sirve para listas de productos o keywords?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Es útil para productos, tags, keywords, nombres o cualquier secuencia separada por delimitadores.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo cambiar el formato de la lista?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes elegir entre guiones, viñetas o una lista numerada simple.",
          },
        },
        {
          "@type": "Question",
          name: "¿Acepta comas y saltos de línea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La herramienta acepta comas, punto y coma y líneas nuevas como separadores.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El convertidor de texto a lista sirve para transformar secuencias de palabras o
      frases en un formato más claro y fácil de reutilizar. Es práctico para productos,
      keywords, ideas, tags o apuntes rápidos.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega el texto separado por comas, punto y coma o líneas.</li>
      <li>Elige si quieres una lista con guiones, viñetas o numeración simple.</li>
      <li>Copia el resultado final y pégalo donde quieras usarlo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Sirve para listas de productos o keywords?</h3>
    <p>
      Sí. Funciona bien para productos, categorías, ideas, keywords o cualquier conjunto
      de ítems separados.
    </p>
    <h3>¿Puedo cambiar el formato de la lista?</h3>
    <p>
      Sí. Puedes elegir el estilo de salida según cómo quieras reutilizar la lista.
    </p>
    <h3>¿Acepta comas y saltos de línea?</h3>
    <p>
      Sí. La herramienta acepta comas, punto y coma y líneas nuevas como separadores.
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
        title="Convertidor de texto a lista"
        description="Pasa texto separado por delimitadores a una lista limpia y ordenada."
        tool={<TextoALista />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/texto-a-lista", label: "Texto a lista" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/ordenar-lineas", title: "Ordenar líneas alfabéticamente" },
              { href: "/texto/eliminar-lineas-duplicadas", title: "Eliminar líneas duplicadas" },
              { href: "/texto/minificar-texto", title: "Minificador de texto" },
            ]}
          />
        }
      />
    </>
  );
}
