import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Todas las herramientas",
  description:
    "Explora todas las herramientas online gratuitas de FastTools: texto, generadores y calculadoras en un solo indice.",
  alternates: {
    canonical: "/herramientas",
  },
  openGraph: {
    title: "Todas las herramientas | FastTools",
    description:
      "Explora todas las herramientas online gratuitas de FastTools: texto, generadores y calculadoras en un solo indice.",
    url: "/herramientas",
  },
  twitter: {
    title: "Todas las herramientas | FastTools",
    description:
      "Explora todas las herramientas online gratuitas de FastTools: texto, generadores y calculadoras en un solo indice.",
  },
};

const featuredTools = [
  { href: "/texto/generador-slug", title: "Generador de slug URL", description: "Convierte titulos y frases en URLs limpias listas para publicar.", badge: "Nueva" },
  { href: "/texto/densidad-keyword", title: "Densidad de keyword", description: "Mide coincidencias y presencia porcentual de una keyword en un texto.", badge: "SEO" },
  { href: "/texto/texto-a-lista", title: "Texto a lista", description: "Transforma secuencias separadas por comas o lineas en listas reutilizables.", badge: "Nueva" },
  { href: "/generadores/nombres-usuario", title: "Generador de nombres de usuario", description: "Saca ideas rapidas para redes, perfiles o proyectos.", badge: "Top" },
];

const categories = [
  {
    href: "/texto",
    title: "Texto",
    eyebrow: "Escribir mejor",
    description: "Herramientas para contar, limpiar, convertir, ordenar, analizar, generar slugs, crear listas y formatear contenido escrito.",
    tools: [
      { href: "/texto/contador-caracteres", title: "Contador de caracteres" },
      { href: "/texto/contador-caracteres-sin-espacios", title: "Contador sin espacios" },
      { href: "/texto/contador-palabras", title: "Contador de palabras" },
      { href: "/texto/contador-lineas", title: "Contador de lineas" },
      { href: "/texto/quitar-espacios", title: "Quitar espacios" },
      { href: "/texto/quitar-saltos-linea", title: "Quitar saltos de linea" },
      { href: "/texto/eliminar-lineas-duplicadas", title: "Eliminar lineas duplicadas" },
      { href: "/texto/ordenar-lineas", title: "Ordenar lineas alfabeticamente" },
      { href: "/texto/contador-palabras-clave", title: "Contador de palabras clave" },
      { href: "/texto/extraer-texto-html", title: "Extractor de texto de HTML" },
      { href: "/texto/json-pretty-print", title: "JSON pretty print" },
      { href: "/texto/minificar-texto", title: "Minificador de texto" },
      { href: "/texto/generador-slug", title: "Generador de slug URL" },
      { href: "/texto/densidad-keyword", title: "Densidad de keyword" },
      { href: "/texto/texto-a-lista", title: "Convertidor de texto a lista" },
      { href: "/texto/mayusculas-minusculas", title: "Mayusculas / Minusculas" },
      { href: "/texto/capitalizar-texto", title: "Capitalizar texto" },
      { href: "/texto/invertir-texto", title: "Invertir texto" },
    ],
  },
  {
    href: "/generadores",
    title: "Generadores",
    eyebrow: "Crear desde cero",
    description: "Para producir contrasenas, codigos QR, UUID, hashes, usernames y contenido de apoyo en segundos.",
    tools: [
      { href: "/generadores/password", title: "Generador de contrasenas" },
      { href: "/generadores/qr", title: "Generador de QR" },
      { href: "/generadores/uuid", title: "Generador de UUID" },
      { href: "/generadores/hashes", title: "Generador de hashes" },
      { href: "/generadores/nombres-usuario", title: "Generador de nombres de usuario" },
      { href: "/generadores/lorem-ipsum", title: "Generador de Lorem Ipsum" },
    ],
  },
  {
    href: "/calculadoras",
    title: "Calculadoras",
    eyebrow: "Resolver rapido",
    description: "Para cuentas utiles del dia a dia como porcentajes, promedios, aumentos y conversiones sin abrir planillas ni apps extra.",
    tools: [
      { href: "/calculadoras/porcentaje", title: "Calculadora de porcentaje" },
      { href: "/calculadoras/descuento", title: "Calculadora de descuento" },
      { href: "/calculadoras/promedio", title: "Calculadora de promedio" },
      { href: "/calculadoras/aumento-porcentual", title: "Calculadora de aumento porcentual" },
      { href: "/calculadoras/edad", title: "Calculadora de edad" },
      { href: "/calculadoras/regla-de-tres", title: "Regla de tres" },
      { href: "/calculadoras/imc", title: "Calculadora de IMC" },
      { href: "/calculadoras/temperatura", title: "Conversor de temperatura" },
    ],
  },
];

export default function Herramientas() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <Breadcrumb crumbs={[{ href: "/", label: "Home" }, { href: "/herramientas", label: "Herramientas" }]} />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Catalogo completo</p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">Todas las herramientas en un solo panel</h1>
        <p className="mt-4 max-w-3xl text-muted">
          FastTools organiza las utilidades por tipo de tarea para que encuentres rapido lo que necesitas: escribir mejor, generar recursos o resolver calculos.
        </p>
      </section>

      <section className="rounded-[1.8rem] border border-border bg-surface px-5 py-6 shadow-sm sm:px-7">
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Puntos de entrada</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-text">Herramientas nuevas para arrancar rapido</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featuredTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-[1.45rem] border border-border bg-background px-5 py-5 hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-semibold text-text group-hover:text-primary">{tool.title}</p>
                <span className="rounded-full bg-surface-strong px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
                  {tool.badge}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{tool.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-text group-hover:text-primary">
                Abrir herramienta {"->"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => (
          <section
            key={cat.href}
            className="rounded-[1.8rem] border border-border bg-surface px-5 py-6 shadow-sm sm:px-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">{cat.eyebrow}</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-text">{cat.title}</h2>
                <p className="mt-2 text-sm text-muted">{cat.description}</p>
              </div>
              <Link
                href={cat.href}
                className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-semibold text-text hover:border-primary hover:text-primary"
              >
                Ver categoria {"->"}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {cat.tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-[1.35rem] border border-border bg-background px-4 py-4 hover:-translate-y-0.5 hover:border-primary"
                >
                  <p className="text-sm font-semibold text-text group-hover:text-primary">{tool.title}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">Abrir herramienta</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
