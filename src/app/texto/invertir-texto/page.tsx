import ToolLayout from "@/components/ToolLayout";
import InvertirTexto from "./InvertirTexto";

export default function Page() {
  return (
    <ToolLayout
      title="Invertir texto"
      description="Invierte los caracteres de tu texto en tiempo real."
      tool={<InvertirTexto />}
    />
  );
}
