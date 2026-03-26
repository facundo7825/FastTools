import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import GeneradorPassword from "./GeneradorPassword";

export const metadata: Metadata = {
  title: "Generador de contraseñas - FastTools",
  description: "Genera contraseñas seguras y aleatorias online. Herramienta gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Generador de contraseñas"
      description="Genera contraseñas seguras y aleatorias."
      tool={<GeneradorPassword />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/generadores/qr", title: "Generador de QR" },
        ]} />
      }
    />
  );
}
