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
    <div className="flex flex-col gap-8 sm:gap-12">
      <div className="border-b border-border pb-6 sm:pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-2">Herramientas</h1>
        <p className="text-muted">Todas las herramientas disponibles, organizadas por categoría.</p>
      </div>

      <div className="flex flex-col gap-9 sm:gap-12">
        {categories.map((cat) => (
          <section key={cat.href}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-text">{cat.title}</h2>
                <p className="text-sm text-muted mt-1">{cat.description}</p>
              </div>
              <Link href={cat.href} className="text-sm font-medium text-primary hover:text-blue-700 transition-colors shrink-0">
                Ver categoría →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cat.tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block bg-surface border border-border rounded-2xl px-4 py-3.5 text-sm font-medium text-text shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition-all"
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
