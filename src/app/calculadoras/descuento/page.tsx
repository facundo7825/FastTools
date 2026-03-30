import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraDescuento from "./CalculadoraDescuento";

export const metadata: Metadata = {
  title: "Calculadora de descuento online gratis",
  description:
    "Calcula descuentos y precio final al instante. Ideal para ofertas, rebajas, ventas y compras cotidianas.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como calcular un descuento",
      step: [
        { "@type": "HowToStep", text: "Ingresa el precio original." },
        { "@type": "HowToStep", text: "Escribe el porcentaje de descuento." },
        { "@type": "HowToStep", text: "La herramienta muestra el monto descontado y el precio final." },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Esta calculadora te ayuda a saber rapidamente cuanto descuentan sobre un precio y
      cuanto terminarias pagando. Es util para ofertas, compras online, rebajas y
      comparaciones simples.
    </p>
    <h2>Como usar la calculadora</h2>
    <ol>
      <li>Ingresa el precio original.</li>
      <li>Escribe el porcentaje de descuento.</li>
      <li>Revisa el monto descontado y el precio final.</li>
    </ol>
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
        title="Calculadora de descuento"
        description="Calcula cuanto te descuentan y cual es el precio final."
        tool={<CalculadoraDescuento />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/calculadoras", label: "Calculadoras" },
              { href: "/calculadoras/descuento", label: "Calculadora de descuento" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
              { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
              { href: "/calculadoras/edad", title: "Calculadora de edad" },
            ]}
          />
        }
      />
    </>
  );
}
