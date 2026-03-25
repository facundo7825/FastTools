import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Generador de QR - FastTools",
  description: "Genera códigos QR a partir de cualquier texto o URL. Herramienta online gratuita.",
};
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
