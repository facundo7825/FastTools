import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import InvertirTexto from "./InvertirTexto";

export const metadata: Metadata = {
  title: "Invertir texto online gratis - Texto al revés - FastTools",
  description: "Invertí cualquier texto al revés con un clic. Ideal para efectos creativos, acertijos, redes sociales y diseño. Soporta emojis y caracteres especiales.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo invertir texto al revés",
      "step": [
        { "@type": "HowToStep", "text": "Escribí o pegá el texto que querés invertir." },
        { "@type": "HowToStep", "text": "El texto al revés aparece automáticamente." },
        { "@type": "HowToStep", "text": "Copiá el resultado con el botón Copiar." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Para qué sirve invertir texto?",
          "acceptedAnswer": { "@type": "Answer", "text": "Invertir texto tiene usos creativos y prácticos: crear textos espejo para diseño gráfico, generar acertijos y juegos de palabras, hacer publicaciones originales en redes sociales, o simplemente divertirse. También se usa para verificar palíndromos, que son palabras o frases que se leen igual al derecho y al revés." },
        },
        {
          "@type": "Question",
          "name": "¿Funciona con emojis y caracteres especiales?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. La herramienta invierte el texto preservando emojis, tildes, ñ y cualquier carácter Unicode. Los emojis pueden aparecer en posiciones inesperadas al invertir, ya que son caracteres individuales dentro de la cadena de texto." },
        },
        {
          "@type": "Question",
          "name": "¿Cuál es un ejemplo de palíndromo en español?",
          "acceptedAnswer": { "@type": "Answer", "text": "Algunos palíndromos conocidos en español son 'anilina', 'reconocer', 'sometemos' y la frase 'Yo soy'. Podés verificar si una palabra es palíndromo pegándola aquí y comparando el resultado con el original." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Invertir texto significa escribir los caracteres en orden inverso, de modo que "Hola mundo" se convierte en "odnum aloH". Esta transformación se usa en diseño creativo, acertijos, juegos de palabras, publicaciones originales en redes sociales y como efecto decorativo en imágenes y tipografías. También es útil para generar texto espejo o para verificar si una palabra o frase es un palíndromo.
    </p>
    <h2>¿Cómo invertir texto?</h2>
    <ol>
      <li>Escribí o pegá el texto que querés invertir.</li>
      <li>El texto al revés aparece automáticamente.</li>
      <li>Copiá el resultado con el botón <strong>Copiar</strong>.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Para qué sirve invertir texto?</h3>
    <p>Invertir texto tiene usos creativos y prácticos: crear textos espejo para diseño gráfico, generar acertijos y juegos de palabras, hacer publicaciones originales en redes sociales, o simplemente divertirse. También se usa para verificar palíndromos, que son palabras o frases que se leen igual al derecho y al revés.</p>
    <h3>¿Funciona con emojis y caracteres especiales?</h3>
    <p>Sí. La herramienta invierte el texto preservando emojis, tildes, ñ y cualquier carácter Unicode. Los emojis pueden aparecer en posiciones inesperadas al invertir, ya que son caracteres individuales dentro de la cadena de texto.</p>
    <h3>¿Cuál es un ejemplo de palíndromo en español?</h3>
    <p>Algunos palíndromos conocidos en español son "anilina", "reconocer", "sometemos" y la frase "Yo soy". Podés verificar si una palabra es palíndromo pegándola aquí y comparando el resultado con el original.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Invertir texto"
        description="Invertí los caracteres de tu texto al revés en tiempo real."
        tool={<InvertirTexto />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/invertir-texto", label: "Invertir texto" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
            { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
            { href: "/texto/quitar-espacios", title: "Quitar espacios" },
          ]} />
        }
      />
    </>
  );
}
