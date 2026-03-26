import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import ReglaDeTres from "./ReglaDeTres";

export const metadata: Metadata = {
  title: "Regla de tres - FastTools",
  description: "Resuelve una regla de tres simple de forma rápida y online. Herramienta gratuita.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Regla de tres"
      description="Resuelve una regla de tres simple de forma rápida."
      tool={<ReglaDeTres />}
      breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }, { href: "/calculadoras/regla-de-tres", label: "Regla de tres" }]} />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
          { href: "/calculadoras/edad", title: "Calculadora de edad" },
        ]} />
      }
    />
  );
}
