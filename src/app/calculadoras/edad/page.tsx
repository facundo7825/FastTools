import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraEdad from "./CalculadoraEdad";

export const metadata: Metadata = {
  title: "Calculadora de edad exacta online gratis",
  description:
    "Calcula tu edad exacta en anos, meses y dias a partir de tu fecha de nacimiento. Rapida y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como calcular la edad exacta",
      step: [
        { "@type": "HowToStep", text: "Selecciona tu fecha de nacimiento." },
        { "@type": "HowToStep", text: "La herramienta calcula la edad automaticamente." },
        { "@type": "HowToStep", text: "Revisa el resultado en anos, meses y dias." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "La calculadora considera meses y dias?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. El resultado muestra anos, meses y dias transcurridos desde la fecha ingresada.",
          },
        },
        {
          "@type": "Question",
          name: "Sirve para tramites o verificaciones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puede servir como referencia rapida para conocer una edad exacta antes de revisar documentacion oficial.",
          },
        },
        {
          "@type": "Question",
          name: "Se actualiza con la fecha actual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. El calculo toma como referencia la fecha del dia en que usas la herramienta.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      La calculadora de edad te permite saber con precision cuantos anos, meses y dias
      pasaron desde una fecha de nacimiento hasta hoy. Es util para tramites, controles o
      simplemente para tener el dato exacto sin hacer la cuenta manualmente.
    </p>
    <h2>Como calcular la edad exacta</h2>
    <ol>
      <li>Selecciona tu fecha de nacimiento.</li>
      <li>La herramienta calcula la edad automaticamente.</li>
      <li>Consulta el resultado en anos, meses y dias.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>La calculadora considera meses y dias?</h3>
    <p>
      Si. El resultado muestra el detalle completo en anos, meses y dias.
    </p>
    <h3>Sirve para tramites o verificaciones?</h3>
    <p>
      Puede servir como referencia rapida antes de validar documentacion oficial o datos
      administrativos.
    </p>
    <h3>Se actualiza con la fecha actual?</h3>
    <p>
      Si. El calculo toma como referencia el dia en que usas la herramienta.
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
        description="Calcula tu edad exacta en anos, meses y dias desde tu fecha de nacimiento."
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
