import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Herramientas de texto",
  description:
    "Herramientas online para trabajar con texto: contador de caracteres, palabras, mayusculas, limpieza e inversion.",
  alternates: {
    canonical: "/texto",
  },
  openGraph: {
    title: "Herramientas de texto | FastTools",
    description:
      "Herramientas online para trabajar con texto: contador de caracteres, palabras, mayusculas, limpieza e inversion.",
    url: "/texto",
  },
  twitter: {
    title: "Herramientas de texto | FastTools",
    description:
      "Herramientas online para trabajar con texto: contador de caracteres, palabras, mayusculas, limpieza e inversion.",
  },
};

const tools = [
  {
    href: "/texto/contador-caracteres",
    title: "Contador de caracteres",
    description: "Cuenta los caracteres de tu texto en tiempo real.",
  },
  {
    href: "/texto/contador-palabras",
    title: "Contador de palabras",
    description: "Cuenta las palabras de tu texto en tiempo real.",
  },
  {
    href: "/texto/quitar-espacios",
    title: "Quitar espacios",
    description: "Elimina los espacios extra de tu texto.",
  },
  {
    href: "/texto/mayusculas-minusculas",
    title: "Mayusculas / Minusculas",
    description: "Convierte tu texto a mayusculas o minusculas.",
  },
  {
    href: "/texto/capitalizar-texto",
    title: "Capitalizar texto",
    description: "Pone en mayuscula la primera letra de cada palabra.",
  },
  {
    href: "/texto/invertir-texto",
    title: "Invertir texto",
    description: "Invierte los caracteres de tu texto.",
  },
  {
    href: "/texto/contador-lineas",
    title: "Contador de lineas",
    description: "Cuenta las lineas totales y no vacias de tu texto.",
  },
];

export default function Texto() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <Breadcrumb
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/texto", label: "Texto" },
        ]}
      />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Escribir, ordenar y ajustar
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">Herramientas de texto</h1>
        <p className="mt-4 max-w-3xl text-muted">
          Esta categoria agrupa utilidades para limpiar, contar, transformar y acomodar
          texto sin abrir otra app ni instalar nada.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-[1.6rem] border border-border bg-surface p-5 shadow-sm hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_26px_rgba(23,32,51,0.06)]"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Texto</p>
            <p className="mt-3 text-lg font-semibold text-text group-hover:text-primary">
              {tool.title}
            </p>
            <p className="mt-2 text-sm text-muted">{tool.description}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-text group-hover:text-primary">
              Abrir herramienta →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
