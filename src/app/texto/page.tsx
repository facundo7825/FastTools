import type { Metadata } from "next";
import Link from "next/link";

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
];

export default function Texto() {
  return (
    <div className="flex flex-col gap-10">
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-2">Texto</h1>
        <p className="text-gray-500">Herramientas online gratuitas para trabajar con texto. Rápidas y sin registro.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block border rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all"
          >
            <p className="font-semibold mb-1">{tool.title}</p>
            <p className="text-sm text-gray-500">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
