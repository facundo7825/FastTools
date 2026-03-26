import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Herramientas de texto - FastTools",
  description: "Herramientas online para trabajar con texto: contador de caracteres, palabras, mayúsculas, invertir y más.",
};

const tools = [
  { href: "/texto/contador-caracteres", title: "Contador de caracteres", description: "Cuenta los caracteres de tu texto en tiempo real." },
  { href: "/texto/contador-palabras", title: "Contador de palabras", description: "Cuenta las palabras de tu texto en tiempo real." },
  { href: "/texto/quitar-espacios", title: "Quitar espacios", description: "Elimina los espacios extra de tu texto." },
  { href: "/texto/mayusculas-minusculas", title: "Mayúsculas / Minúsculas", description: "Convierte tu texto a mayúsculas o minúsculas." },
  { href: "/texto/capitalizar-texto", title: "Capitalizar texto", description: "Pone en mayúscula la primera letra de cada palabra." },
  { href: "/texto/invertir-texto", title: "Invertir texto", description: "Invierte los caracteres de tu texto." },
  { href: "/texto/contador-lineas", title: "Contador de líneas", description: "Cuenta las líneas totales y no vacías de tu texto." },
];

export default function Texto() {
  return (
    <div className="flex flex-col gap-7 sm:gap-10">
      <Breadcrumb crumbs={[
        { href: "/", label: "Home" },
        { href: "/texto", label: "Texto" },
      ]} />
      <div className="border-b border-border pb-6 sm:pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-2">Texto</h1>
        <p className="text-muted">Herramientas online gratuitas para trabajar con texto. Rápidas y sin registro.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block bg-surface border border-border rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary transition-all group"
          >
            <p className="font-semibold text-text mb-1 group-hover:text-primary transition-colors">{tool.title}</p>
            <p className="text-sm text-muted">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
