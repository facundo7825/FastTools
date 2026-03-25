import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Generador de contraseñas - FastTools",
  description: "Genera contraseñas seguras y aleatorias online. Herramienta gratuita.",
};
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
