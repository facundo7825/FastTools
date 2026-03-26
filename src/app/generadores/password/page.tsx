import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
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
      breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/generadores", label: "Generadores" }, { href: "/generadores/password", label: "Generador de contraseñas" }]} />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/generadores/qr", title: "Generador de QR" },
        ]} />
      }
    />
  );
}
