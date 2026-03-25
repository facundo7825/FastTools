import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FastTools - Herramientas online gratuitas",
  description: "Herramientas online gratuitas para texto, generadores y calculadoras. Rápidas, simples y sin registro.",
};

const categories = [
  {
    href: "/texto",
    title: "Texto",
    description: "Contador de caracteres, palabras, mayúsculas, invertir y más.",
  },
  {
    href: "/generadores",
    title: "Generadores",
    description: "Genera contraseñas seguras, códigos QR y más.",
  },
  {
    href: "/calculadoras",
    title: "Calculadoras",
    description: "Porcentaje, edad, regla de tres y más.",
  },
];

const tools = [
  { href: "/texto/contador-caracteres", title: "Contador de caracteres", category: "Texto" },
  { href: "/texto/contador-palabras", title: "Contador de palabras", category: "Texto" },
  { href: "/texto/quitar-espacios", title: "Quitar espacios", category: "Texto" },
  { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas", category: "Texto" },
  { href: "/texto/capitalizar-texto", title: "Capitalizar texto", category: "Texto" },
  { href: "/texto/invertir-texto", title: "Invertir texto", category: "Texto" },
  { href: "/generadores/password", title: "Generador de contraseñas", category: "Generadores" },
  { href: "/generadores/qr", title: "Generador de QR", category: "Generadores" },
  { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje", category: "Calculadoras" },
  { href: "/calculadoras/edad", title: "Calculadora de edad", category: "Calculadoras" },
  { href: "/calculadoras/regla-de-tres", title: "Regla de tres", category: "Calculadoras" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">

      <section className="text-center py-16 border-b">
        <h1 className="text-5xl font-bold tracking-tight mb-4">FastTools</h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto">
          Herramientas online gratuitas para tu día a día. Sin registro, sin complicaciones.
        </p>
        <div className="mt-8">
          <Link
            href="/herramientas"
            className="inline-block bg-black text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Ver todas las herramientas
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Categorías</h2>
        <p className="text-gray-500 mb-6 text-sm">Explora por categoría</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block border rounded-xl p-6 hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
              <p className="text-sm text-gray-500">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Herramientas</h2>
        <p className="text-gray-500 mb-6 text-sm">Todas las herramientas disponibles</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center justify-between border rounded-xl px-4 py-3 hover:border-gray-400 hover:shadow-sm transition-all group"
            >
              <span className="text-sm font-medium">{tool.title}</span>
              <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">{tool.category}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
