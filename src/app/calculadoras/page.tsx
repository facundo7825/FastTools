import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Calculadoras - FastTools",
  description: "Calculadoras online gratuitas: porcentaje, edad, regla de tres y más.",
};

const tools = [
  { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje", description: "Calcula el porcentaje de cualquier valor." },
  { href: "/calculadoras/edad", title: "Calculadora de edad", description: "Calcula tu edad exacta en años, meses y días." },
  { href: "/calculadoras/regla-de-tres", title: "Regla de tres", description: "Resuelve una regla de tres simple rápidamente." },
];

export default function Calculadoras() {
  return (
    <div className="flex flex-col gap-7 sm:gap-10">
      <Breadcrumb crumbs={[
        { href: "/", label: "Home" },
        { href: "/calculadoras", label: "Calculadoras" },
      ]} />
      <div className="border-b border-border pb-6 sm:pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-2">Calculadoras</h1>
        <p className="text-muted">Calculadoras online gratuitas para el día a día. Rápidas y sin registro.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block bg-surface border border-border rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <p className="font-semibold text-text mb-1 group-hover:text-primary transition-colors">{tool.title}</p>
            <p className="text-sm text-muted">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
