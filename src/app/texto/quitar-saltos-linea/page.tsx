import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import QuitarSaltosLinea from "./QuitarSaltosLinea";

export const metadata: Metadata = {
  title: "Quitar saltos de linea online",
  description:
    "Convierte texto con varias lineas en una sola linea. Ideal para formularios, CSV simples y texto copiado.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como quitar saltos de linea",
      step: [
        { "@type": "HowToStep", text: "Pega un texto con multiples lineas." },
        { "@type": "HowToStep", text: "La herramienta lo convierte en una sola linea." },
        { "@type": "HowToStep", text: "Copia el resultado cuando lo necesites." },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Quitar saltos de linea sirve para convertir texto multilínea en un bloque continuo.
      Es util para formularios, importaciones simples, prompts y contenido que debe ir en
      una sola linea.
    </p>
    <h2>Como usar la herramienta</h2>
    <ol>
      <li>Pega un texto con varias lineas.</li>
      <li>La herramienta lo pasa automaticamente a una sola linea.</li>
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
        title="Quitar saltos de linea"
        description="Convierte texto con varias lineas en una sola linea continua."
        tool={<QuitarSaltosLinea />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/quitar-saltos-linea", label: "Quitar saltos de linea" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
              { href: "/texto/contador-lineas", title: "Contador de lineas" },
              { href: "/texto/eliminar-lineas-duplicadas", title: "Eliminar lineas duplicadas" },
            ]}
          />
        }
      />
    </>
  );
}
