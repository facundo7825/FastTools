import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ContadorCaracteres from "./ContadorCaracteres";

export const metadata: Metadata = {
  title: "Contador de caracteres - FastTools",
  description: "Cuenta los caracteres de tu texto en tiempo real. Herramienta online gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Contador de caracteres"
      description="Cuenta los caracteres de tu texto en tiempo real."
      tool={<ContadorCaracteres />}
      categoryHref="/texto"
      categoryLabel="Texto"
      breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/contador-caracteres", label: "Contador de caracteres" }]} />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/texto/contador-palabras", title: "Contador de palabras" },
          { href: "/texto/quitar-espacios", title: "Quitar espacios" },
          { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
        ]} />
      }
    />
  );
}
