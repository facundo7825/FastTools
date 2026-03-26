import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CapitalizarTexto from "./CapitalizarTexto";

export const metadata: Metadata = {
  title: "Capitalizar texto online - Primera letra en mayúscula - FastTools",
  description: "Convertí la primera letra de cada palabra a mayúscula (Title Case) al instante. Ideal para títulos, nombres propios y encabezados. Gratis y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo capitalizar texto (Title Case)",
      "step": [
        { "@type": "HowToStep", "text": "Pegá o escribí el texto que querés capitalizar." },
        { "@type": "HowToStep", "text": "El resultado aparece automáticamente con la primera letra de cada palabra en mayúscula." },
        { "@type": "HowToStep", "text": "Copiá el resultado con el botón Copiar." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué significa capitalizar texto?",
          "acceptedAnswer": { "@type": "Answer", "text": "Capitalizar significa poner en mayúscula la primera letra de cada palabra. Por ejemplo, 'hola mundo' se convierte en 'Hola Mundo'. Es diferente a poner TODO en mayúsculas: solo la primera letra de cada palabra cambia, el resto queda en minúscula." },
        },
        {
          "@type": "Question",
          "name": "¿Capitaliza también palabras con tilde como Ángel o Índice?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. La herramienta respeta el estándar Unicode y convierte correctamente vocales con tilde al inicio de palabra: ángel → Ángel, índice → Índice." },
        },
        {
          "@type": "Question",
          "name": "¿Cuándo se usa Title Case en español?",
          "acceptedAnswer": { "@type": "Answer", "text": "En español el Title Case se usa principalmente para títulos de obras (libros, películas, canciones), nombres propios de organizaciones y encabezados de presentaciones. En textos corridos del español, solo se capitaliza la primera palabra del título, a diferencia del inglés donde se capitaliza cada palabra." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Capitalizar un texto significa convertir la primera letra de cada palabra en mayúscula, un formato conocido como <em>Title Case</em> en inglés. Es el estándar para títulos de libros, películas, artículos periodísticos, nombres propios y encabezados de secciones. Hacerlo manualmente es tedioso; con esta herramienta se realiza al instante sin importar la longitud del texto.
    </p>
    <h2>¿Cómo capitalizar texto?</h2>
    <ol>
      <li>Pegá o escribí el texto que querés capitalizar.</li>
      <li>El resultado aparece automáticamente con la primera letra de cada palabra en mayúscula.</li>
      <li>Copiá el resultado con el botón <strong>Copiar</strong>.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué significa capitalizar texto?</h3>
    <p>Capitalizar significa poner en mayúscula la primera letra de cada palabra. Por ejemplo, "hola mundo" se convierte en "Hola Mundo". Es diferente a poner TODO en mayúsculas: solo la primera letra de cada palabra cambia, el resto queda en minúscula.</p>
    <h3>¿Capitaliza también palabras con tilde como "Ángel" o "Índice"?</h3>
    <p>Sí. La herramienta respeta el estándar Unicode y convierte correctamente vocales con tilde al inicio de palabra: "ángel" → "Ángel", "índice" → "Índice".</p>
    <h3>¿Cuándo se usa Title Case en español?</h3>
    <p>En español el Title Case se usa principalmente para títulos de obras (libros, películas, canciones), nombres propios de organizaciones y encabezados de presentaciones. En textos corridos del español, solo se capitaliza la primera palabra del título, a diferencia del inglés donde se capitaliza cada palabra.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Capitalizar texto"
        description="Convertí la primera letra de cada palabra a mayúscula en tiempo real."
        tool={<CapitalizarTexto />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/capitalizar-texto", label: "Capitalizar texto" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
            { href: "/texto/invertir-texto", title: "Invertir texto" },
            { href: "/texto/contador-palabras", title: "Contador de palabras" },
          ]} />
        }
      />
    </>
  );
}
