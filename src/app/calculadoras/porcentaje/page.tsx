import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import CalculadoraPorcentaje from "./CalculadoraPorcentaje";

export const metadata: Metadata = {
  title: "Calculadora de porcentaje - FastTools",
  description: "Calcula el porcentaje de cualquier valor de forma rápida y online. Herramienta gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Calculadora de porcentaje"
      description="Calcula el porcentaje de cualquier valor de forma rápida."
      tool={<CalculadoraPorcentaje />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/calculadoras/edad", title: "Calculadora de edad" },
          { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
        ]} />
      }
    />
  );
}
