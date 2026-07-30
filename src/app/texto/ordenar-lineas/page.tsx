import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import OrdenarLineas from "./OrdenarLineas";

export const metadata: Metadata = {
  title: "Ordenar líneas alfabéticamente online",
  description:
    "Ordena líneas alfabéticamente al instante. Ideal para listas, keywords, nombres, tags y contenido copiado.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo ordenar líneas alfabéticamente",
      step: [
        { "@type": "HowToStep", text: "Pega tu lista con una línea por elemento." },
        { "@type": "HowToStep", text: "Activa o desactiva las opciones que necesitas." },
        { "@type": "HowToStep", text: "Copia el resultado ordenado cuando quede como quieres." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Sirve para listas con palabras repetidas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La herramienta ordena las líneas tal como las recibe. Si luego quieres limpiar repeticiones, puedes usar la herramienta para eliminar líneas duplicadas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Respeta mayúsculas y minúsculas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes elegir si ignorar o no las mayúsculas y minúsculas al ordenar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo quitar líneas vacías?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Hay una opción para excluir líneas vacías antes de generar el resultado.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Ordenar líneas alfabéticamente ayuda a limpiar listados, revisar palabras clave,
      acomodar nombres y preparar datasets pequeños sin tener que llevar el texto a una
      hoja de cálculo.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega tu lista con una línea por elemento.</li>
      <li>Elige si quieres ignorar mayúsculas y quitar líneas vacías.</li>
      <li>Copia el resultado ordenado cuando quede como necesitas.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Sirve para listas con palabras repetidas?</h3>
    <p>
      Sí. La herramienta solo ordena. Si también quieres eliminar repeticiones, puedes
      combinarla con la utilidad para borrar líneas duplicadas.
    </p>
    <h3>¿Respeta mayúsculas y minúsculas?</h3>
    <p>
      Puedes decidirlo con una opción simple, según si buscas un orden más flexible o
      exacto.
    </p>
    <h3>¿Puedo quitar líneas vacías?</h3>
    <p>
      Sí. Puedes excluir líneas vacías antes de generar el resultado final.
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
        title="Ordenar líneas alfabéticamente"
        description="Ordena listas por línea en segundos y copia el resultado limpio."
        tool={<OrdenarLineas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/ordenar-lineas", label: "Ordenar líneas" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              {
                href: "/texto/eliminar-lineas-duplicadas",
                title: "Eliminar líneas duplicadas",
              },
              { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de línea" },
              { href: "/texto/contador-lineas", title: "Contador de líneas" },
            ]}
          />
        }
      />
    </>
  );
}
