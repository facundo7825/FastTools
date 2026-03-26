import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumb from "@/components/Breadcrumb";
import CalculadoraEdad from "./CalculadoraEdad";

export const metadata: Metadata = {
  title: "Calculadora de edad - FastTools",
  description: "Calcula tu edad exacta en años, meses y días a partir de tu fecha de nacimiento.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Calculadora de edad"
      description="Calcula tu edad exacta a partir de tu fecha de nacimiento."
      tool={<CalculadoraEdad />}
      breadcrumb={<Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }, { href: "/calculadoras/edad", label: "Calculadora de edad" }]} />}
      relatedTools={
        <RelatedTools tools={[
          { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
          { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
        ]} />
      }
    />
  );
}
