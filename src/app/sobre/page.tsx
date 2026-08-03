import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { DEFAULT_OG_IMAGE } from "@/lib/og-image";

export const metadata: Metadata = {
  // absolute evita que el template "%s | FastTools" del layout raiz produzca
  // "Sobre FastTools | FastTools": la marca ya esta en el titulo.
  title: { absolute: "Sobre FastTools" },
  description:
    "Conoce qué es FastTools, qué tipo de herramientas ofrece y cuál es el objetivo del proyecto.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre FastTools",
    description:
      "Conoce qué es FastTools, qué tipo de herramientas ofrece y cuál es el objetivo del proyecto.",
    url: "/sobre",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Sobre FastTools",
    description:
      "Conoce qué es FastTools, qué tipo de herramientas ofrece y cuál es el objetivo del proyecto.",
  },
};

const principles = [
  {
    title: "Resolver rápido",
    text: "La idea es evitar pasos innecesarios. Entras, usas la herramienta y sigues.",
  },
  {
    title: "Hablar claro",
    text: "Cada página intenta explicar qué hace una herramienta sin vueltas ni promesas exageradas.",
  },
  {
    title: "Mantener consistencia",
    text: "La experiencia busca sentirse pareja en home, categorías y utilidades individuales.",
  },
];

export default function SobrePage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb
        crumbs={[
          { href: "/", title: "Inicio" },
          { href: "/sobre", title: "Sobre FastTools" },
        ]}
      />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          El proyecto
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">Sobre FastTools</h1>
        <p className="mt-4 max-w-3xl text-muted">
          FastTools es una colección de utilidades online pensadas para resolver tareas
          rápidas de texto, generación y cálculo sin registro ni fricción.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {principles.map((item) => (
          <div key={item.title} className="rounded-[1.6rem] border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-text">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[1.8rem] border border-border bg-background p-6">
        <h2 className="text-lg font-semibold text-text mb-2">Accesos útiles</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/herramientas" className="text-primary hover:text-primary-strong transition-colors">
            Ver herramientas
          </Link>
          <Link href="/privacidad" className="text-primary hover:text-primary-strong transition-colors">
            Política de privacidad
          </Link>
          <Link href="/terminos" className="text-primary hover:text-primary-strong transition-colors">
            Términos de uso
          </Link>
          <Link href="/contacto" className="text-primary hover:text-primary-strong transition-colors">
            Contacto
          </Link>
        </div>
      </section>
    </div>
  );
}
