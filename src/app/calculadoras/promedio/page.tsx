import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import CalculadoraPromedio from "./CalculadoraPromedio";

export const metadata: Metadata = {
  title: "Calculadora de promedio online",
  description:
    "Calcula promedios online en segundos. Ideal para notas, gastos, resultados y listas de valores.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como calcular un promedio",
      step: [
        { "@type": "HowToStep", text: "Pega los numeros separados por comas, espacios o lineas." },
        { "@type": "HowToStep", text: "La herramienta suma los valores y divide por la cantidad." },
        { "@type": "HowToStep", text: "Copia el promedio si quieres reutilizarlo." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Sirve para notas o examenes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes pegar varias calificaciones y obtener el promedio al instante.",
          },
        },
        {
          "@type": "Question",
          name: "Acepta numeros con decimales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes usar valores enteros o decimales.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo separar los valores de distintas formas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La calculadora acepta comas, espacios, saltos de linea y punto y coma.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      La calculadora de promedio sirve para sacar medias de notas, gastos, resultados o
      cualquier serie de numeros sin hacerlo manualmente. Solo pegas los valores y el
      resultado aparece enseguida.
    </p>
    <h2>Como usar la calculadora</h2>
    <ol>
      <li>Pega los numeros separados por comas, espacios o lineas.</li>
      <li>La herramienta calcula suma total, cantidad y promedio.</li>
      <li>Copia el promedio si quieres usarlo en otro lado.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Sirve para notas o examenes?</h3>
    <p>
      Si. Es una forma rapida de promediar calificaciones o resultados de evaluaciones.
    </p>
    <h3>Acepta numeros con decimales?</h3>
    <p>
      Si. Puedes usar tanto valores enteros como valores con decimales.
    </p>
    <h3>Puedo separar los valores de distintas formas?</h3>
    <p>
      Si. Puedes usar comas, espacios, lineas nuevas o punto y coma.
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
        title="Calculadora de promedio"
        description="Saca promedios automaticamente a partir de una lista de valores."
        tool={<CalculadoraPromedio />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/calculadoras", label: "Calculadoras" },
              { href: "/calculadoras/promedio", label: "Calculadora de promedio" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
              { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
              { href: "/calculadoras/descuento", title: "Calculadora de descuento" },
            ]}
          />
        }
      />
    </>
  );
}
