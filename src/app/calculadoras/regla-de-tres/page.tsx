import ToolLayout from "@/components/ToolLayout";
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
