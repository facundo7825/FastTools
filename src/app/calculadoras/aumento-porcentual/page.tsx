import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import CalculadoraAumentoPorcentual from "./CalculadoraAumentoPorcentual";

export const metadata: Metadata = {
  title: "Calculadora de aumento porcentual online",
  description:
    "Calcula aumentos porcentuales online al instante. Ve el monto aumentado y el valor final sin formulas.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como calcular un aumento porcentual",
      step: [
        { "@type": "HowToStep", text: "Ingresa el valor base." },
        { "@type": "HowToStep", text: "Escribe el porcentaje de aumento." },
        { "@type": "HowToStep", text: "La herramienta muestra el aumento y el valor final." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Sirve para aumentos de sueldo o precios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes usarla para estimar aumentos salariales, precios, cuotas o presupuestos.",
          },
        },
        {
          "@type": "Question",
          name: "Muestra el monto del aumento y el total?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La calculadora separa cuanto se suma y cual es el valor final.",
          },
        },
        {
          "@type": "Question",
          name: "Hace la cuenta automaticamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Apenas completas los campos, el resultado aparece al instante.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Esta calculadora sirve para ver rapidamente cuanto aumenta un valor y a cuanto se
      va despues de aplicar un porcentaje. Es util para salarios, listas de precios,
      cuotas y ajustes comerciales.
    </p>
    <h2>Como usar la calculadora</h2>
    <ol>
      <li>Ingresa el valor base.</li>
      <li>Escribe el porcentaje de aumento.</li>
      <li>Revisa el monto sumado y el valor final resultante.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Sirve para aumentos de sueldo o precios?</h3>
    <p>
      Si. Puedes usarla para aumentos salariales, presupuestos, cuotas o precios de
      productos.
    </p>
    <h3>Muestra el monto del aumento y el total?</h3>
    <p>
      Si. La herramienta te muestra por separado cuanto se suma y cuanto queda al final.
    </p>
    <h3>Hace la cuenta automaticamente?</h3>
    <p>
      Si. El resultado se actualiza apenas completas ambos campos.
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
        title="Calculadora de aumento porcentual"
        description="Calcula aumentos y valores finales a partir de un porcentaje."
        tool={<CalculadoraAumentoPorcentual />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/calculadoras", label: "Calculadoras" },
              {
                href: "/calculadoras/aumento-porcentual",
                label: "Calculadora de aumento porcentual",
              },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
              { href: "/calculadoras/descuento", title: "Calculadora de descuento" },
              { href: "/calculadoras/promedio", title: "Calculadora de promedio" },
            ]}
          />
        }
      />
    </>
  );
}
