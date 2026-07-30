import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import QuitarSaltosLinea from "./QuitarSaltosLinea";

export const metadata: Metadata = {
  title: "Quitar saltos de línea online",
  description:
    "Convierte texto con varias líneas en una sola línea. Ideal para formularios, CSV simples y texto copiado.",
  alternates: {
    canonical: "/texto/quitar-saltos-linea",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo quitar saltos de línea",
      step: [
        { "@type": "HowToStep", text: "Pega un texto con múltiples líneas." },
        { "@type": "HowToStep", text: "La herramienta lo convierte en una sola línea." },
        { "@type": "HowToStep", text: "Copia el resultado cuando lo necesites." },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Quitar saltos de línea sirve para convertir texto multilínea en un bloque continuo.
      Es útil para formularios, importaciones simples, prompts y contenido que debe ir en
      una sola línea.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega un texto con varias líneas.</li>
      <li>La herramienta lo pasa automáticamente a una sola línea.</li>
      <li>Copia el resultado final cuando te sirva.</li>
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
        title="Quitar saltos de línea"
        description="Convierte texto con varias líneas en una sola línea continua."
        tool={<QuitarSaltosLinea />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/quitar-saltos-linea", label: "Quitar saltos de línea" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
              { href: "/texto/contador-lineas", title: "Contador de líneas" },
              { href: "/texto/eliminar-lineas-duplicadas", title: "Eliminar líneas duplicadas" },
            ]}
          />
        }
      />
    </>
  );
}
