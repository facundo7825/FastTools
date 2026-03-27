import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorPassword from "./GeneradorPassword";

export const metadata: Metadata = {
  title: "Generador de contrasenas seguras online gratis",
  description:
    "Genera contrasenas seguras y aleatorias al instante. Elige longitud y tipos de caracteres sin registro.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como generar una contrasena segura",
      step: [
        { "@type": "HowToStep", text: "Ajusta la longitud." },
        { "@type": "HowToStep", text: "Elige los tipos de caracteres que quieres incluir." },
        { "@type": "HowToStep", text: "Genera la contrasena y copiala si te sirve." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Se guardan las contrasenas generadas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. La herramienta genera el resultado en tu sesion y no requiere guardar datos.",
          },
        },
        {
          "@type": "Question",
          name: "Cuantos caracteres conviene usar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En general, cuanto mas larga y variada sea la contrasena, mejor. Para muchas cuentas conviene usar 12 caracteres o mas.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo copiarla al instante?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Despues de generarla, puedes copiarla directamente desde la herramienta.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Una contrasena fuerte ayuda a reducir riesgos en cuentas personales y de trabajo.
      Este generador te permite crear claves aleatorias con distintos tipos de caracteres
      sin tener que inventarlas manualmente.
    </p>
    <h2>Como generar una contrasena segura</h2>
    <ol>
      <li>Ajusta la longitud deseada.</li>
      <li>Elige si quieres incluir mayusculas, minusculas, numeros y simbolos.</li>
      <li>Genera la contrasena y copiala si te sirve.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Se guardan las contrasenas generadas?</h3>
    <p>
      No. La herramienta genera el resultado en tu sesion y no necesita guardar datos.
    </p>
    <h3>Cuantos caracteres conviene usar?</h3>
    <p>
      En general, una longitud de 12 caracteres o mas mejora mucho la seguridad de una
      cuenta.
    </p>
    <h3>Puedo copiarla al instante?</h3>
    <p>
      Si. Una vez generada, puedes copiarla directamente desde la interfaz.
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
        title="Generador de contrasenas"
        description="Genera contrasenas seguras y aleatorias sin salir del navegador."
        tool={<GeneradorPassword />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/generadores", label: "Generadores" },
              { href: "/generadores/password", label: "Generador de contrasenas" },
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
