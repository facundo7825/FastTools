import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Herramientas online gratuitas",
  description:
    "Explora herramientas online para texto, generadores y calculadoras. Todo en un solo lugar, gratis y sin registro.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Herramientas online gratuitas | FastTools",
    description:
      "Explora herramientas online para texto, generadores y calculadoras. Todo en un solo lugar, gratis y sin registro.",
    url: "/",
  },
  twitter: {
    title: "Herramientas online gratuitas | FastTools",
    description:
      "Explora herramientas online para texto, generadores y calculadoras. Todo en un solo lugar, gratis y sin registro.",
  },
};

const categories = [
  {
    href: "/texto",
    title: "Texto",
    eyebrow: "Editar y limpiar",
    description: "Contadores, mayusculas, limpieza, capitalizacion y conversiones utiles.",
    accent: "from-[#f59e0b]/20 via-[#fffdf7] to-transparent",
  },
  {
    href: "/generadores",
    title: "Generadores",
    eyebrow: "Crear al instante",
    description: "Contrasenas seguras, codigos QR y texto de relleno para prototipos.",
    accent: "from-[#0f766e]/20 via-[#fffdf7] to-transparent",
  },
  {
    href: "/calculadoras",
    title: "Calculadoras",
    eyebrow: "Resolver rapido",
    description: "Porcentaje, edad, IMC, temperatura y otras cuentas cotidianas.",
    accent: "from-[#ef4444]/14 via-[#fffdf7] to-transparent",
  },
];

const featuredTools = [
  {
    href: "/texto/contador-palabras",
    title: "Contador de palabras",
    detail: "Ideal para articulos, entregas y textos largos.",
    label: "Rapida",
  },
  {
    href: "/generadores/qr",
    title: "Generador de QR",
    detail: "Crea, descarga y copia codigos QR sin registro.",
    label: "Practica",
  },
  {
    href: "/calculadoras/porcentaje",
    title: "Calculadora de porcentaje",
    detail: "Para descuentos, subas y cuentas simples del dia a dia.",
    label: "Util",
  },
];

const tools = [
  { href: "/texto/contador-caracteres", title: "Contador de caracteres", category: "Texto" },
  { href: "/texto/contador-palabras", title: "Contador de palabras", category: "Texto" },
  { href: "/texto/contador-lineas", title: "Contador de lineas", category: "Texto" },
  { href: "/texto/quitar-espacios", title: "Quitar espacios", category: "Texto" },
  { href: "/texto/mayusculas-minusculas", title: "Mayusculas / Minusculas", category: "Texto" },
  { href: "/texto/capitalizar-texto", title: "Capitalizar texto", category: "Texto" },
  { href: "/texto/invertir-texto", title: "Invertir texto", category: "Texto" },
  { href: "/generadores/password", title: "Generador de contrasenas", category: "Generadores" },
  { href: "/generadores/qr", title: "Generador de QR", category: "Generadores" },
  { href: "/generadores/lorem-ipsum", title: "Generador de Lorem Ipsum", category: "Generadores" },
  { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje", category: "Calculadoras" },
  { href: "/calculadoras/edad", title: "Calculadora de edad", category: "Calculadoras" },
  { href: "/calculadoras/regla-de-tres", title: "Regla de tres", category: "Calculadoras" },
  { href: "/calculadoras/imc", title: "Calculadora de IMC", category: "Calculadoras" },
  { href: "/calculadoras/temperatura", title: "Conversor de temperatura", category: "Calculadoras" },
];

const stats = [
  { value: "15", label: "herramientas publicadas" },
  { value: "3", label: "familias de uso" },
  { value: "0", label: "registro obligatorio" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <section className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_18px_60px_rgba(23,32,51,0.08)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_28rem),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.12),transparent_26rem)]" />
        <div className="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_0.75fr] lg:items-end">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-text">
              Gratis
              <span className="text-muted">•</span>
              Sin registro
              <span className="text-muted">•</span>
              Directo al punto
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="max-w-3xl text-4xl sm:text-6xl font-extrabold tracking-tight text-text">
                Utilidades web con aspecto de caja de herramientas, no de lista aburrida.
              </h1>
              <p className="max-w-2xl text-base sm:text-xl text-muted">
                FastTools junta calculos rapidos, limpieza de texto y generadores utiles en
                una sola mesa de trabajo. Entras, resuelves y sigues.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/herramientas"
                className="inline-flex items-center justify-center rounded-2xl bg-text px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-primary-strong"
              >
                Ver todas las herramientas
              </Link>
              <Link
                href="/generadores/qr"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-text hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Probar el generador de QR
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-border bg-[#1c2434] p-6 text-white shadow-lg">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">Favoritas del sitio</p>
              <div className="mt-4 grid gap-3">
                {featuredTools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/8"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{tool.title}</p>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-white/65">
                        {tool.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/65">{tool.detail}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] border border-border bg-surface px-5 py-5 shadow-sm"
          >
            <p className="text-3xl font-extrabold text-text">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Explora por tipo
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-text">
            Tres familias para resolver cosas distintas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group relative overflow-hidden rounded-[1.8rem] border border-border bg-surface p-6 shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(23,32,51,0.08)]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent}`} />
              <div className="relative flex h-full flex-col gap-4">
                <div className="w-fit rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {cat.eyebrow}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text">{cat.title}</h3>
                  <p className="mt-2 text-sm text-muted">{cat.description}</p>
                </div>
                <span className="mt-auto text-sm font-semibold text-text group-hover:text-primary">
                  Entrar en {cat.title.toLowerCase()} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              Catalogo completo
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-text">
              Herramientas para tareas pequenas que aparecen seguido
            </h2>
          </div>
          <Link
            href="/herramientas"
            className="text-sm font-semibold text-text hover:text-primary"
          >
            Ver indice completo →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex items-center justify-between gap-4 rounded-[1.4rem] border border-border bg-surface px-4 py-4 shadow-sm hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_14px_26px_rgba(23,32,51,0.06)]"
            >
              <div>
                <p className="text-sm font-semibold text-text group-hover:text-primary">
                  {tool.title}
                </p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted mt-1">
                  {tool.category}
                </p>
              </div>
              <span className="text-muted group-hover:text-primary">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
