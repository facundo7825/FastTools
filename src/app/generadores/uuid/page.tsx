import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorUUID from "./GeneradorUUID";

export const metadata: Metadata = {
  title: "Generador de UUID online gratis",
  description:
    "Genera UUID v4 al instante desde el navegador. Util para desarrollo, bases de datos, identificadores y pruebas.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como generar UUIDs",
      step: [
        { "@type": "HowToStep", text: "Elige cuantas IDs quieres generar." },
        { "@type": "HowToStep", text: "La herramienta crea los UUIDs automaticamente." },
        { "@type": "HowToStep", text: "Copia la lista completa si la necesitas." },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Esta herramienta genera UUID v4 directamente en el navegador. Es util para pruebas,
      desarrollo, identificadores temporales y cualquier caso donde necesites IDs unicas
      sin depender de una libreria externa.
    </p>
    <h2>Como usar el generador</h2>
    <ol>
      <li>Elige cuantas IDs quieres generar.</li>
      <li>La herramienta crea la lista automaticamente.</li>
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
        description="Genera UUID v4 desde el navegador y copialos en bloque."
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
              { href: "/generadores/password", title: "Generador de contrasenas" },
              { href: "/generadores/qr", title: "Generador de QR" },
              { href: "/generadores/lorem-ipsum", title: "Generador de Lorem Ipsum" },
            ]}
          />
        }
      />
    </>
  );
}
