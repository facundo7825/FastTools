import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorPassword from "./GeneradorPassword";

export const metadata: Metadata = {
  title: "Generador de contraseñas seguras online gratis",
  description:
    "Genera contraseñas seguras y aleatorias al instante. Elige longitud y tipos de caracteres sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Cómo generar una contraseña segura",
      step: [
        { "@type": "HowToStep", text: "Ajusta la longitud." },
        { "@type": "HowToStep", text: "Elige los tipos de caracteres que quieres incluir." },
        { "@type": "HowToStep", text: "Genera la contraseña y cópiala si te sirve." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Se guardan las contraseñas generadas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. La herramienta genera el resultado en tu sesión y no requiere guardar datos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántos caracteres conviene usar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En general, cuanto más larga y variada sea la contraseña, mejor. Para muchas cuentas conviene usar 12 caracteres o más.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo copiarla al instante?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Después de generarla, puedes copiarla directamente desde la herramienta.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Una contraseña fuerte ayuda a reducir riesgos en cuentas personales y de trabajo.
      Este generador te permite crear claves aleatorias con distintos tipos de caracteres
      sin tener que inventarlas manualmente.
    </p>
    <h2>Cómo generar una contraseña segura</h2>
    <ol>
      <li>Ajusta la longitud deseada.</li>
      <li>Elige si quieres incluir mayúsculas, minúsculas, números y símbolos.</li>
      <li>Genera la contraseña y cópiala si te sirve.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Se guardan las contraseñas generadas?</h3>
    <p>
      No. La herramienta genera el resultado en tu sesión y no necesita guardar datos.
    </p>
    <h3>¿Cuántos caracteres conviene usar?</h3>
    <p>
      En general, una longitud de 12 caracteres o más mejora mucho la seguridad de una
      cuenta.
    </p>
    <h3>¿Puedo copiarla al instante?</h3>
    <p>
      Sí. Una vez generada, puedes copiarla directamente desde la interfaz.
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
        title="Generador de contraseñas"
        description="Genera contraseñas seguras y aleatorias sin salir del navegador."
        tool={<GeneradorPassword />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/generadores", label: "Generadores" },
              { href: "/generadores/password", label: "Generador de contraseñas" },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/generadores/qr", title: "Generador de QR" },
              { href: "/generadores/lorem-ipsum", title: "Generador de Lorem Ipsum" },
            ]}
          />
        }
      />
    </>
  );
}
