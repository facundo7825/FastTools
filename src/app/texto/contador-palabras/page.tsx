import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorPalabras from "./ContadorPalabras";

export const metadata: Metadata = {
  title: "Contador de palabras - FastTools",
  description: "Cuenta las palabras de tu texto en tiempo real. Herramienta online gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Contador de palabras"
      description="Cuenta las palabras de tu texto en tiempo real."
      tool={<ContadorPalabras />}
      breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/contador-palabras", label: "Contador de palabras" }]} />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
          { href: "/texto/quitar-espacios", title: "Quitar espacios" },
          { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
        ]} />
      }
    />
  );
}
