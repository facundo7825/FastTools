import ToolLayout from "@/components/ToolLayout";
import ContadorCaracteres from "./ContadorCaracteres";

export default function Page() {
  return (
    <ToolLayout
      title="Contador de caracteres"
      description="Cuenta los caracteres de tu texto en tiempo real."
      tool={<ContadorCaracteres />}
    />
  );
}
