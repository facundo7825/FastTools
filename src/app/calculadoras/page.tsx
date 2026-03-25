import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="flex flex-col gap-10">
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-2">Calculadoras</h1>
        <p className="text-gray-500">Calculadoras online gratuitas para el día a día. Rápidas y sin registro.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block border rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all"
          >
            <p className="font-semibold mb-1">{tool.title}</p>
            <p className="text-sm text-gray-500">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
