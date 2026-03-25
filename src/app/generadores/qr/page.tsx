import ToolLayout from "@/components/ToolLayout";
import GeneradorQR from "./GeneradorQR";

export default function Page() {
  return (
    <ToolLayout
      title="Generador de QR"
      description="Genera un código QR a partir de cualquier texto o URL."
      tool={<GeneradorQR />}
    />
  );
}
