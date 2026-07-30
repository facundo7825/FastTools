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
      name: "Cómo calcular un promedio",
      step: [
        { "@type": "HowToStep", text: "Pega los números separados por comas, espacios o líneas." },
        { "@type": "HowToStep", text: "La herramienta suma los valores y divide por la cantidad." },
        { "@type": "HowToStep", text: "Copia el promedio si quieres reutilizarlo." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Sirve para notas o exámenes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes pegar varias calificaciones y obtener el promedio al instante.",
          },
        },
        {
          "@type": "Question",
          name: "¿Acepta números con decimales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes usar valores enteros o decimales.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo separar los valores de distintas formas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La calculadora acepta comas, espacios, saltos de línea y punto y coma.",
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
      cualquier serie de números sin hacerlo manualmente. Solo pegas los valores y el
      resultado aparece enseguida.
    </p>
    <h2>Cómo usar la calculadora</h2>
    <ol>
      <li>Pega los números separados por comas, espacios o líneas.</li>
      <li>La herramienta calcula suma total, cantidad y promedio.</li>
      <li>Copia el promedio si quieres usarlo en otro lado.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Sirve para notas o exámenes?</h3>
    <p>
      Sí. Es una forma rápida de promediar calificaciones o resultados de evaluaciones.
    </p>
    <h3>¿Acepta números con decimales?</h3>
    <p>
      Sí. Puedes usar tanto valores enteros como valores con decimales.
    </p>
    <h3>¿Puedo separar los valores de distintas formas?</h3>
    <p>
      Sí. Puedes usar comas, espacios, líneas nuevas o punto y coma.
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
        description="Saca promedios automáticamente a partir de una lista de valores."
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
