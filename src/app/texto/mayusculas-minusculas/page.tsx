import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import MayusculasMinusculas from "./MayusculasMinusculas";

export const metadata: Metadata = {
  title: "Convertir texto a mayúsculas o minúsculas online - FastTools",
  description: "Convertí cualquier texto a MAYÚSCULAS o minúsculas al instante. Incluye soporte para ñ, tildes y caracteres especiales. Gratis y sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo convertir texto a mayúsculas o minúsculas",
      "step": [
        { "@type": "HowToStep", "text": "Escribí o pegá tu texto en el campo de entrada." },
        { "@type": "HowToStep", "text": "Elegí la opción MAYÚSCULAS o minúsculas." },
        { "@type": "HowToStep", "text": "Copiá el resultado con el botón Copiar." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Convierte correctamente la ñ y las tildes?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. La herramienta utiliza las funciones nativas de JavaScript que respetan el estándar Unicode, por lo que la ñ, las vocales con tilde (á, é, í, ó, ú) y la ü se convierten correctamente en ambas direcciones." },
        },
        {
          "@type": "Question",
          "name": "¿Para qué sirve convertir texto a mayúsculas?",
          "acceptedAnswer": { "@type": "Answer", "text": "Es útil para títulos de documentos formales, siglas, encabezados de tablas, limpiar datos importados de bases de datos o formatear texto para diseños gráficos donde se requieren letras capitales uniformes." },
        },
        {
          "@type": "Question",
          "name": "¿Se modifican los números y la puntuación al convertir a mayúsculas?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Solo se convierten las letras. Los números, signos de puntuación, espacios y símbolos permanecen exactamente igual que en el texto original." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Cambiar entre mayúsculas y minúsculas es una tarea frecuente al formatear documentos, preparar encabezados, limpiar datos en planillas o adaptar textos copiados. Esta herramienta convierte el texto instantáneamente y soporta todos los caracteres del español: ñ, tildes (á, é, í, ó, ú) y diéresis (ü), sin alterar signos de puntuación ni números.
    </p>
    <h2>¿Cómo convertir texto a mayúsculas o minúsculas?</h2>
    <ol>
      <li>Escribí o pegá tu texto en el campo de entrada.</li>
      <li>Elegí la opción <strong>MAYÚSCULAS</strong> o <strong>minúsculas</strong>.</li>
      <li>Copiá el resultado con el botón <strong>Copiar</strong>.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Convierte correctamente la ñ y las tildes?</h3>
    <p>Sí. La herramienta utiliza las funciones nativas de JavaScript que respetan el estándar Unicode, por lo que la ñ, las vocales con tilde (á, é, í, ó, ú) y la ü se convierten correctamente en ambas direcciones.</p>
    <h3>¿Para qué sirve convertir texto a mayúsculas?</h3>
    <p>Es útil para títulos de documentos formales, siglas, encabezados de tablas, limpiar datos importados de bases de datos o formatear texto para diseños gráficos donde se requieren letras capitales uniformes.</p>
    <h3>¿Se modifican los números y la puntuación?</h3>
    <p>No. Solo se convierten las letras. Los números, signos de puntuación, espacios y símbolos permanecen exactamente igual que en el texto original.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Mayúsculas / Minúsculas"
        description="Convertí tu texto a mayúsculas o minúsculas en tiempo real."
        tool={<MayusculasMinusculas />}
        content={content}
        categoryHref="/texto"
        categoryLabel="Texto"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/mayusculas-minusculas", label: "Mayúsculas / Minúsculas" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
            { href: "/texto/invertir-texto", title: "Invertir texto" },
            { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
          ]} />
        }
      />
    </>
  );
}
