import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import JsonPrettyPrint from "./JsonPrettyPrint";

export const metadata: Metadata = {
  title: "JSON pretty print online",
  description:
    "Formatea JSON online al instante con indentación legible. Ideal para desarrollo, pruebas, APIs y revisión de datos.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo formatear JSON online",
      step: [
        { "@type": "HowToStep", text: "Pega el JSON en el área de entrada." },
        { "@type": "HowToStep", text: "Elige la cantidad de espacios para la indentación." },
        { "@type": "HowToStep", text: "Copia el resultado formateado si lo necesitas." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Valida si el JSON tiene errores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cuando el JSON no es válido, la herramienta muestra el error en pantalla.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo elegir la indentación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Puedes formatear con 2 o 4 espacios según tu preferencia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Sirve para respuestas de API?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Es útil para revisar payloads, respuestas de API y archivos JSON de configuración.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El pretty print de JSON convierte bloques compactos o difíciles de leer en una
      versión ordenada y clara. Es una utilidad simple, pero muy práctica para revisar
      respuestas de API, archivos de configuración y datos de pruebas.
    </p>
    <h2>Cómo usar la herramienta</h2>
    <ol>
      <li>Pega el JSON completo en el área de entrada.</li>
      <li>Elige si quieres 2 o 4 espacios de indentación.</li>
      <li>Copia el resultado ya formateado para seguir trabajando.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Valida si el JSON tiene errores?</h3>
    <p>
      Sí. Si el contenido no es un JSON válido, verás el mensaje de error en pantalla.
    </p>
    <h3>¿Puedo elegir la indentación?</h3>
    <p>
      Sí. Puedes usar 2 o 4 espacios según cómo quieras visualizar o compartir el
      resultado.
    </p>
    <h3>¿Sirve para respuestas de API?</h3>
    <p>
      Sí. Es muy útil para revisar payloads de APIs, datos de prueba o archivos de
      configuración.
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
        title="JSON pretty print"
        description="Formatea JSON online y valida si la estructura es correcta."
        tool={<JsonPrettyPrint />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/json-pretty-print", label: "JSON pretty print" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/extraer-texto-html", title: "Extractor de texto de HTML" },
              { href: "/texto/minificar-texto", title: "Minificador de texto" },
              { href: "/generadores/uuid", title: "Generador de UUID" },
            ]}
          />
        }
      />
    </>
  );
}
