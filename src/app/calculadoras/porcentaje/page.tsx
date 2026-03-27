import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraPorcentaje from "./CalculadoraPorcentaje";

export const metadata: Metadata = {
  title: "Calculadora de porcentaje online gratis",
  description:
    "Calcula porcentajes al instante para descuentos, subas, IVA y cuentas cotidianas. Simple, clara y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como calcular un porcentaje",
      step: [
        { "@type": "HowToStep", text: "Ingresa el valor base y el porcentaje." },
        { "@type": "HowToStep", text: "El resultado aparece al instante." },
        { "@type": "HowToStep", text: "Usalo para descuentos, IVA o calculos simples." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Como se calcula el porcentaje de un numero?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se multiplica el valor base por el porcentaje y luego se divide por 100.",
          },
        },
        {
          "@type": "Question",
          name: "Sirve para descuentos o IVA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes usarla como apoyo para descuentos, impuestos o aumentos.",
          },
        },
        {
          "@type": "Question",
          name: "Hace el resultado automaticamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Apenas completas los campos, la calculadora muestra el resultado.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Calcular porcentajes es una necesidad comun en compras, presupuestos, facturas y
      ajustes de precios. Esta herramienta resuelve esa cuenta en segundos sin formulas ni
      pasos de mas.
    </p>
    <h2>Como usar la calculadora de porcentaje</h2>
    <ol>
      <li>Ingresa el valor base.</li>
      <li>Escribe el porcentaje que quieres calcular.</li>
      <li>El resultado aparece automaticamente debajo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Como se calcula el porcentaje de un numero?</h3>
    <p>
      Se multiplica el valor base por el porcentaje y luego se divide por 100.
    </p>
    <h3>Sirve para descuentos o IVA?</h3>
    <p>
      Si. Puedes usarla para descuentos, impuestos, propinas, subas de precio o cualquier
      cuenta similar.
    </p>
    <h3>Hace el resultado automaticamente?</h3>
    <p>
      Si. Apenas completas ambos campos, la calculadora te muestra el valor resultante.
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
        description="Calcula el porcentaje de cualquier valor de forma rapida y sencilla."
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
