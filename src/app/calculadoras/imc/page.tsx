import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraIMC from "./CalculadoraIMC";

export const metadata: Metadata = {
  title: "Calculadora de IMC online gratis - Índice de Masa Corporal - FastTools",
  description: "Calculá tu Índice de Masa Corporal (IMC) al instante. Ingresá peso y altura y obtené tu categoría: bajo peso, normal, sobrepeso u obesidad. Gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo calcular el IMC (Índice de Masa Corporal)",
      "step": [
        { "@type": "HowToStep", "text": "Ingresá tu peso en kilogramos." },
        { "@type": "HowToStep", "text": "Ingresá tu altura en centímetros." },
        { "@type": "HowToStep", "text": "Tu IMC y categoría aparecen automáticamente." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cómo se calcula el IMC?",
          "acceptedAnswer": { "@type": "Answer", "text": "El IMC se calcula dividiendo el peso en kilogramos entre el cuadrado de la altura en metros. Fórmula: IMC = peso (kg) ÷ altura² (m). Por ejemplo, una persona de 70 kg y 1.75 m tiene un IMC de 70 ÷ (1.75 × 1.75) = 22.9." },
        },
        {
          "@type": "Question",
          "name": "¿Qué IMC se considera normal?",
          "acceptedAnswer": { "@type": "Answer", "text": "Según la Organización Mundial de la Salud (OMS), un IMC entre 18.5 y 24.9 se considera peso normal. Por debajo de 18.5 es bajo peso, entre 25 y 29.9 es sobrepeso, y a partir de 30 se consideran distintos grados de obesidad." },
        },
        {
          "@type": "Question",
          "name": "¿El IMC es un indicador preciso de salud?",
          "acceptedAnswer": { "@type": "Answer", "text": "El IMC es una referencia general, no un diagnóstico médico. No distingue entre masa muscular y grasa corporal, por lo que puede clasificar incorrectamente a personas muy musculosas. Para una evaluación completa, siempre consultá con un profesional de la salud." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El Índice de Masa Corporal (IMC) es la medida más utilizada mundialmente para evaluar si el peso de una persona es adecuado para su altura. Fue desarrollado por el estadístico belga Adolphe Quetelet en el siglo XIX y adoptado por la Organización Mundial de la Salud como indicador de referencia. Es una herramienta de screening, no de diagnóstico, pero permite identificar rápidamente si alguien podría tener riesgo de problemas de salud relacionados con el peso.
    </p>
    <h2>¿Cómo calcular el IMC?</h2>
    <ol>
      <li>Ingresá tu peso en kilogramos.</li>
      <li>Ingresá tu altura en centímetros.</li>
      <li>Tu IMC y categoría aparecen automáticamente.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Cómo se calcula el IMC?</h3>
    <p>El IMC se calcula dividiendo el peso en kilogramos entre el cuadrado de la altura en metros. Fórmula: IMC = peso (kg) ÷ altura² (m). Por ejemplo, una persona de 70 kg y 1.75 m tiene un IMC de 70 ÷ (1.75 × 1.75) = 22.9.</p>
    <h3>¿Qué IMC se considera normal?</h3>
    <p>Según la Organización Mundial de la Salud (OMS), un IMC entre 18.5 y 24.9 se considera peso normal. Por debajo de 18.5 es bajo peso, entre 25 y 29.9 es sobrepeso, y a partir de 30 se consideran distintos grados de obesidad.</p>
    <h3>¿El IMC es un indicador preciso de salud?</h3>
    <p>El IMC es una referencia general, no un diagnóstico médico. No distingue entre masa muscular y grasa corporal, por lo que puede clasificar incorrectamente a personas muy musculosas. Para una evaluación completa, siempre consultá con un profesional de la salud.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Calculadora de IMC"
        description="Calculá tu Índice de Masa Corporal ingresando peso y altura."
        tool={<CalculadoraIMC />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }, { href: "/calculadoras/imc", label: "Calculadora de IMC" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/calculadoras/edad", title: "Calculadora de edad" },
            { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
            { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
          ]} />
        }
      />
    </>
  );
}
