import Link from "next/link";

export default function Generadores() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Generadores</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link href="/generadores/password" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Generador de contraseñas</p>
        </Link>
        <Link href="/generadores/qr" className="block border rounded-lg p-4 hover:bg-gray-50">
          <p className="font-medium">Generador de QR</p>
        </Link>
      </div>
    </div>
  );
}
