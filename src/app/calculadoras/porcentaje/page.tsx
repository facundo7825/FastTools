import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraPorcentaje from "./CalculadoraPorcentaje";

export const metadata: Metadata = {
  title: "Calculadora de porcentaje - FastTools",
  description: "Calcula el porcentaje de cualquier valor de forma rápida y online. Herramienta online gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Calculadora de porcentaje"
      description="Calcula el porcentaje de cualquier valor de forma rápida."
      tool={<CalculadoraPorcentaje />}
      categoryHref="/calculadoras"
      categoryLabel="Calculadoras"
      breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }, { href: "/calculadoras/porcentaje", label: "Calculadora de porcentaje" }]} />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/calculadoras/edad", title: "Calculadora de edad" },
          { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
        ]} />
      }
    />
  );
}
