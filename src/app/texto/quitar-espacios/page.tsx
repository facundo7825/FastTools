import ToolLayout from "@/components/ToolLayout";
import QuitarEspacios from "./QuitarEspacios";

export default function Page() {
  return (
    <ToolLayout
      title="Quitar espacios"
      description="Elimina los espacios extra de tu texto en tiempo real."
      tool={<QuitarEspacios />}
    />
  );
}
