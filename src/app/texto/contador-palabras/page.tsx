import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorPalabras from "./ContadorPalabras";

export const metadata: Metadata = {
  title: "Contador de palabras online gratis - FastTools",
  description: "Contá palabras de cualquier texto en tiempo real. Útil para ensayos, artículos, contenido SEO y trabajos académicos. Gratis y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo contar palabras de un texto",
      "step": [
        { "@type": "HowToStep", "text": "Pegá o escribí tu texto en el campo de entrada." },
        { "@type": "HowToStep", "text": "El número de palabras se actualiza automáticamente." },
        { "@type": "HowToStep", "text": "Usá Copiar para copiar el texto o Limpiar para vaciarlo." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cómo se cuentan las palabras con guiones?",
          "acceptedAnswer": { "@type": "Answer", "text": "Las palabras unidas por guión (por ejemplo, 'bien-estar') se cuentan como una sola palabra. Las palabras separadas por guión largo o con espacio se cuentan individualmente." },
        },
        {
          "@type": "Question",
          "name": "¿Cuántas palabras tiene una página de texto?",
          "acceptedAnswer": { "@type": "Answer", "text": "Una página A4 con fuente Times New Roman 12pt y interlineado doble contiene aproximadamente 250 palabras. Con interlineado simple puede llegar a 500 palabras por página." },
        },
        {
          "@type": "Question",
          "name": "¿Cuántas palabras debe tener un artículo SEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Para posicionar en Google se recomienda entre 1.200 y 2.500 palabras para artículos informativos. Las páginas más cortas pueden rankear con buena estructura, pero el contenido extenso suele captar más keywords y obtener más backlinks." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El contador de palabras es una herramienta indispensable para escritores, estudiantes y creadores de contenido. Los trabajos universitarios suelen exigir entre 1.000 y 5.000 palabras; los artículos de blog mejor posicionados en Google rondan las 1.500 a 2.500 palabras; y los guiones cinematográficos se miden en páginas de 250 palabras cada una. Saber el conteo exacto en tiempo real permite ajustar el texto sin sorpresas al momento de entregarlo.
    </p>
    <h2>¿Cómo usar el contador de palabras?</h2>
    <ol>
      <li>Pegá o escribí tu texto en el campo de entrada.</li>
      <li>El número de palabras se actualiza automáticamente.</li>
      <li>Usá <strong>Copiar</strong> para copiar el texto o <strong>Limpiar</strong> para vaciarlo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Cómo se cuentan las palabras con guiones?</h3>
    <p>Las palabras unidas por guión (por ejemplo, "bien-estar") se cuentan como una sola palabra. Las palabras separadas por guión largo o con espacio se cuentan individualmente.</p>
    <h3>¿Cuántas palabras tiene una página de texto?</h3>
    <p>Una página A4 con fuente Times New Roman 12pt y interlineado doble contiene aproximadamente 250 palabras. Con interlineado simple puede llegar a 500 palabras por página.</p>
    <h3>¿Cuántas palabras debe tener un artículo SEO?</h3>
    <p>Para posicionar en Google se recomienda entre 1.200 y 2.500 palabras para artículos informativos. Las páginas más cortas pueden rankear con buena estructura, pero el contenido extenso suele captar más keywords y obtener más backlinks.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Contador de palabras"
        description="Cuenta las palabras de tu texto en tiempo real."
        tool={<ContadorPalabras />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/contador-palabras", label: "Contador de palabras" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
            { href: "/texto/quitar-espacios", title: "Quitar espacios" },
            { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
          ]} />
        }
      />
    </>
  );
}
