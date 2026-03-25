import ToolLayout from "@/components/ToolLayout";
import GeneradorPassword from "./GeneradorPassword";

export default function Page() {
  return (
    <ToolLayout
      title="Generador de contraseñas"
      description="Genera contraseñas seguras y aleatorias."
      tool={<GeneradorPassword />}
    />
  );
}
