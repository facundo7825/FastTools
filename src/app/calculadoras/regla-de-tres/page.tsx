import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ReglaDeTres from "./ReglaDeTres";

export const metadata: Metadata = {
  title: "Regla de tres online gratis",
  description:
    "Resuelve una regla de tres simple al instante. Util para proporciones, recetas, escalas y cuentas rapidas.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como resolver una regla de tres",
      step: [
        { "@type": "HowToStep", text: "Completa los tres valores conocidos." },
        { "@type": "HowToStep", text: "La herramienta calcula el valor faltante." },
        { "@type": "HowToStep", text: "Usa el resultado como referencia para tu proporcion." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Para que sirve la regla de tres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para resolver proporciones simples en recetas, precios, cantidades y escalas.",
          },
        },
        {
          "@type": "Question",
          name: "Esta herramienta calcula relaciones directas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Esta version esta pensada para reglas de tres simples y directas.",
          },
        },
        {
          "@type": "Question",
          name: "Hace el calculo automaticamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Apenas completas los datos necesarios, el valor X aparece en pantalla.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      La regla de tres es una forma rapida de resolver proporciones cuando conoces tres
      valores y necesitas calcular el cuarto. Es util en recetas, escalas, compras,
      rendimientos y cuentas cotidianas.
    </p>
    <h2>Como usar la regla de tres</h2>
    <ol>
      <li>Completa los tres valores conocidos.</li>
      <li>La herramienta calcula automaticamente el valor X.</li>
      <li>Usa ese resultado como referencia para tu proporcion.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Para que sirve la regla de tres?</h3>
    <p>
      Sirve para resolver proporciones simples en recetas, precios, cantidades y escalas.
    </p>
    <h3>Esta herramienta calcula relaciones directas?</h3>
    <p>
      Si. Esta version esta pensada para reglas de tres simples y directas.
    </p>
    <h3>Hace el calculo automaticamente?</h3>
    <p>
      Si. Apenas completas los datos necesarios, el resultado aparece en pantalla.
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
        title="Regla de tres"
        description="Resuelve una proporcion simple de forma rapida y clara."
        tool={<ReglaDeTres />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/calculadoras", label: "Calculadoras" },
              { href: "/calculadoras/regla-de-tres", label: "Regla de tres" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
              { href: "/calculadoras/edad", title: "Calculadora de edad" },
            ]}
          />
        }
      />
    </>
  );
}
