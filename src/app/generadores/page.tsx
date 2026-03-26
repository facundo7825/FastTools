import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Generadores - FastTools",
  description: "Generadores online gratuitos: contraseñas seguras, códigos QR y más.",
};

const tools = [
  { href: "/generadores/password", title: "Generador de contraseñas", description: "Genera contraseñas seguras y aleatorias." },
  { href: "/generadores/qr", title: "Generador de QR", description: "Genera códigos QR a partir de cualquier texto o URL." },
];

export default function Generadores() {
  return (
    <div className="flex flex-col gap-10">
      <Breadcrumb crumbs={[
        { href: "/", label: "Home" },
        { href: "/generadores", label: "Generadores" },
      ]} />
      <div className="border-b pb-8">
        <h1 className="text-4xl font-bold mb-2">Generadores</h1>
        <p className="text-gray-500">Genera contraseñas seguras, códigos QR y más. Gratis y sin registro.</p>
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
