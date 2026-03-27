import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ConvertidorTemperatura from "./ConvertidorTemperatura";

export const metadata: Metadata = {
  title: "Convertir temperatura online gratis",
  description:
    "Convierte temperaturas entre Celsius, Fahrenheit y Kelvin al instante escribiendo en cualquiera de los campos.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como convertir temperatura",
      step: [
        { "@type": "HowToStep", text: "Escribe una temperatura en cualquiera de los campos." },
        { "@type": "HowToStep", text: "Los otros valores se actualizan automaticamente." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Que escalas incluye?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Incluye Celsius, Fahrenheit y Kelvin.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo escribir en cualquier campo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes ingresar un valor en cualquiera de las tres escalas.",
          },
        },
        {
          "@type": "Question",
          name: "Sirve para uso cotidiano y tecnico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puede servir tanto para cocina y clima como para referencias generales de estudio o trabajo.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Convertir temperatura entre Celsius, Fahrenheit y Kelvin es una tarea comun en
      cocina, estudio, trabajo tecnico y consultas cotidianas. Esta herramienta te deja
      escribir en cualquiera de las tres escalas y ver las equivalencias al instante.
    </p>
    <h2>Como convertir temperatura</h2>
    <ol>
      <li>Escribe una temperatura en cualquiera de los campos.</li>
      <li>Los otros dos valores se actualizan automaticamente.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Que escalas incluye?</h3>
    <p>
      Incluye Celsius, Fahrenheit y Kelvin.
    </p>
    <h3>Puedo escribir en cualquier campo?</h3>
    <p>
      Si. Puedes ingresar un valor en cualquiera de las tres escalas.
    </p>
    <h3>Sirve para uso cotidiano y tecnico?</h3>
    <p>
      Si. Puede servir tanto para cocina y clima como para referencias generales de
      estudio o trabajo.
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
        title="Conversor de temperatura"
        description="Convierte entre Celsius, Fahrenheit y Kelvin al instante."
        tool={<ConvertidorTemperatura />}
        content={content}
        categoryHref="/calculadoras"
        categoryLabel="Calculadoras"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/calculadoras", label: "Calculadoras" },
              { href: "/calculadoras/temperatura", label: "Conversor de temperatura" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/calculadoras/imc", title: "Calculadora de IMC" },
              { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
              { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
            ]}
          />
        }
      />
    </>
  );
}
