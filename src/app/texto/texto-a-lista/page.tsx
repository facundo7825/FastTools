import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import TextoALista from "./TextoALista";

export const metadata: Metadata = {
  title: "Convertidor de texto a lista online",
  description:
    "Convierte texto separado por comas, lineas o punto y coma en una lista lista para pegar donde quieras.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como convertir texto a lista",
      step: [
        { "@type": "HowToStep", text: "Pega el texto separado por comas, lineas o punto y coma." },
        { "@type": "HowToStep", text: "Elige el formato de lista que prefieras." },
        { "@type": "HowToStep", text: "Copia el resultado y pegalo donde lo necesites." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Sirve para listas de productos o keywords?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Es util para productos, tags, keywords, nombres o cualquier secuencia separada por delimitadores.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo cambiar el formato de la lista?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes elegir entre guiones, vinetas o una lista numerada simple.",
          },
        },
        {
          "@type": "Question",
          name: "Acepta comas y saltos de linea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La herramienta acepta comas, punto y coma y lineas nuevas como separadores.",
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
      frases en un formato mas claro y facil de reutilizar. Es practico para productos,
      keywords, ideas, tags o apuntes rapidos.
    </p>
    <h2>Como usar la herramienta</h2>
    <ol>
      <li>Pega el texto separado por comas, punto y coma o lineas.</li>
      <li>Elige si quieres una lista con guiones, vinetas o numeracion simple.</li>
      <li>Copia el resultado final y pegalo donde quieras usarlo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Sirve para listas de productos o keywords?</h3>
    <p>
      Si. Funciona bien para productos, categorias, ideas, keywords o cualquier conjunto
      de items separados.
    </p>
    <h3>Puedo cambiar el formato de la lista?</h3>
    <p>
      Si. Puedes elegir el estilo de salida segun como quieras reutilizar la lista.
    </p>
    <h3>Acepta comas y saltos de linea?</h3>
    <p>
      Si. La herramienta acepta comas, punto y coma y lineas nuevas como separadores.
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
              { href: "/texto/ordenar-lineas", title: "Ordenar lineas alfabeticamente" },
              { href: "/texto/eliminar-lineas-duplicadas", title: "Eliminar lineas duplicadas" },
              { href: "/texto/minificar-texto", title: "Minificador de texto" },
            ]}
          />
        }
      />
    </>
  );
}
