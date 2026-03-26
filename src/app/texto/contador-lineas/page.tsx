import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorLineas from "./ContadorLineas";

export const metadata: Metadata = {
  title: "Contador de líneas online gratis - FastTools",
  description: "Contá las líneas de cualquier texto al instante. Muestra líneas totales y líneas no vacías. Ideal para código, CSV, listas y datos. Gratis y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo contar líneas de un texto",
      "step": [
        { "@type": "HowToStep", "text": "Pegá o escribí tu texto en el campo de entrada." },
        { "@type": "HowToStep", "text": "El conteo de líneas totales y no vacías se actualiza automáticamente." },
        { "@type": "HowToStep", "text": "Usá el botón Copiar para copiar el texto o Limpiar para empezar de nuevo." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Para qué sirve contar líneas de texto?",
          "acceptedAnswer": { "@type": "Answer", "text": "Contar líneas es útil para verificar archivos CSV (donde cada línea es un registro), revisar código fuente, contar ítems en listas, o verificar el formato de datos antes de importarlos a una base de datos o planilla." },
        },
        {
          "@type": "Question",
          "name": "¿Qué diferencia hay entre líneas totales y líneas no vacías?",
          "acceptedAnswer": { "@type": "Answer", "text": "Las líneas totales incluyen todas las líneas del texto, incluyendo las líneas en blanco. Las líneas no vacías excluyen aquellas que solo contienen espacios o están completamente vacías, dando un conteo más preciso del contenido real." },
        },
        {
          "@type": "Question",
          "name": "¿Funciona con código fuente de programación?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. Podés pegar código de cualquier lenguaje de programación y obtendrás el conteo exacto de líneas totales y no vacías, lo que es útil para estimar la complejidad o el tamaño de un archivo de código." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El contador de líneas es una herramienta esencial para trabajar con datos estructurados. En archivos CSV cada línea representa un registro, en código fuente las líneas miden la extensión de un archivo, y en listas de datos el número de líneas indica la cantidad de ítems. La herramienta muestra tanto las líneas totales (incluyendo vacías) como las líneas con contenido, para que puedas tener el dato preciso según tu necesidad.
    </p>
    <h2>¿Cómo usar el contador de líneas?</h2>
    <ol>
      <li>Pegá o escribí tu texto en el campo de entrada.</li>
      <li>El conteo de líneas totales y no vacías se actualiza automáticamente.</li>
      <li>Usá el botón <strong>Copiar</strong> para copiar el texto o <strong>Limpiar</strong> para empezar de nuevo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Para qué sirve contar líneas de texto?</h3>
    <p>Contar líneas es útil para verificar archivos CSV (donde cada línea es un registro), revisar código fuente, contar ítems en listas, o verificar el formato de datos antes de importarlos a una base de datos o planilla.</p>
    <h3>¿Qué diferencia hay entre líneas totales y líneas no vacías?</h3>
    <p>Las líneas totales incluyen todas las líneas del texto, incluyendo las líneas en blanco. Las líneas no vacías excluyen aquellas que solo contienen espacios o están completamente vacías, dando un conteo más preciso del contenido real.</p>
    <h3>¿Funciona con código fuente de programación?</h3>
    <p>Sí. Podés pegar código de cualquier lenguaje de programación y obtendrás el conteo exacto de líneas totales y no vacías, lo que es útil para estimar la complejidad o el tamaño de un archivo de código.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Contador de líneas"
        description="Contá las líneas de tu texto al instante. Muestra totales y líneas no vacías."
        tool={<ContadorLineas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/contador-lineas", label: "Contador de líneas" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
            { href: "/texto/contador-palabras", title: "Contador de palabras" },
            { href: "/texto/quitar-espacios", title: "Quitar espacios" },
          ]} />
        }
      />
    </>
  );
}
