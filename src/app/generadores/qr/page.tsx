import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import GeneradorQR from "./GeneradorQR";

export const metadata: Metadata = {
  title: "Generador de QR - FastTools",
  description: "Genera códigos QR a partir de cualquier texto o URL. Herramienta online gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Generador de QR"
      description="Genera un código QR a partir de cualquier texto o URL."
      tool={<GeneradorQR />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/generadores/password", title: "Generador de contraseñas" },
        ]} />
      }
    />
  );
}
