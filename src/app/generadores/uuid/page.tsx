import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorUUID from "./GeneradorUUID";

export const metadata: Metadata = {
  title: "Generador de UUID online gratis",
  description:
    "Genera UUID v4 al instante desde el navegador. Útil para desarrollo, bases de datos, identificadores y pruebas.",
  alternates: {
    canonical: "/generadores/uuid",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo generar UUIDs",
      step: [
        { "@type": "HowToStep", text: "Elige cuántas IDs quieres generar." },
        { "@type": "HowToStep", text: "La herramienta crea los UUIDs automáticamente." },
        { "@type": "HowToStep", text: "Copia la lista completa si la necesitas." },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Esta herramienta genera UUID v4 directamente en el navegador. Es útil para pruebas,
      desarrollo, identificadores temporales y cualquier caso donde necesites IDs únicas
      sin depender de una librería externa.
    </p>
    <h2>Cómo usar el generador</h2>
    <ol>
      <li>Elige cuántas IDs quieres generar.</li>
      <li>La herramienta crea la lista automáticamente.</li>
      <li>Copia todos los UUIDs si quieres llevarlos a otro lugar.</li>
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
        title="Generador de UUID"
        description="Genera UUID v4 desde el navegador y cópialos en bloque."
        tool={<GeneradorUUID />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/generadores", label: "Generadores" },
              { href: "/generadores/uuid", label: "Generador de UUID" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/generadores/password", title: "Generador de contraseñas" },
              { href: "/generadores/qr", title: "Generador de QR" },
              { href: "/generadores/lorem-ipsum", title: "Generador de Lorem Ipsum" },
            ]}
          />
        }
      />
    </>
  );
}
