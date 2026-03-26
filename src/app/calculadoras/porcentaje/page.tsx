import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraPorcentaje from "./CalculadoraPorcentaje";

export const metadata: Metadata = {
  title: "Calculadora de porcentaje online gratis - FastTools",
  description: "Calculá porcentajes al instante: descuentos, propinas, IVA, aumentos y más. Simple, rápida y sin anuncios molestos. Herramienta gratuita online.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo calcular un porcentaje",
      "step": [
        { "@type": "HowToStep", "text": "Ingresá el valor base y el porcentaje que querés calcular." },
        { "@type": "HowToStep", "text": "El resultado aparece al instante." },
        { "@type": "HowToStep", "text": "Podés calcular el porcentaje de un número, qué porcentaje representa un valor respecto a otro, o aplicar un aumento o descuento." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cómo se calcula el porcentaje de un número?",
          "acceptedAnswer": { "@type": "Answer", "text": "Para calcular el X% de un número N, se multiplica N por X y se divide por 100. Por ejemplo, el 15% de 200 es (200 × 15) ÷ 100 = 30. La calculadora hace este cálculo automáticamente al ingresar los valores." },
        },
        {
          "@type": "Question",
          "name": "¿Cómo calculo un descuento con esta herramienta?",
          "acceptedAnswer": { "@type": "Answer", "text": "Para calcular el precio final con descuento, ingresá el precio original como valor base y el porcentaje de descuento. El resultado te dará el monto del descuento. Restá ese monto del precio original para obtener el precio final." },
        },
        {
          "@type": "Question",
          "name": "¿Puedo calcular el IVA con esta herramienta?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. Para calcular el IVA del 21%, ingresá el precio neto como valor base y 21 como porcentaje. El resultado es el monto de IVA a agregar. Para obtener el precio final, sumá el IVA al precio neto." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Calcular porcentajes es una operación cotidiana: un descuento del 30% en una compra, el 21% de IVA sobre una factura, cuánto representa tu sueldo respecto al ingreso familiar, o qué porcentaje aumentó el precio de la nafta este mes. Esta calculadora resuelve todos esos casos de forma inmediata, sin necesidad de recordar fórmulas ni abrir una hoja de cálculo.
    </p>
    <h2>¿Cómo usar la calculadora de porcentaje?</h2>
    <ol>
      <li>Ingresá el valor base y el porcentaje que querés calcular.</li>
      <li>El resultado aparece al instante.</li>
      <li>Podés calcular el porcentaje de un número, qué porcentaje representa un valor respecto a otro, o aplicar un aumento/descuento.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Cómo se calcula el porcentaje de un número?</h3>
    <p>Para calcular el X% de un número N, se multiplica N por X y se divide por 100. Por ejemplo, el 15% de 200 es (200 × 15) ÷ 100 = 30. La calculadora hace este cálculo automáticamente al ingresar los valores.</p>
    <h3>¿Cómo calculo un descuento con esta herramienta?</h3>
    <p>Para calcular el precio final con descuento, ingresá el precio original como valor base y el porcentaje de descuento. El resultado te dará el monto del descuento. Restá ese monto del precio original para obtener el precio final.</p>
    <h3>¿Puedo calcular el IVA con esta herramienta?</h3>
    <p>Sí. Para calcular el IVA del 21%, ingresá el precio neto como valor base y 21 como porcentaje. El resultado es el monto de IVA a agregar. Para obtener el precio final, sumá el IVA al precio neto.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Calculadora de porcentaje"
        description="Calculá el porcentaje de cualquier valor de forma rápida y sencilla."
        tool={<CalculadoraPorcentaje />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }, { href: "/calculadoras/porcentaje", label: "Calculadora de porcentaje" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/calculadoras/edad", title: "Calculadora de edad" },
            { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
          ]} />
        }
      />
    </>
  );
}
