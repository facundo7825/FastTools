import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import MinificarTexto from "./MinificarTexto";

export const metadata: Metadata = {
  title: "Minificador de texto online",
  description:
    "Minifica texto online compactando espacios y saltos de linea. Ideal para prompts, mensajes, campos con limite y contenido limpio.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como minificar texto online",
      step: [
        { "@type": "HowToStep", text: "Pega el texto que quieres compactar." },
        { "@type": "HowToStep", text: "La herramienta reduce espacios y saltos automaticamente." },
        { "@type": "HowToStep", text: "Copia la version minificada cuando este lista." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Elimina todos los saltos de linea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La salida compacta el contenido en una sola linea con espacios simples.",
          },
        },
        {
          "@type": "Question",
          name: "Sirve para prompts o campos con limite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Es util para reducir longitud antes de pegar contenido en formularios o herramientas con limites.",
          },
        },
        {
          "@type": "Question",
          name: "Muestra cuanto se redujo el texto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. La interfaz muestra caracteres originales, resultado final y ahorro estimado.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El minificador de texto compacta espacios y saltos de linea para dejar una version
      mas corta y uniforme. Es muy util para prompts, mensajes extensos, campos con
      limite de caracteres o contenido que quieres pegar sin ruido visual.
    </p>
    <h2>Como usar el minificador</h2>
    <ol>
      <li>Pega el texto que quieres compactar.</li>
      <li>Revisa la diferencia entre la version original y la minificada.</li>
      <li>Copia el resultado para reutilizarlo donde haga falta.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Elimina todos los saltos de linea?</h3>
    <p>
      Si. El contenido final queda en una sola linea con espacios simples entre bloques
      de texto.
    </p>
    <h3>Sirve para prompts o campos con limite?</h3>
    <p>
      Si. Ayuda a reducir longitud antes de pegar contenido en formularios, prompts o
      cajas de texto con restricciones.
    </p>
    <h3>Muestra cuanto se redujo el texto?</h3>
    <p>
      Si. Puedes ver caracteres originales, caracteres finales y el ahorro estimado.
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
        title="Minificador de texto"
        description="Compacta texto en una sola linea y reduce espacios innecesarios."
        tool={<MinificarTexto />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/texto", label: "Texto" },
              { href: "/texto/minificar-texto", label: "Minificador de texto" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/texto/quitar-espacios", title: "Quitar espacios" },
              { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de linea" },
              { href: "/texto/extraer-texto-html", title: "Extractor de texto de HTML" },
            ]}
          />
        }
      />
    </>
  );
}
