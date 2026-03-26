import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CapitalizarTexto from "./CapitalizarTexto";

export const metadata: Metadata = {
  title: "Capitalizar texto - FastTools",
  description: "Convierte la primera letra de cada palabra a mayúscula en tiempo real. Herramienta online gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Capitalizar texto"
      description="Convierte la primera letra de cada palabra a mayúscula en tiempo real."
      tool={<CapitalizarTexto />}
      categoryHref="/texto"
      categoryLabel="Texto"
      breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/capitalizar-texto", label: "Capitalizar texto" }]} />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
          { href: "/texto/invertir-texto", title: "Invertir texto" },
          { href: "/texto/contador-palabras", title: "Contador de palabras" },
        ]} />
      }
    />
  );
}
