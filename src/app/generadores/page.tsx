import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Generadores online",
  description:
    "Generadores online gratuitos para contrasenas, codigos QR y texto de relleno. Rapidos y sin registro.",
  alternates: {
    canonical: "/generadores",
  },
  openGraph: {
    title: "Generadores online | FastTools",
    description:
      "Generadores online gratuitos para contrasenas, codigos QR y texto de relleno. Rapidos y sin registro.",
    url: "/generadores",
  },
  twitter: {
    title: "Generadores online | FastTools",
    description:
      "Generadores online gratuitos para contrasenas, codigos QR y texto de relleno. Rapidos y sin registro.",
  },
};

const tools = [
  {
    href: "/generadores/password",
    title: "Generador de contrasenas",
    description: "Genera contrasenas seguras y aleatorias.",
  },
  {
    href: "/generadores/qr",
    title: "Generador de QR",
    description: "Genera codigos QR a partir de cualquier texto o URL.",
  },
  {
    href: "/generadores/lorem-ipsum",
    title: "Generador de Lorem Ipsum",
    description: "Genera texto de relleno para disenos y prototipos.",
  },
];

export default function Generadores() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <Breadcrumb
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/generadores", label: "Generadores" },
        ]}
      />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Crear sin friccion
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">Generadores online</h1>
        <p className="mt-4 max-w-3xl text-muted">
          Para esos casos donde necesitas producir algo ya mismo: una contrasena, un QR o
          texto de relleno para una maqueta.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-[1.6rem] border border-border bg-surface p-5 shadow-sm hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_26px_rgba(23,32,51,0.06)]"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Generadores</p>
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
