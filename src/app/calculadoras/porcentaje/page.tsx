import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraPorcentaje from "./CalculadoraPorcentaje";

export const metadata: Metadata = {
  title: "Calculadora de porcentaje online gratis",
  description:
    "Calcula porcentajes al instante para descuentos, subas, IVA y cuentas cotidianas. Simple, clara y sin registro.",
  alternates: {
    canonical: "/calculadoras/porcentaje",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo calcular un porcentaje",
      step: [
        { "@type": "HowToStep", text: "Ingresa el valor base y el porcentaje." },
        { "@type": "HowToStep", text: "El resultado aparece al instante." },
        { "@type": "HowToStep", text: "Úsalo para descuentos, IVA o cálculos simples." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo se calcula el porcentaje de un número?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se multiplica el valor base por el porcentaje y luego se divide por 100.",
          },
        },
        {
          "@type": "Question",
          name: "¿Sirve para descuentos o IVA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes usarla como apoyo para descuentos, impuestos o aumentos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Hace el resultado automáticamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Apenas completas los campos, la calculadora muestra el resultado.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Calcular porcentajes es una necesidad común en compras, presupuestos, facturas y
      ajustes de precios. Esta herramienta resuelve esa cuenta en segundos sin fórmulas ni
      pasos de más.
    </p>
    <h2>Cómo usar la calculadora de porcentaje</h2>
    <ol>
      <li>Ingresa el valor base.</li>
      <li>Escribe el porcentaje que quieres calcular.</li>
      <li>El resultado aparece automáticamente debajo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Cómo se calcula el porcentaje de un número?</h3>
    <p>
      Se multiplica el valor base por el porcentaje y luego se divide por 100.
    </p>
    <h3>¿Sirve para descuentos o IVA?</h3>
    <p>
      Sí. Puedes usarla para descuentos, impuestos, propinas, subas de precio o cualquier
      cuenta similar.
    </p>
    <h3>¿Hace el resultado automáticamente?</h3>
    <p>
      Sí. Apenas completas ambos campos, la calculadora te muestra el valor resultante.
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
        title="Calculadora de porcentaje"
        description="Calcula el porcentaje de cualquier valor de forma rápida y sencilla."
        tool={<CalculadoraPorcentaje />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/calculadoras", label: "Calculadoras" },
              { href: "/calculadoras/porcentaje", label: "Calculadora de porcentaje" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/calculadoras/edad", title: "Calculadora de edad" },
              { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
            ]}
          />
        }
      />
    </>
  );
}
