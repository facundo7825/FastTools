import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import MayusculasMinusculas from "./MayusculasMinusculas";

export const metadata: Metadata = {
  title: "Mayúsculas / Minúsculas - FastTools",
  description: "Convierte tu texto a mayúsculas o minúsculas en tiempo real. Herramienta online gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Mayúsculas / Minúsculas"
      description="Convierte tu texto a mayúsculas o minúsculas en tiempo real."
      tool={<MayusculasMinusculas />}
      categoryHref="/texto"
      categoryLabel="Texto"
      breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/texto", label: "Texto" }, { href: "/texto/mayusculas-minusculas", label: "Mayúsculas / Minúsculas" }]} />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
          { href: "/texto/invertir-texto", title: "Invertir texto" },
          { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
        ]} />
      }
    />
  );
}
