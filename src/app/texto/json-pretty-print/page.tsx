import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import JsonPrettyPrint from "./JsonPrettyPrint";

export const metadata: Metadata = {
  title: "JSON pretty print online",
  description:
    "Formatea JSON online al instante con indentacion legible. Ideal para desarrollo, pruebas, APIs y revision de datos.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como formatear JSON online",
      step: [
        { "@type": "HowToStep", text: "Pega el JSON en el area de entrada." },
        { "@type": "HowToStep", text: "Elige la cantidad de espacios para la indentacion." },
        { "@type": "HowToStep", text: "Copia el resultado formateado si lo necesitas." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Valida si el JSON tiene errores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Cuando el JSON no es valido, la herramienta muestra el error en pantalla.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo elegir la indentacion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes formatear con 2 o 4 espacios segun tu preferencia.",
          },
        },
        {
          "@type": "Question",
          name: "Sirve para respuestas de API?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Es util para revisar payloads, respuestas de API y archivos JSON de configuracion.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El pretty print de JSON convierte bloques compactos o dificiles de leer en una
      version ordenada y clara. Es una utilidad simple, pero muy practica para revisar
      respuestas de API, archivos de configuracion y datos de pruebas.
    </p>
    <h2>Como usar la herramienta</h2>
    <ol>
      <li>Pega el JSON completo en el area de entrada.</li>
      <li>Elige si quieres 2 o 4 espacios de indentacion.</li>
      <li>Copia el resultado ya formateado para seguir trabajando.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Valida si el JSON tiene errores?</h3>
    <p>
      Si. Si el contenido no es un JSON valido, veras el mensaje de error en pantalla.
    </p>
    <h3>Puedo elegir la indentacion?</h3>
    <p>
      Si. Puedes usar 2 o 4 espacios segun como quieras visualizar o compartir el
      resultado.
    </p>
    <h3>Sirve para respuestas de API?</h3>
    <p>
      Si. Es muy util para revisar payloads de APIs, datos de prueba o archivos de
      configuracion.
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
