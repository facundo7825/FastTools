import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import EliminarLineasDuplicadas from "./EliminarLineasDuplicadas";

export const metadata: Metadata = {
  title: "Eliminar líneas duplicadas online",
  description:
    "Quita líneas repetidas de una lista o bloque de texto manteniendo la primera aparición de cada una.",
  alternates: {
    canonical: "/texto/eliminar-lineas-duplicadas",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo eliminar líneas duplicadas",
      step: [
        { "@type": "HowToStep", text: "Pega una lista o texto con líneas repetidas." },
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
      texto donde se repiten líneas completas. Mantiene solo la primera aparición de cada
      línea y elimina el resto.
    </p>
    <h2>Cómo usarla</h2>
    <ol>
      <li>Pega un texto con líneas repetidas.</li>
      <li>Revisa el resultado sin duplicados.</li>
      <li>Copia la versión final si la quieres reutilizar.</li>
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
        title="Eliminar líneas duplicadas"
        description="Limpia listas repetidas conservando solo la primera aparición de cada línea."
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
                label: "Eliminar líneas duplicadas",
              },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-lineas", title: "Contador de líneas" },
              { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de línea" },
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
            ]}
          />
        }
      />
    </>
  );
}
