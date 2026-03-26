import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ConvertidorTemperatura from "./ConvertidorTemperatura";

export const metadata: Metadata = {
  title: "Convertir temperatura online gratis - Celsius, Fahrenheit, Kelvin - FastTools",
  description: "Convertí temperaturas entre Celsius, Fahrenheit y Kelvin al instante. Escribí en cualquier campo y los demás se actualizan solos. Gratis y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo convertir temperatura entre Celsius, Fahrenheit y Kelvin",
      "step": [
        { "@type": "HowToStep", "text": "Escribí la temperatura en cualquiera de los tres campos: Celsius, Fahrenheit o Kelvin." },
        { "@type": "HowToStep", "text": "Los otros dos campos se actualizan automáticamente con los valores equivalentes." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cómo se convierte Celsius a Fahrenheit?",
          "acceptedAnswer": { "@type": "Answer", "text": "La fórmula es: °F = (°C × 9/5) + 32. Por ejemplo, 100°C equivale a (100 × 9/5) + 32 = 212°F, que es el punto de ebullición del agua. Para convertir en sentido inverso: °C = (°F - 32) × 5/9." },
        },
        {
          "@type": "Question",
          "name": "¿Para qué se usa la escala Kelvin?",
          "acceptedAnswer": { "@type": "Answer", "text": "La escala Kelvin es la escala de temperatura del Sistema Internacional de Unidades. Se usa principalmente en física y química porque comienza en el cero absoluto (−273.15°C), la temperatura más baja posible teóricamente. No tiene grados negativos. La conversión es: K = °C + 273.15." },
        },
        {
          "@type": "Question",
          "name": "¿Cuántos grados Fahrenheit es el cuerpo humano?",
          "acceptedAnswer": { "@type": "Answer", "text": "La temperatura corporal normal es de aproximadamente 37°C, que equivale a 98.6°F o 310.15 K. Se considera fiebre cuando la temperatura supera los 38°C (100.4°F)." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Convertir temperaturas entre Celsius, Fahrenheit y Kelvin es una necesidad frecuente en cocina (recetas en grados Fahrenheit), ciencia (escala Kelvin en física), meteorología (pronósticos en distintos países) y uso cotidiano. Esta herramienta convierte en las tres direcciones simultáneamente: al escribir en cualquier campo, los otros dos se actualizan al instante.
    </p>
    <h2>¿Cómo convertir temperatura?</h2>
    <ol>
      <li>Escribí la temperatura en cualquiera de los tres campos: Celsius, Fahrenheit o Kelvin.</li>
      <li>Los otros dos campos se actualizan automáticamente con los valores equivalentes.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Cómo se convierte Celsius a Fahrenheit?</h3>
    <p>La fórmula es: °F = (°C × 9/5) + 32. Por ejemplo, 100°C equivale a (100 × 9/5) + 32 = 212°F, que es el punto de ebullición del agua. Para convertir en sentido inverso: °C = (°F − 32) × 5/9.</p>
    <h3>¿Para qué se usa la escala Kelvin?</h3>
    <p>La escala Kelvin es la escala de temperatura del Sistema Internacional de Unidades. Se usa principalmente en física y química porque comienza en el cero absoluto (−273.15°C), la temperatura más baja posible teóricamente. No tiene grados negativos. La conversión es: K = °C + 273.15.</p>
    <h3>¿Cuántos grados Fahrenheit es el cuerpo humano?</h3>
    <p>La temperatura corporal normal es de aproximadamente 37°C, que equivale a 98.6°F o 310.15 K. Se considera fiebre cuando la temperatura supera los 38°C (100.4°F).</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Conversor de temperatura"
        description="Convertí entre Celsius, Fahrenheit y Kelvin al instante."
        tool={<ConvertidorTemperatura />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }, { href: "/calculadoras/temperatura", label: "Conversor de temperatura" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/calculadoras/imc", title: "Calculadora de IMC" },
            { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
            { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
          ]} />
        }
      />
    </>
  );
}
