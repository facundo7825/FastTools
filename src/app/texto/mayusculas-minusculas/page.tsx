import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import MayusculasMinusculas from "./MayusculasMinusculas";

export const metadata: Metadata = {
  title: "Convertir texto a mayusculas o minusculas online",
  description:
    "Convierte cualquier texto a mayusculas o minusculas al instante. Util para limpiar datos, ajustar titulos y reformatear contenido.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como convertir texto a mayusculas o minusculas",
      step: [
        { "@type": "HowToStep", text: "Pega o escribe tu texto." },
        { "@type": "HowToStep", text: "Elige el modo de conversion." },
        { "@type": "HowToStep", text: "Copia el resultado cuando este listo." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Convierte bien caracteres del espanol?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La herramienta se apoya en las funciones nativas del navegador para convertir letras.",
          },
        },
        {
          "@type": "Question",
          name: "Para que sirve este cambio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para uniformar texto, corregir datos importados y ajustar encabezados o bloques de contenido.",
          },
        },
        {
          "@type": "Question",
          name: "Cambia numeros o signos?",
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
      Cambiar entre mayusculas y minusculas es una tarea comun cuando ordenas textos,
      titulos, tablas o contenido copiado desde distintas fuentes. Esta herramienta lo
      hace al instante y deja el resto del texto intacto.
    </p>
    <h2>Como convertir texto</h2>
    <ol>
      <li>Pega o escribe tu texto.</li>
      <li>Elige si quieres pasarlo a mayusculas o minusculas.</li>
      <li>Copia el resultado cuando quede como necesitas.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Convierte bien caracteres del espanol?</h3>
    <p>
      Si. La herramienta usa las funciones nativas del navegador para transformar letras.
    </p>
    <h3>Para que sirve este cambio?</h3>
    <p>
      Sirve para uniformar contenido, corregir datos importados o ajustar presentaciones
      y encabezados rapidamente.
    </p>
    <h3>Cambia numeros o signos?</h3>
    <p>
      No. Solo cambia las letras; los numeros, signos y espacios se mantienen igual.
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
        title="Mayusculas / Minusculas"
        description="Convierte tu texto a mayusculas o minusculas en tiempo real."
        tool={<MayusculasMinusculas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/mayusculas-minusculas", label: "Mayusculas / Minusculas" },
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
