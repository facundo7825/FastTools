import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Capitalizar texto - FastTools",
  description: "Convierte la primera letra de cada palabra a mayúscula en tiempo real. Herramienta online gratuita.",
};
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
