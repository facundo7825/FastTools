import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import OrdenarLineas from "./OrdenarLineas";

export const metadata: Metadata = {
  title: "Ordenar lineas alfabeticamente online",
  description:
    "Ordena lineas alfabeticamente al instante. Ideal para listas, keywords, nombres, tags y contenido copiado.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como ordenar lineas alfabeticamente",
      step: [
        { "@type": "HowToStep", text: "Pega tu lista con una linea por elemento." },
        { "@type": "HowToStep", text: "Activa o desactiva las opciones que necesitas." },
        { "@type": "HowToStep", text: "Copia el resultado ordenado cuando quede como quieres." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Sirve para listas con palabras repetidas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La herramienta ordena las lineas tal como las recibe. Si luego quieres limpiar repeticiones, puedes usar la herramienta para eliminar lineas duplicadas.",
          },
        },
        {
          "@type": "Question",
          name: "Respeta mayusculas y minusculas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes elegir si ignorar o no las mayusculas y minusculas al ordenar.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo quitar lineas vacias?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Hay una opcion para excluir lineas vacias antes de generar el resultado.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Ordenar lineas alfabeticamente ayuda a limpiar listados, revisar palabras clave,
      acomodar nombres y preparar datasets pequenos sin tener que llevar el texto a una
      hoja de calculo.
    </p>
    <h2>Como usar la herramienta</h2>
    <ol>
      <li>Pega tu lista con una linea por elemento.</li>
      <li>Elige si quieres ignorar mayusculas y quitar lineas vacias.</li>
      <li>Copia el resultado ordenado cuando quede como necesitas.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Sirve para listas con palabras repetidas?</h3>
    <p>
      Si. La herramienta solo ordena. Si tambien quieres eliminar repeticiones, puedes
      combinarla con la utilidad para borrar lineas duplicadas.
    </p>
    <h3>Respeta mayusculas y minusculas?</h3>
    <p>
      Puedes decidirlo con una opcion simple, segun si buscas un orden mas flexible o
      exacto.
    </p>
    <h3>Puedo quitar lineas vacias?</h3>
    <p>
      Si. Puedes excluir lineas vacias antes de generar el resultado final.
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
        title="Ordenar lineas alfabeticamente"
        description="Ordena listas por linea en segundos y copia el resultado limpio."
        tool={<OrdenarLineas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/ordenar-lineas", label: "Ordenar lineas" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              {
                href: "/texto/eliminar-lineas-duplicadas",
                title: "Eliminar lineas duplicadas",
              },
              { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de linea" },
              { href: "/texto/contador-lineas", title: "Contador de lineas" },
            ]}
          />
        }
      />
    </>
  );
}
