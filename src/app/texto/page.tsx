import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Herramientas de texto - FastTools",
  description: "Herramientas online para trabajar con texto: contador de caracteres, palabras, mayúsculas, invertir y más.",
};

export default function Texto() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Texto</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link href="/texto/contador-caracteres" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Contador de caracteres</p>
        </Link>
        <Link href="/texto/contador-palabras" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Contador de palabras</p>
        </Link>
        <Link href="/texto/quitar-espacios" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Quitar espacios</p>
        </Link>
        <Link href="/texto/mayusculas-minusculas" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Mayúsculas / Minúsculas</p>
        </Link>
        <Link href="/texto/capitalizar-texto" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Capitalizar texto</p>
        </Link>
        <Link href="/texto/invertir-texto" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Invertir texto</p>
        </Link>
      </div>
    </div>
  );
}
