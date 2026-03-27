import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sobre FastTools",
  description:
    "Conoce que es FastTools, que tipo de herramientas ofrece y cual es el objetivo del proyecto.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre FastTools | FastTools",
    description:
      "Conoce que es FastTools, que tipo de herramientas ofrece y cual es el objetivo del proyecto.",
    url: "/sobre",
  },
  twitter: {
    title: "Sobre FastTools | FastTools",
    description:
      "Conoce que es FastTools, que tipo de herramientas ofrece y cual es el objetivo del proyecto.",
  },
};

const principles = [
  {
    title: "Resolver rapido",
    text: "La idea es evitar pasos innecesarios. Entras, usas la herramienta y sigues.",
  },
  {
    title: "Hablar claro",
    text: "Cada pagina intenta explicar que hace una herramienta sin vueltas ni promesas exageradas.",
  },
  {
    title: "Mantener consistencia",
    text: "La experiencia busca sentirse pareja en home, categorias y utilidades individuales.",
  },
];

export default function SobrePage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/sobre", label: "Sobre FastTools" },
        ]}
      />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          El proyecto
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">Sobre FastTools</h1>
        <p className="mt-4 max-w-3xl text-muted">
          FastTools es una coleccion de utilidades online pensadas para resolver tareas
          rapidas de texto, generacion y calculo sin registro ni friccion.
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
        <h2 className="text-lg font-semibold text-text mb-2">Accesos utiles</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/herramientas" className="text-primary hover:text-primary-strong transition-colors">
            Ver herramientas
          </Link>
          <Link href="/privacidad" className="text-primary hover:text-primary-strong transition-colors">
            Politica de privacidad
          </Link>
          <Link href="/terminos" className="text-primary hover:text-primary-strong transition-colors">
            Terminos de uso
          </Link>
          <Link href="/contacto" className="text-primary hover:text-primary-strong transition-colors">
            Contacto
          </Link>
        </div>
      </section>
    </div>
  );
}
