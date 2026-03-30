import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Calculadoras online",
  description:
    "Calculadoras online gratuitas para porcentaje, descuento, promedio, aumento porcentual, edad, regla de tres, IMC y conversion de temperatura.",
  alternates: {
    canonical: "/calculadoras",
  },
  openGraph: {
    title: "Calculadoras online | FastTools",
    description:
      "Calculadoras online gratuitas para porcentaje, descuento, promedio, aumento porcentual, edad, regla de tres, IMC y conversion de temperatura.",
    url: "/calculadoras",
  },
  twitter: {
    title: "Calculadoras online | FastTools",
    description:
      "Calculadoras online gratuitas para porcentaje, descuento, promedio, aumento porcentual, edad, regla de tres, IMC y conversion de temperatura.",
  },
};

const tools = [
  { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje", description: "Calcula el porcentaje de cualquier valor." },
  { href: "/calculadoras/descuento", title: "Calculadora de descuento", description: "Muestra cuanto descuentan y cual es el precio final." },
  { href: "/calculadoras/promedio", title: "Calculadora de promedio", description: "Saca medias de listas de notas, gastos o valores." },
  { href: "/calculadoras/aumento-porcentual", title: "Calculadora de aumento porcentual", description: "Muestra cuanto sube un valor y cual es el total final." },
  { href: "/calculadoras/edad", title: "Calculadora de edad", description: "Calcula tu edad exacta en anos, meses y dias." },
  { href: "/calculadoras/regla-de-tres", title: "Regla de tres", description: "Resuelve una regla de tres simple rapidamente." },
  { href: "/calculadoras/imc", title: "Calculadora de IMC", description: "Calcula tu indice de masa corporal con peso y altura." },
  { href: "/calculadoras/temperatura", title: "Conversor de temperatura", description: "Convierte entre Celsius, Fahrenheit y Kelvin al instante." },
];

export default function Calculadoras() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/calculadoras", label: "Calculadoras" }]} />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Resolver con menos pasos</p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">Calculadoras online</h1>
        <p className="mt-4 max-w-3xl text-muted">
          Un set de calculadoras pensado para cuentas frecuentes: porcentajes, descuentos, aumentos, promedios, edades, conversiones y resultados rapidos sin abrir planillas ni formulas.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-[1.6rem] border border-border bg-surface p-5 shadow-sm hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_26px_rgba(23,32,51,0.06)]"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Calculadoras</p>
            <p className="mt-3 text-lg font-semibold text-text group-hover:text-primary">{tool.title}</p>
            <p className="mt-2 text-sm text-muted">{tool.description}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-text group-hover:text-primary">
              Abrir herramienta {"->"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
