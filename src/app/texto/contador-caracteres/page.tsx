import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorCaracteres from "./ContadorCaracteres";

export const metadata: Metadata = {
  title: "Contador de caracteres online gratis - FastTools",
  description: "Cuenta caracteres de tu texto en tiempo real. Ideal para Twitter (280), Instagram (2200), meta descripciones (160) y SMS. Sin registro, sin límites.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo contar caracteres de un texto",
      "step": [
        { "@type": "HowToStep", "text": "Pegá o escribí tu texto en el campo de entrada." },
        { "@type": "HowToStep", "text": "El conteo de caracteres se actualiza automáticamente mientras escribís." },
        { "@type": "HowToStep", "text": "Usá el botón Copiar para copiar el texto o Limpiar para empezar de nuevo." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Los espacios cuentan como caracteres?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. Cada espacio, salto de línea y signo de puntuación cuenta como un carácter. Esto es importante para plataformas como Twitter, donde los espacios suman al total." },
        },
        {
          "@type": "Question",
          "name": "¿Cuántos caracteres permite Twitter / X?",
          "acceptedAnswer": { "@type": "Answer", "text": "Twitter (ahora X) permite hasta 280 caracteres por tweet. Los URLs acortados por la plataforma ocupan 23 caracteres sin importar su longitud original." },
        },
        {
          "@type": "Question",
          "name": "¿Cuál es el límite de caracteres para una meta descripción SEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Google muestra entre 150 y 160 caracteres en los resultados de búsqueda. Se recomienda mantener la descripción entre 120 y 158 caracteres para que no se corte en ningún dispositivo." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El contador de caracteres es una herramienta esencial para quienes escriben en redes sociales, redactan contenido SEO o envían mensajes con límite. Cada plataforma tiene sus propios límites: Twitter permite hasta 280 caracteres, una meta descripción no debe superar los 160, un SMS estándar tiene 160 caracteres y los títulos SEO idealmente no pasan de 60. Conocer el conteo exacto en tiempo real evita tener que cortar o reescribir el texto al final.
    </p>
    <h2>¿Cómo usar el contador de caracteres?</h2>
    <ol>
      <li>Pegá o escribí tu texto en el campo de entrada.</li>
      <li>El conteo se actualiza automáticamente mientras escribís.</li>
      <li>Usá el botón <strong>Copiar</strong> para copiar el texto al portapapeles, o <strong>Limpiar</strong> para empezar de nuevo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Los espacios cuentan como caracteres?</h3>
    <p>Sí. Cada espacio, salto de línea y signo de puntuación cuenta como un carácter. Esto es importante para plataformas como Twitter, donde los espacios suman al total.</p>
    <h3>¿Cuántos caracteres permite Twitter / X?</h3>
    <p>Twitter (ahora X) permite hasta 280 caracteres por tweet para la mayoría de las cuentas. Los URLs acortados por la plataforma ocupan 23 caracteres sin importar su longitud original.</p>
    <h3>¿Cuál es el límite de caracteres para una meta descripción SEO?</h3>
    <p>Google muestra entre 150 y 160 caracteres en los resultados de búsqueda. Se recomienda mantener la descripción entre 120 y 158 caracteres para que no se corte en ningún dispositivo.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Contador de caracteres"
        description="Contá los caracteres de tu texto en tiempo real."
        tool={<ContadorCaracteres />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/contador-caracteres", label: "Contador de caracteres" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/texto/contador-palabras", title: "Contador de palabras" },
            { href: "/texto/quitar-espacios", title: "Quitar espacios" },
            { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
          ]} />
        }
      />
    </>
  );
}
