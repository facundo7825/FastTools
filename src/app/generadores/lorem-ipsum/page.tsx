import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorLoremIpsum from "./GeneradorLoremIpsum";

export const metadata: Metadata = {
  title: "Generador de Lorem Ipsum online gratis - FastTools",
  description: "Generá texto Lorem Ipsum al instante para tus diseños, maquetas y prototipos. Elegí la cantidad de párrafos. Sin registro y completamente gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo generar texto Lorem Ipsum",
      "step": [
        { "@type": "HowToStep", "text": "Elegí la cantidad de párrafos que necesitás con el control deslizante." },
        { "@type": "HowToStep", "text": "El texto Lorem Ipsum aparece automáticamente." },
        { "@type": "HowToStep", "text": "Copiá el texto con el botón Copiar y pegalo en tu diseño o prototipo." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es Lorem Ipsum?",
          "acceptedAnswer": { "@type": "Answer", "text": "Lorem Ipsum es un texto de relleno estándar utilizado en diseño gráfico y tipografía desde el siglo XVI. Está basado en un fragmento del tratado filosófico 'De Finibus Bonorum et Malorum' de Cicerón (45 a.C.), pero con palabras modificadas para que no tenga un significado coherente. Se usa para mostrar cómo lucirá un diseño con texto real sin distraerse con el contenido." },
        },
        {
          "@type": "Question",
          "name": "¿Para qué se usa Lorem Ipsum?",
          "acceptedAnswer": { "@type": "Answer", "text": "Se usa en diseño web y gráfico para crear maquetas (mockups) y prototipos antes de tener el contenido real. Permite a diseñadores, desarrolladores y clientes evaluar el layout, tipografía y espaciado sin que el texto de relleno distraiga del diseño en sí." },
        },
        {
          "@type": "Question",
          "name": "¿El Lorem Ipsum tiene algún significado?",
          "acceptedAnswer": { "@type": "Answer", "text": "El Lorem Ipsum estándar comienza con 'Lorem ipsum dolor sit amet...' que es una versión scrambled (mezclada) del latín clásico. No tiene un significado coherente en latín moderno, aunque los términos provienen del latín original. Su propósito es parecer texto real sin serlo." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Lorem Ipsum es el texto de relleno más utilizado en el mundo del diseño gráfico y el desarrollo web. Desde tipógrafos del siglo XVI hasta diseñadores de interfaces actuales, todos recurren a él para crear maquetas y prototipos con aspecto de texto real. Al usar Lorem Ipsum en lugar de frases repetitivas como "texto de prueba", el ojo humano percibe mejor el resultado visual del diseño sin distraerse por el contenido.
    </p>
    <h2>¿Cómo generar texto Lorem Ipsum?</h2>
    <ol>
      <li>Elegí la cantidad de párrafos que necesitás con el control deslizante.</li>
      <li>El texto Lorem Ipsum aparece automáticamente.</li>
      <li>Copiá el texto con el botón <strong>Copiar</strong> y pegalo en tu diseño o prototipo.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué es Lorem Ipsum?</h3>
    <p>Lorem Ipsum es un texto de relleno estándar utilizado en diseño gráfico y tipografía desde el siglo XVI. Está basado en un fragmento del tratado filosófico "De Finibus Bonorum et Malorum" de Cicerón (45 a.C.), pero con palabras modificadas para que no tenga un significado coherente. Se usa para mostrar cómo lucirá un diseño con texto real sin distraerse con el contenido.</p>
    <h3>¿Para qué se usa Lorem Ipsum?</h3>
    <p>Se usa en diseño web y gráfico para crear maquetas (mockups) y prototipos antes de tener el contenido real. Permite a diseñadores, desarrolladores y clientes evaluar el layout, tipografía y espaciado sin que el texto de relleno distraiga del diseño en sí.</p>
    <h3>¿El Lorem Ipsum tiene algún significado?</h3>
    <p>El Lorem Ipsum estándar comienza con "Lorem ipsum dolor sit amet..." que es una versión scrambled (mezclada) del latín clásico. No tiene un significado coherente en latín moderno, aunque los términos provienen del latín original. Su propósito es parecer texto real sin serlo.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Generador de Lorem Ipsum"
        description="Generá texto Lorem Ipsum para tus diseños y prototipos al instante."
        tool={<GeneradorLoremIpsum />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/generadores", label: "Generadores" }, { href: "/generadores/lorem-ipsum", label: "Generador de Lorem Ipsum" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/generadores/password", title: "Generador de contraseñas" },
            { href: "/generadores/qr", title: "Generador de QR" },
          ]} />
        }
      />
    </>
  );
}
