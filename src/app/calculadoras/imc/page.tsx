import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraIMC from "./CalculadoraIMC";

export const metadata: Metadata = {
  title: "Calculadora de IMC online gratis",
  description:
    "Calcula tu índice de masa corporal ingresando peso y altura. Obtiene una referencia rápida de tu categoría.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo calcular el IMC",
      step: [
        { "@type": "HowToStep", text: "Ingresa tu peso en kilogramos." },
        { "@type": "HowToStep", text: "Ingresa tu altura en centímetros." },
        { "@type": "HowToStep", text: "Consulta el IMC y la categoría resultante." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo se calcula el IMC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se divide el peso en kilogramos por la altura en metros al cuadrado.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué sirve este valor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve como referencia general para relacionar peso y altura de forma simple.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es un diagnóstico médico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Es una referencia rápida y no reemplaza la evaluación profesional.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El índice de masa corporal es una medida simple que relaciona peso y altura para
      ofrecer una referencia rápida. No reemplaza una evaluación profesional, pero puede
      ayudarte a ubicarte dentro de un rango general.
    </p>
    <h2>Cómo calcular el IMC</h2>
    <ol>
      <li>Ingresa tu peso en kilogramos.</li>
      <li>Ingresa tu altura en centímetros.</li>
      <li>Consulta el resultado y la categoría estimada.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Cómo se calcula el IMC?</h3>
    <p>
      Se divide el peso en kilogramos por la altura en metros al cuadrado.
    </p>
    <h3>¿Para qué sirve este valor?</h3>
    <p>
      Sirve como una referencia general para relacionar peso y altura de manera simple.
    </p>
    <h3>¿Es un diagnóstico médico?</h3>
    <p>
      No. Es solo una referencia y no reemplaza una evaluación profesional.
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
        title="Calculadora de IMC"
        description="Calcula tu índice de masa corporal ingresando peso y altura."
        tool={<CalculadoraIMC />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/calculadoras", label: "Calculadoras" },
              { href: "/calculadoras/imc", label: "Calculadora de IMC" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/calculadoras/edad", title: "Calculadora de edad" },
              { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
              { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
            ]}
          />
        }
      />
    </>
  );
}
