import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import ContadorPalabrasClave from "./ContadorPalabrasClave";

export const metadata: Metadata = {
  title: "Contador de palabras clave online",
  description:
    "Cuenta cuantas veces aparece una palabra o frase clave dentro de un texto y estima su densidad en segundos.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como contar palabras clave en un texto",
      step: [
        { "@type": "HowToStep", text: "Escribe la palabra o frase clave que quieres analizar." },
        { "@type": "HowToStep", text: "Pega el texto completo en el area principal." },
        { "@type": "HowToStep", text: "Revisa coincidencias, palabras totales y densidad estimada." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Cuenta frases completas o solo palabras sueltas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La herramienta permite analizar tanto una sola palabra como una frase completa.",
          },
        },
        {
          "@type": "Question",
          name: "Distingue mayusculas y minusculas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. El conteo se hace sin distinguir mayusculas y minusculas para dar una lectura mas practica.",
          },
        },
        {
          "@type": "Question",
          name: "La densidad es exacta para SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es una estimacion util para orientarte. La interpretacion final depende del contexto, la intencion del texto y otros factores de redaccion.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Esta herramienta sirve para revisar repeticiones de terminos en articulos,
      ensayos, apuntes o textos SEO sin hacer busquedas manuales una por una. Tambien
      te da una referencia rapida de densidad para entender si una keyword aparece poco
      o demasiado.
    </p>
    <h2>Como usar el contador de palabras clave</h2>
    <ol>
      <li>Escribe la palabra o frase que quieres medir.</li>
      <li>Pega el texto completo en el campo principal.</li>
      <li>Revisa coincidencias, cantidad de palabras y densidad estimada.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Cuenta frases completas o solo palabras sueltas?</h3>
    <p>
      Funciona con ambas. Puedes analizar una keyword simple o una frase de varias
      palabras.
    </p>
    <h3>Distingue mayusculas y minusculas?</h3>
    <p>
      No. El conteo es insensible a mayusculas para que el resultado sea mas practico.
    </p>
    <h3>La densidad es exacta para SEO?</h3>
    <p>
      Es una referencia util, pero la calidad del contenido siempre depende tambien del
      contexto y de como esta escrito el texto.
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
        title="Contador de palabras clave"
        description="Mide repeticiones y densidad estimada de una keyword en cualquier texto."
        tool={<ContadorPalabrasClave />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              {
                href: "/texto/contador-palabras-clave",
                label: "Contador de palabras clave",
              },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-palabras", title: "Contador de palabras" },
              { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
              { href: "/texto/ordenar-lineas", title: "Ordenar lineas alfabeticamente" },
            ]}
          />
        }
      />
    </>
  );
}
