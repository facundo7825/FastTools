import ToolLayout from "@/components/ToolLayout";
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
