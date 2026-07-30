import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraEdad from "./CalculadoraEdad";

export const metadata: Metadata = {
  title: "Calculadora de edad exacta online gratis",
  description:
    "Calcula tu edad exacta en años, meses y días a partir de tu fecha de nacimiento. Rápida y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo calcular la edad exacta",
      step: [
        { "@type": "HowToStep", text: "Selecciona tu fecha de nacimiento." },
        { "@type": "HowToStep", text: "La herramienta calcula la edad automáticamente." },
        { "@type": "HowToStep", text: "Revisa el resultado en años, meses y días." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿La calculadora considera meses y días?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El resultado muestra años, meses y días transcurridos desde la fecha ingresada.",
          },
        },
        {
          "@type": "Question",
          name: "¿Sirve para trámites o verificaciones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puede servir como referencia rápida para conocer una edad exacta antes de revisar documentación oficial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se actualiza con la fecha actual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El cálculo toma como referencia la fecha del día en que usas la herramienta.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      La calculadora de edad te permite saber con precisión cuántos años, meses y días
      pasaron desde una fecha de nacimiento hasta hoy. Es útil para trámites, controles o
      simplemente para tener el dato exacto sin hacer la cuenta manualmente.
    </p>
    <h2>Cómo calcular la edad exacta</h2>
    <ol>
      <li>Selecciona tu fecha de nacimiento.</li>
      <li>La herramienta calcula la edad automáticamente.</li>
      <li>Consulta el resultado en años, meses y días.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿La calculadora considera meses y días?</h3>
    <p>
      Sí. El resultado muestra el detalle completo en años, meses y días.
    </p>
    <h3>¿Sirve para trámites o verificaciones?</h3>
    <p>
      Puede servir como referencia rápida antes de validar documentación oficial o datos
      administrativos.
    </p>
    <h3>¿Se actualiza con la fecha actual?</h3>
    <p>
      Sí. El cálculo toma como referencia el día en que usas la herramienta.
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
        title="Calculadora de edad"
        description="Calcula tu edad exacta en años, meses y días desde tu fecha de nacimiento."
        tool={<CalculadoraEdad />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/calculadoras", label: "Calculadoras" },
              { href: "/calculadoras/edad", label: "Calculadora de edad" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
              { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
            ]}
          />
        }
      />
    </>
  );
}
