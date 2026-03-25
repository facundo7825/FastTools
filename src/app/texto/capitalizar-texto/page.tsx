import ToolLayout from "@/components/ToolLayout";
import CapitalizarTexto from "./CapitalizarTexto";

export default function Page() {
  return (
    <ToolLayout
      title="Capitalizar texto"
      description="Convierte la primera letra de cada palabra a mayúscula en tiempo real."
      tool={<CapitalizarTexto />}
    />
  );
}
