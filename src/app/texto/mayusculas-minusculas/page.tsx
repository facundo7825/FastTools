import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import MayusculasMinusculas from "./MayusculasMinusculas";

export const metadata: Metadata = {
  title: "Convertir texto a mayúsculas o minúsculas online",
  description:
    "Convierte cualquier texto a mayúsculas o minúsculas al instante. Útil para limpiar datos, ajustar títulos y reformatear contenido.",
  alternates: {
    canonical: "/texto/mayusculas-minusculas",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo convertir texto a mayúsculas o minúsculas",
      step: [
        { "@type": "HowToStep", text: "Pega o escribe tu texto." },
        { "@type": "HowToStep", text: "Elige el modo de conversión." },
        { "@type": "HowToStep", text: "Copia el resultado cuando esté listo." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Convierte bien caracteres del español?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La herramienta se apoya en las funciones nativas del navegador para convertir letras.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué sirve este cambio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para uniformar texto, corregir datos importados y ajustar encabezados o bloques de contenido.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cambia números o signos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Solo se modifican las letras; el resto del contenido se conserva.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Cambiar entre mayúsculas y minúsculas es una tarea común cuando ordenas textos,
      títulos, tablas o contenido copiado desde distintas fuentes. Esta herramienta lo
      hace al instante y deja el resto del texto intacto.
    </p>
    <h2>Cómo convertir texto</h2>
    <ol>
      <li>Pega o escribe tu texto.</li>
      <li>Elige si quieres pasarlo a mayúsculas o minúsculas.</li>
      <li>Copia el resultado cuando quede como necesitas.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Convierte bien caracteres del español?</h3>
    <p>
      Sí. La herramienta usa las funciones nativas del navegador para transformar letras.
    </p>
    <h3>¿Para qué sirve este cambio?</h3>
    <p>
      Sirve para uniformar contenido, corregir datos importados o ajustar presentaciones
      y encabezados rápidamente.
    </p>
    <h3>¿Cambia números o signos?</h3>
    <p>
      No. Solo cambia las letras; los números, signos y espacios se mantienen igual.
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
        title="Mayúsculas / Minúsculas"
        description="Convierte tu texto a mayúsculas o minúsculas en tiempo real."
        tool={<MayusculasMinusculas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/mayusculas-minusculas", label: "Mayúsculas / Minúsculas" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
              { href: "/texto/invertir-texto", title: "Invertir texto" },
              { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
            ]}
          />
        }
      />
    </>
  );
}
