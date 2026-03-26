import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import InvertirTexto from "./InvertirTexto";

export const metadata: Metadata = {
  title: "Invertir texto - FastTools",
  description: "Invierte los caracteres de tu texto en tiempo real. Herramienta online gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Invertir texto"
      description="Invierte los caracteres de tu texto en tiempo real."
      tool={<InvertirTexto />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
          { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
          { href: "/texto/quitar-espacios", title: "Quitar espacios" },
        ]} />
      }
    />
  );
}
