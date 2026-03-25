import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Invertir texto - FastTools",
  description: "Invierte los caracteres de tu texto en tiempo real. Herramienta online gratuita.",
};
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
