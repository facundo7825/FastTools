import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraEdad from "./CalculadoraEdad";

export const metadata: Metadata = {
  title: "Calculadora de edad exacta online gratis - FastTools",
  description: "Calculá tu edad exacta en años, meses y días a partir de tu fecha de nacimiento. También calculá la diferencia entre dos fechas. Gratis y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo calcular la edad exacta",
      "step": [
        { "@type": "HowToStep", "text": "Ingresá tu fecha de nacimiento en el campo correspondiente." },
        { "@type": "HowToStep", "text": "La herramienta calcula automáticamente tu edad exacta en años, meses y días." },
        { "@type": "HowToStep", "text": "El resultado se actualiza con la fecha de hoy como referencia." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cómo calcula la edad exacta en meses y días?",
          "acceptedAnswer": { "@type": "Answer", "text": "La herramienta resta la fecha de nacimiento a la fecha actual considerando los meses de diferente duración y los años bisiestos. Por ejemplo, una persona nacida el 31 de enero tiene correctamente calculados los días según si el año en curso es bisiesto o no." },
        },
        {
          "@type": "Question",
          "name": "¿La calculadora tiene en cuenta los años bisiestos?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. El cálculo considera correctamente los años bisiestos (años divisibles por 4, excepto los centenarios que no sean divisibles por 400). Esto garantiza que el conteo de días sea exacto en todos los casos." },
        },
        {
          "@type": "Question",
          "name": "¿Para qué se usa la edad exacta en trámites?",
          "acceptedAnswer": { "@type": "Answer", "text": "Muchos trámites legales, médicos y administrativos requieren la edad exacta al día: jubilaciones, beneficios sociales por edad, seguros de salud, autorizaciones para menores, y verificaciones de mayoría de edad en distintas jurisdicciones." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      La calculadora de edad determina con precisión cuántos años, meses y días han transcurrido desde una fecha de nacimiento hasta hoy. Es útil para verificar la edad exacta en trámites legales, calcular si alguien es mayor de edad, saber cuántos días faltan para el próximo cumpleaños, o simplemente satisfacer la curiosidad de cuántos días de vida llevás acumulados.
    </p>
    <h2>¿Cómo calcular la edad exacta?</h2>
    <ol>
      <li>Ingresá tu fecha de nacimiento en el campo correspondiente.</li>
      <li>La herramienta calcula automáticamente tu edad exacta en años, meses y días.</li>
      <li>El resultado se actualiza con la fecha de hoy como referencia.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Cómo calcula la edad exacta en meses y días?</h3>
    <p>La herramienta resta la fecha de nacimiento a la fecha actual considerando los meses de diferente duración y los años bisiestos. Por ejemplo, una persona nacida el 31 de enero que cumple años en febrero, tiene correctamente calculados los días según si el año en curso es bisiesto o no.</p>
    <h3>¿Tiene en cuenta los años bisiestos?</h3>
    <p>Sí. El cálculo considera correctamente los años bisiestos (años divisibles por 4, excepto los centenarios que no sean divisibles por 400). Esto garantiza que el conteo de días sea exacto en todos los casos.</p>
    <h3>¿Para qué se usa la edad exacta en trámites?</h3>
    <p>Muchos trámites legales, médicos y administrativos requieren la edad exacta al día: jubilaciones, beneficios sociales por edad, seguros de salud, autorizaciones para menores, y verificaciones de mayoría de edad en distintas jurisdicciones.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Calculadora de edad"
        description="Calculá tu edad exacta en años, meses y días desde tu fecha de nacimiento."
        tool={<CalculadoraEdad />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }, { href: "/calculadoras/edad", label: "Calculadora de edad" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
            { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
          ]} />
        }
      />
    </>
  );
}
