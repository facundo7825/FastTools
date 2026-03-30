import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import EliminarLineasDuplicadas from "./EliminarLineasDuplicadas";

export const metadata: Metadata = {
  title: "Eliminar lineas duplicadas online",
  description:
    "Quita lineas repetidas de una lista o bloque de texto manteniendo la primera aparicion de cada una.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como eliminar lineas duplicadas",
      step: [
        { "@type": "HowToStep", text: "Pega una lista o texto con lineas repetidas." },
        { "@type": "HowToStep", text: "La herramienta elimina las repeticiones." },
        { "@type": "HowToStep", text: "Copia el resultado limpio cuando lo necesites." },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Esta herramienta sirve para limpiar listas, tags, keywords, registros o bloques de
      texto donde se repiten lineas completas. Mantiene solo la primera aparicion de cada
      linea y elimina el resto.
    </p>
    <h2>Como usarla</h2>
    <ol>
      <li>Pega un texto con lineas repetidas.</li>
      <li>Revisa el resultado sin duplicados.</li>
      <li>Copia la version final si la quieres reutilizar.</li>
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
        title="Eliminar lineas duplicadas"
        description="Limpia listas repetidas conservando solo la primera aparicion de cada linea."
        tool={<EliminarLineasDuplicadas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              {
                href: "/texto/eliminar-lineas-duplicadas",
                label: "Eliminar lineas duplicadas",
              },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-lineas", title: "Contador de lineas" },
              { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de linea" },
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
            ]}
          />
        }
      />
    </>
  );
}
