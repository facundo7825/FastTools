import ToolLayout from "@/components/ToolLayout";
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
