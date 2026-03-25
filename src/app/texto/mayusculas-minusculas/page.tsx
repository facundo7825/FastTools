import ToolLayout from "@/components/ToolLayout";
import MayusculasMinusculas from "./MayusculasMinusculas";

export default function Page() {
  return (
    <ToolLayout
      title="Mayúsculas / Minúsculas"
      description="Convierte tu texto a mayúsculas o minúsculas en tiempo real."
      tool={<MayusculasMinusculas />}
    />
  );
}
