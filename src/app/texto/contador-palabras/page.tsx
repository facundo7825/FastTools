import ToolLayout from "@/components/ToolLayout";
import ContadorPalabras from "./ContadorPalabras";

export default function Page() {
  return (
    <ToolLayout
      title="Contador de palabras"
      description="Cuenta las palabras de tu texto en tiempo real."
      tool={<ContadorPalabras />}
    />
  );
}
