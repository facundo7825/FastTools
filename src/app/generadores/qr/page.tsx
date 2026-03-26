import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import GeneradorQR from "./GeneradorQR";

export const metadata: Metadata = {
  title: "Generador de código QR online gratis - FastTools",
  description: "Creá códigos QR para URLs, texto, WiFi o contactos en segundos. Sin registro, sin marcas de agua. Descargá el QR en alta calidad completamente gratis.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Cómo crear un código QR",
      "step": [
        { "@type": "HowToStep", "text": "Escribí o pegá el texto o URL que querés codificar." },
        { "@type": "HowToStep", "text": "El código QR se genera automáticamente al instante." },
        { "@type": "HowToStep", "text": "Descargá el QR o copialo para usarlo en tus materiales." },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué puedo codificar en un código QR?",
          "acceptedAnswer": { "@type": "Answer", "text": "Podés codificar cualquier tipo de texto: URLs de sitios web, números de teléfono, direcciones de email, textos libres, coordenadas GPS o datos de WiFi. Para links de redes sociales, simplemente pegá la URL del perfil." },
        },
        {
          "@type": "Question",
          "name": "¿Los códigos QR generados tienen fecha de vencimiento?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Los QR generados con esta herramienta son estáticos y no tienen fecha de vencimiento. Mientras el contenido codificado (por ejemplo, una URL) siga siendo válido, el QR funcionará para siempre." },
        },
        {
          "@type": "Question",
          "name": "¿Cuántos caracteres puede almacenar un código QR?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un código QR puede almacenar hasta 4.296 caracteres alfanuméricos. Sin embargo, cuanto más texto contenga, más densa y difícil de escanear será la imagen. Para URLs se recomienda usar un acortador si la dirección es muy larga." },
        },
      ],
    },
  ],
};

const content = (
  <>
    <p>
      Un código QR (Quick Response) es un código de barras bidimensional que puede almacenar texto, URLs, datos de contacto, credenciales de WiFi y más. Son escaneables desde cualquier smartphone moderno sin necesidad de una app específica. Se usan en menús de restaurantes, tarjetas de presentación, carteles publicitarios, empaques de productos y prácticamente cualquier material impreso que quiera conectar al mundo físico con el digital.
    </p>
    <h2>¿Cómo crear un código QR?</h2>
    <ol>
      <li>Escribí o pegá el texto o URL que querés codificar.</li>
      <li>El código QR se genera automáticamente al instante.</li>
      <li>Descargá el QR o copialo para usarlo en tus materiales.</li>
    </ol>
    <h2>Preguntas frecuentes</h2>
    <h3>¿Qué puedo codificar en un código QR?</h3>
    <p>Podés codificar cualquier tipo de texto: URLs de sitios web, números de teléfono, direcciones de email, textos libres, coordenadas GPS o datos de WiFi. Para links de redes sociales, simplemente pegá la URL del perfil.</p>
    <h3>¿Los códigos QR generados tienen fecha de vencimiento?</h3>
    <p>No. Los QR generados con esta herramienta son estáticos y no tienen fecha de vencimiento. Mientras el contenido codificado (por ejemplo, una URL) siga siendo válido, el QR funcionará para siempre.</p>
    <h3>¿Cuántos caracteres puede almacenar un código QR?</h3>
    <p>Un código QR puede almacenar hasta 4.296 caracteres alfanuméricos. Sin embargo, cuanto más texto contenga, más densa y difícil de escanear será la imagen. Para URLs se recomienda usar un acortador si la dirección es muy larga.</p>
  </>
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout
        title="Generador de QR"
        description="Creá un código QR a partir de cualquier texto o URL al instante."
        tool={<GeneradorQR />}
        content={content}
        categoryHref="/generadores"
        categoryLabel="Generadores"
        breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/generadores", label: "Generadores" }, { href: "/generadores/qr", label: "Generador de QR" }]} />}
        relatedTools={
          <RelatedTools tools={[
            { href: "/generadores/password", title: "Generador de contraseñas" },
          ]} />
        }
      />
    </>
  );
}
