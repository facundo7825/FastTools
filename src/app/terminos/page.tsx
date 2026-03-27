import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terminos de uso",
  description:
    "Consulta los terminos de uso de FastTools para entender el alcance, responsabilidades y condiciones del sitio.",
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: "Terminos de uso | FastTools",
    description:
      "Consulta los terminos de uso de FastTools para entender el alcance, responsabilidades y condiciones del sitio.",
    url: "/terminos",
  },
  twitter: {
    title: "Terminos de uso | FastTools",
    description:
      "Consulta los terminos de uso de FastTools para entender el alcance, responsabilidades y condiciones del sitio.",
  },
};

export default function TerminosPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/terminos", label: "Terminos" },
        ]}
      />

      <section className="border-b border-border pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">Terminos de uso</h1>
        <p className="text-muted max-w-3xl">
          Estos terminos resumen como puede utilizarse FastTools y que limites o
          responsabilidades aplican al acceder al sitio.
        </p>
      </section>

      <section className="grid gap-4">
        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Uso del sitio</h2>
          <p className="text-sm text-muted">
            Las herramientas se ofrecen para uso general e informativo. Puedes usarlas
            para tareas cotidianas siempre que el uso sea legal y no perjudique el
            funcionamiento del servicio.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Disponibilidad</h2>
          <p className="text-sm text-muted">
            FastTools puede cambiar, actualizarse o interrumpirse sin aviso previo. Se
            busca mantener el sitio disponible, pero no se garantiza disponibilidad
            continua o ausencia total de errores.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Responsabilidad del usuario</h2>
          <p className="text-sm text-muted">
            Cada usuario es responsable de revisar los resultados antes de utilizarlos en
            contextos importantes. Las herramientas ayudan a resolver tareas rapidas, pero
            no sustituyen validacion profesional cuando haga falta.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Cambios en estos terminos</h2>
          <p className="text-sm text-muted">
            Estos terminos pueden actualizarse a medida que el proyecto evolucione. El uso
            continuado del sitio despues de cambios implica aceptar la version vigente.
          </p>
        </div>
      </section>
    </div>
  );
}
