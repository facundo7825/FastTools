import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorCaracteres from "./ContadorCaracteres";

export const metadata: Metadata = {
  title: "Contador de caracteres online gratis",
  description:
    "Cuenta caracteres de tu texto en tiempo real. Útil para redes sociales, meta descripciones, mensajes y textos con límite.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo contar caracteres de un texto",
      step: [
        { "@type": "HowToStep", text: "Pega o escribe tu texto en el campo de entrada." },
        { "@type": "HowToStep", text: "El conteo de caracteres se actualiza automáticamente." },
        { "@type": "HowToStep", text: "Copia o limpia el texto según lo necesites." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Los espacios cuentan como caracteres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cada espacio, salto de línea y signo de puntuación cuenta dentro del total.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué sirve contar caracteres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sirve para respetar límites en redes sociales, mensajes, formularios y fragmentos SEO.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se actualiza al instante?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El contador responde en tiempo real mientras escribes o pegas contenido.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El contador de caracteres ayuda a medir rápidamente la longitud exacta de un texto.
      Es útil para redes sociales, mensajes breves, títulos, meta descripciones y
      cualquier campo donde el espacio disponible importa.
    </p>
    <h2>Cómo usar el contador de caracteres</h2>
    <ol>
      <li>Pega o escribe tu texto en el campo de entrada.</li>
      <li>El total de caracteres se actualiza automáticamente.</li>
      <li>Si lo necesitas, copia el texto o limpia el campo para empezar de nuevo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Los espacios cuentan como caracteres?</h3>
    <p>
      Sí. Cada espacio, salto de línea y signo de puntuación forma parte del conteo total.
    </p>
    <h3>¿Para qué sirve contar caracteres?</h3>
    <p>
      Sirve para respetar límites en redes sociales, formularios, anuncios, mensajes y
      textos cortos donde cada carácter cuenta.
    </p>
    <h3>¿Se actualiza al instante?</h3>
    <p>
      Sí. El resultado cambia en tiempo real a medida que escribes o pegas contenido.
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
        title="Contador de caracteres"
        description="Cuenta los caracteres de tu texto en tiempo real."
        tool={<ContadorCaracteres />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/contador-caracteres", label: "Contador de caracteres" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/contador-palabras", title: "Contador de palabras" },
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
              { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
            ]}
          />
        }
      />
    </>
  );
}
