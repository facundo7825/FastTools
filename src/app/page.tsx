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
    <div className="flex flex-col gap-12 sm:gap-20">

      {/* Hero */}
      <section className="text-center pt-10 pb-10 sm:pt-16 sm:pb-14 border-b border-border">
        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 sm:mb-6 tracking-wide uppercase">
          Gratis · Sin registro · Sin complicaciones
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-text mb-4 leading-tight">
          Herramientas online<br className="hidden sm:block" /> para tu día a día
        </h1>
        <p className="text-base sm:text-xl text-muted max-w-lg mx-auto mb-8 sm:mb-10">
          Texto, generadores y calculadoras. Rápidas, simples y siempre disponibles.
        </p>
        <Link
          href="/herramientas"
          className="inline-block bg-primary text-white text-sm font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
        >
          Ver todas las herramientas →
        </Link>
      </section>

      {/* Categories */}
      <section>
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-text mb-1">Categorías</h2>
          <p className="text-muted text-sm">Explora por categoría</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary transition-all group"
            >
              <h3 className="text-lg font-semibold text-text mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
              <p className="text-sm text-muted">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section>
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-text mb-1">Herramientas</h2>
          <p className="text-muted text-sm">Todas las herramientas disponibles</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center justify-between bg-surface border border-border rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-primary transition-all group"
            >
              <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">{tool.title}</span>
              <span className="text-xs text-muted group-hover:text-primary transition-colors">{tool.category}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
