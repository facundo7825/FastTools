import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Calculadora de porcentaje - FastTools",
  description: "Calcula el porcentaje de cualquier valor de forma rápida y online. Herramienta gratuita.",
};
import CalculadoraPorcentaje from "./CalculadoraPorcentaje";

export default function Page() {
  return (
    <ToolLayout
      title="Calculadora de porcentaje"
      description="Calcula el porcentaje de cualquier valor de forma rápida."
      tool={<CalculadoraPorcentaje />}
    />
  );
}
