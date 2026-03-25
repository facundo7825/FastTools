import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Mayúsculas y Minúsculas - FastTools",
  description: "Convierte tu texto a mayúsculas o minúsculas en tiempo real. Herramienta online gratuita.",
};
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
