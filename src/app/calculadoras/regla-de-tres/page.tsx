import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ReglaDeTres from "./ReglaDeTres";

export const metadata: Metadata = {
  title: "Regla de tres online gratis - Calculadora de proporciones - FastTools",
  description: "Resolvé reglas de tres simples al instante. Ideal para escalar recetas, convertir unidades, calcular proporciones y resolver problemas matemáticos. Gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo resolver una regla de tres",
      "step": [
        { "@type": "HowToStep", "text": "Ingresá los tres valores conocidos de la proporción." },
        { "@type": "HowToStep", "text": "Indicá cuál es el valor desconocido (representado por X)." },
        { "@type": "HowToStep", "text": "La herramienta calcula el resultado al instante." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es una regla de tres simple?",
          "acceptedAnswer": { "@type": "Answer", "text": "Es una operación para encontrar un valor desconocido cuando existe una relación proporcional entre cuatro números. Si A corresponde a B, y C corresponde a X, entonces X = (B × C) ÷ A. Por ejemplo: si 5 kg cuestan $1.000, ¿cuánto cuestan 8 kg? X = (1.000 × 8) ÷ 5 = $1.600." },
        },
        {
          "@type": "Question",
          "name": "¿La herramienta sirve para proporciones inversas?",
          "acceptedAnswer": { "@type": "Answer", "text": "Esta herramienta está optimizada para reglas de tres directas, donde al aumentar un valor el otro también aumenta. Para proporciones inversas (donde al aumentar uno el otro disminuye, como velocidad y tiempo), la fórmula es diferente." },
        },
        {
          "@type": "Question",
          "name": "¿Para qué se usa la regla de tres en recetas de cocina?",
          "acceptedAnswer": { "@type": "Answer", "text": "Es muy útil para escalar recetas. Si una receta para 4 personas necesita 300g de harina, ¿cuánta necesitás para 7 personas? Con la regla de tres: (300 × 7) ÷ 4 = 525g. La calculadora hace este cálculo en segundos." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      La regla de tres es una operación matemática fundamental para resolver proporciones: si conocés tres de los cuatro valores de una proporción, podés calcular el cuarto. Sus aplicaciones son enormes en la vida cotidiana: escalar una receta de cocina para más personas, convertir unidades de medida, calcular el precio por unidad al comprar al por mayor, determinar el tiempo de viaje a distintas velocidades, o resolver problemas de mezclas y concentraciones.
    </p>
    <h2>¿Cómo usar la calculadora de regla de tres?</h2>
    <ol>
      <li>Ingresá los tres valores conocidos de la proporción.</li>
      <li>Indicá cuál es el valor desconocido (representado por X).</li>
      <li>La herramienta calcula el resultado al instante.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué es una regla de tres simple?</h3>
    <p>Es una operación para encontrar un valor desconocido cuando existe una relación proporcional entre cuatro números. Si A corresponde a B, y C corresponde a X, entonces X = (B × C) ÷ A. Por ejemplo: si 5 kg cuestan $1.000, ¿cuánto cuestan 8 kg? X = (1.000 × 8) ÷ 5 = $1.600.</p>
    <h3>¿Sirve para proporciones inversas?</h3>
    <p>Esta herramienta está optimizada para reglas de tres directas, donde al aumentar un valor el otro también aumenta (o ambos disminuyen). Para proporciones inversas (donde al aumentar uno el otro disminuye, como velocidad y tiempo), la fórmula es diferente.</p>
    <h3>¿Para qué se usa en recetas de cocina?</h3>
    <p>Es muy útil para escalar recetas. Si una receta para 4 personas necesita 300g de harina, ¿cuánta necesitás para 7 personas? Con la regla de tres: (300 × 7) ÷ 4 = 525g. La calculadora hace este cálculo en segundos.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Regla de tres"
        description="Resolvé una regla de tres simple de forma rápida y sencilla."
        tool={<ReglaDeTres />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }, { href: "/calculadoras/regla-de-tres", label: "Regla de tres" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
            { href: "/calculadoras/edad", title: "Calculadora de edad" },
          ]} />
        }
      />
    </>
  );
}
