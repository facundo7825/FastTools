import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          FastTools
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="/herramientas" className="text-sm hover:underline">
            Herramientas
          </Link>
        </div>
      </div>
    </nav>
  );
}
