import Link from "next/link";

export default function Calculadoras() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Calculadoras</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link href="/calculadoras/porcentaje" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Calculadora de porcentaje</p>
        </Link>
        <Link href="/calculadoras/edad" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Calculadora de edad</p>
        </Link>
        <Link href="/calculadoras/regla-de-tres" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Regla de tres</p>
        </Link>
      </div>
    </div>
  );
}
