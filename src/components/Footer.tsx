import Link from "next/link";
import { CATEGORIES } from "@/lib/tools";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/80 bg-[#1c2434] text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold tracking-tight">FastTools</p>
            <p className="text-sm text-white/70 max-w-xl">
              Un taller digital de utilidades simples para escribir, generar y calcular sin
              vueltas. La idea es ahorrar tiempo en tareas chicas que aparecen todos los días.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-white/90 font-semibold">Secciones</p>
            <Link href="/herramientas" className="text-white/70 hover:text-white transition-colors">
              Herramientas
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {cat.shortTitle}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-white/90 font-semibold">Confianza</p>
            <Link href="/sobre" className="text-white/70 hover:text-white transition-colors">
              Sobre FastTools
            </Link>
            <Link href="/privacidad" className="text-white/70 hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-white/70 hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="/contacto" className="text-white/70 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>FastTools © 2026</span>
          <span>Hecho para resolver tareas pequeñas con menos fricción.</span>
        </div>
      </div>
    </footer>
  );
}
