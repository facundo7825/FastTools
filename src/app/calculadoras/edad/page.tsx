import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Calculadora de edad - FastTools",
  description: "Calcula tu edad exacta en años, meses y días a partir de tu fecha de nacimiento.",
};
import CalculadoraEdad from "./CalculadoraEdad";

export default function Page() {
  return (
    <ToolLayout
      title="Calculadora de edad"
      description="Calcula tu edad exacta a partir de tu fecha de nacimiento."
      tool={<CalculadoraEdad />}
    />
  );
}
