import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Contador de caracteres - FastTools",
  description: "Cuenta los caracteres de tu texto en tiempo real. Herramienta online gratuita.",
};
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
