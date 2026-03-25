import Link from "next/link";

export default function Herramientas() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Herramientas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link href="/texto" className="block border rounded-lg p-6 hover:bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Texto</h2>
          <p className="text-sm text-gray-500">Herramientas para trabajar con texto</p>
        </Link>
        <Link href="/generadores" className="block border rounded-lg p-6 hover:bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Generadores</h2>
          <p className="text-sm text-gray-500">Genera contraseñas, QR y más</p>
        </Link>
        <Link href="/calculadoras" className="block border rounded-lg p-6 hover:bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Calculadoras</h2>
          <p className="text-sm text-gray-500">Calculadoras útiles y rápidas</p>
        </Link>
      </div>
    </div>
  );
}
