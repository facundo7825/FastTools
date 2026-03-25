import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Contador de palabras - FastTools",
  description: "Cuenta las palabras de tu texto en tiempo real. Herramienta online gratuita.",
};
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
