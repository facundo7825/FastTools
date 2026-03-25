import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Quitar espacios - FastTools",
  description: "Elimina los espacios extra de tu texto en tiempo real. Herramienta online gratuita.",
};
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
