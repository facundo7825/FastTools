import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import QuitarEspacios from "./QuitarEspacios";

export const metadata: Metadata = {
  title: "Quitar espacios - FastTools",
  description: "Elimina los espacios extra de tu texto en tiempo real. Herramienta online gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Quitar espacios"
      description="Elimina los espacios extra de tu texto en tiempo real."
      tool={<QuitarEspacios />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
          { href: "/texto/contador-palabras", title: "Contador de palabras" },
          { href: "/texto/invertir-texto", title: "Invertir texto" },
        ]} />
      }
    />
  );
}
