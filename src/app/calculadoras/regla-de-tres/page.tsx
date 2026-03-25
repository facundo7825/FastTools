import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Regla de tres - FastTools",
  description: "Resuelve una regla de tres simple de forma rápida y online. Herramienta gratuita.",
};
import ReglaDeTres from "./ReglaDeTres";

export default function Page() {
  return (
    <ToolLayout
      title="Regla de tres"
      description="Resuelve una regla de tres simple de forma rápida."
      tool={<ReglaDeTres />}
    />
  );
}
