import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorPassword from "./GeneradorPassword";

export const metadata: Metadata = {
  title: "Generador de contraseñas seguras online gratis - FastTools",
  description: "Generá contraseñas seguras y aleatorias al instante. Elegí longitud, mayúsculas, números y símbolos. Tus contraseñas no se almacenan. 100% gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo generar una contraseña segura",
      "step": [
        { "@type": "HowToStep", "text": "Elegí la longitud deseada con el control deslizante." },
        { "@type": "HowToStep", "text": "Seleccioná qué tipos de caracteres incluir: mayúsculas, minúsculas, números y símbolos." },
        { "@type": "HowToStep", "text": "Copiá la contraseña generada con el botón Copiar." },
        { "@type": "HowToStep", "text": "Si no te gusta el resultado, generá una nueva con un solo clic." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Las contraseñas generadas se guardan en algún servidor?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. La generación ocurre completamente en tu navegador usando JavaScript. Ninguna contraseña se transmite ni almacena en ningún servidor. Una vez que cerrás la página, la contraseña desaparece." },
        },
        {
          "@type": "Question",
          "name": "¿Cuántos caracteres debe tener una contraseña segura?",
          "acceptedAnswer": { "@type": "Answer", "text": "Se recomienda un mínimo de 12 caracteres para cuentas comunes y 16 o más para cuentas bancarias, correo electrónico y redes sociales. A mayor longitud y variedad de caracteres, mayor es el tiempo necesario para descifrarla por fuerza bruta." },
        },
        {
          "@type": "Question",
          "name": "¿Tengo que memorizar estas contraseñas?",
          "acceptedAnswer": { "@type": "Answer", "text": "No es necesario. Se recomienda usar un gestor de contraseñas como Bitwarden (gratuito y de código abierto), 1Password o el gestor integrado en tu navegador para guardar contraseñas complejas de forma segura." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Una contraseña segura es la primera línea de defensa contra accesos no autorizados a tus cuentas. Los expertos en ciberseguridad recomiendan contraseñas de al menos 16 caracteres que combinen letras mayúsculas, minúsculas, números y símbolos, y que sean únicas para cada cuenta. Este generador crea contraseñas aleatorias directamente en tu navegador: ningún dato se envía ni almacena en servidores.
    </p>
    <h2>¿Cómo generar una contraseña segura?</h2>
    <ol>
      <li>Elegí la longitud deseada con el control deslizante.</li>
      <li>Seleccioná qué tipos de caracteres incluir: mayúsculas, minúsculas, números y símbolos.</li>
      <li>Copiá la contraseña generada con el botón <strong>Copiar</strong>.</li>
      <li>Si no te gusta el resultado, generá una nueva con un solo clic.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Las contraseñas generadas se guardan en algún servidor?</h3>
    <p>No. La generación ocurre completamente en tu navegador usando JavaScript. Ninguna contraseña se transmite ni almacena en ningún servidor. Una vez que cerrás la página, la contraseña desaparece.</p>
    <h3>¿Cuántos caracteres debe tener una contraseña segura?</h3>
    <p>Se recomienda un mínimo de 12 caracteres para cuentas comunes y 16 o más para cuentas bancarias, correo electrónico y redes sociales. A mayor longitud y variedad de caracteres, mayor es el tiempo necesario para descifrarla por fuerza bruta.</p>
    <h3>¿Tengo que memorizar estas contraseñas?</h3>
    <p>No es necesario. Se recomienda usar un gestor de contraseñas como Bitwarden (gratuito y de código abierto), 1Password o el gestor integrado en tu navegador para guardar contraseñas complejas de forma segura.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Generador de contraseñas"
        description="Generá contraseñas seguras y aleatorias. Tus datos no se almacenan."
        tool={<GeneradorPassword />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/generadores", label: "Generadores" }, { href: "/generadores/password", label: "Generador de contraseñas" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/generadores/qr", title: "Generador de QR" },
          ]} />
        }
      />
    </>
  );
}
