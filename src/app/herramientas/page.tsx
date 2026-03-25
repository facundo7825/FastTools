import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Herramientas - FastTools",
  description: "Explora todas las herramientas online gratuitas de FastTools: texto, generadores y calculadoras.",
};

const categories = [
  {
    href: "/texto",
    title: "Texto",
    description: "Herramientas para trabajar con texto",
    tools: [
      { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
      { href: "/texto/contador-palabras", title: "Contador de palabras" },
      { href: "/texto/quitar-espacios", title: "Quitar espacios" },
      { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas" },
      { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
      { href: "/texto/invertir-texto", title: "Invertir texto" },
    ],
  },
  {
    href: "/generadores",
    title: "Generadores",
    description: "Genera contraseñas, QR y más",
    tools: [
      { href: "/generadores/password", title: "Generador de contraseñas" },
      { href: "/generadores/qr", title: "Generador de QR" },
    ],
  },
  {
    href: "/calculadoras",
    title: "Calculadoras",
    description: "Calculadoras útiles y rápidas",
    tools: [
      { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
      { href: "/calculadoras/edad", title: "Calculadora de edad" },
      { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
    ],
  },
];

export default function Herramientas() {
  return (
    <div className="flex flex-col gap-12">
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-2">Herramientas</h1>
        <p className="text-gray-500">Todas las herramientas disponibles, organizadas por categoría.</p>
      </div>

      <div className="flex flex-col gap-10">
        {categories.map((cat) => (
          <section key={cat.href}>
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">{cat.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
              </div>
              <Link href={cat.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                Ver categoría →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cat.tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block border rounded-xl px-4 py-3 text-sm font-medium hover:border-gray-400 hover:shadow-sm transition-all"
                >
                  {tool.title}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
