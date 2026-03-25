import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">FastTools</h1>
        <p className="text-lg text-gray-600">Herramientas online gratuitas para tu día a día</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/texto" className="block border rounded-lg p-6 hover:bg-gray-50">
            <h3 className="text-lg font-medium">Texto</h3>
            <p className="text-sm text-gray-500 mt-1">Herramientas para trabajar con texto</p>
          </Link>
          <Link href="/generadores" className="block border rounded-lg p-6 hover:bg-gray-50">
            <h3 className="text-lg font-medium">Generadores</h3>
            <p className="text-sm text-gray-500 mt-1">Genera contraseñas, QR y más</p>
          </Link>
          <Link href="/calculadoras" className="block border rounded-lg p-6 hover:bg-gray-50">
            <h3 className="text-lg font-medium">Calculadoras</h3>
            <p className="text-sm text-gray-500 mt-1">Calculadoras útiles y rápidas</p>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Herramientas</h2>
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
          <Link href="/generadores/password" className="block border rounded-lg p-4 hover:bg-gray-50">
            <p className="font-medium">Generador de contraseñas</p>
          </Link>
          <Link href="/generadores/qr" className="block border rounded-lg p-4 hover:bg-gray-50">
            <p className="font-medium">Generador de QR</p>
          </Link>
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
      </section>
    </div>
  );
}
