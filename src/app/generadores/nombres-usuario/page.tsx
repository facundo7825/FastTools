import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedTools from "@/components/RelatedTools";
import ToolLayout from "@/components/ToolLayout";
import GeneradorNombresUsuario from "./GeneradorNombresUsuario";

export const metadata: Metadata = {
  title: "Generador de nombres de usuario online",
  description:
    "Genera nombres de usuario originales para redes, perfiles, proyectos y cuentas en segundos.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como generar nombres de usuario",
      step: [
        { "@type": "HowToStep", text: "Escribe una palabra base opcional para orientar el estilo." },
        { "@type": "HowToStep", text: "Ajusta la cantidad de sugerencias y las opciones de formato." },
        { "@type": "HowToStep", text: "Genera la lista y copia la opcion que mas te guste." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Sirve para Instagram, TikTok o gaming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Las sugerencias se pueden usar como punto de partida para redes sociales, perfiles personales o nombres de proyecto.",
          },
        },
        {
          "@type": "Question",
          name: "Puedo incluir una palabra propia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si. Puedes escribir una palabra base y el generador la mezcla con otros terminos para crear opciones.",
          },
        },
        {
          "@type": "Question",
          name: "Agrega numeros automaticamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si quieres, puedes activar o desactivar la inclusion de numeros en las sugerencias.",
          },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      El generador de nombres de usuario ayuda cuando necesitas ideas rapidas para una
      cuenta nueva, una comunidad, un alias de juego o un perfil de proyecto. Puedes
      partir de una palabra propia y producir variantes en segundos.
    </p>
    <h2>Como usar el generador</h2>
    <ol>
      <li>Escribe una palabra base si quieres orientar el estilo.</li>
      <li>Elige cuantas opciones quieres generar y si deseas numeros o separadores.</li>
      <li>Copia la sugerencia que mejor encaje con tu cuenta o proyecto.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>Sirve para Instagram, TikTok o gaming?</h3>
    <p>
      Si. Funciona bien como punto de partida para redes sociales, comunidades, cuentas
      personales o aliases de juego.
    </p>
    <h3>Puedo incluir una palabra propia?</h3>
    <p>
      Si. Puedes escribir una base y el generador armara combinaciones alrededor de esa
      idea.
    </p>
    <h3>Agrega numeros automaticamente?</h3>
    <p>
      Tienes una opcion para incluir numeros o dejarlos fuera si prefieres nombres mas
      limpios.
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
        title="Generador de nombres de usuario"
        description="Crea sugerencias rapidas para redes, cuentas, proyectos y perfiles."
        tool={<GeneradorNombresUsuario />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={
          <Breadcrumb
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/generadores", label: "Generadores" },
              {
                href: "/generadores/nombres-usuario",
                label: "Generador de nombres de usuario",
              },
            ]}
          />
        }
        relatedTools={
          <RelatedTools
            tools={[
              { href: "/generadores/password", title: "Generador de contrasenas" },
              { href: "/generadores/uuid", title: "Generador de UUID" },
              { href: "/generadores/lorem-ipsum", title: "Generador de Lorem Ipsum" },
            ]}
          />
        }
      />
    </>
  );
}
