import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Consulta la política de privacidad de FastTools y cómo se manejan los datos al usar el sitio.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Política de privacidad | FastTools",
    description:
      "Consulta la política de privacidad de FastTools y cómo se manejan los datos al usar el sitio.",
    url: "/privacidad",
  },
  twitter: {
    title: "Política de privacidad | FastTools",
    description:
      "Consulta la política de privacidad de FastTools y cómo se manejan los datos al usar el sitio.",
  },
};

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb
        crumbs={[
          { href: "/", title: "Home" },
          { href: "/privacidad", title: "Privacidad" },
        ]}
      />

      <section className="border-b border-border pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">Política de privacidad</h1>
        <p className="text-muted max-w-3xl">
          Esta página resume de forma clara cómo FastTools trata la información cuando
          visitas y usas las herramientas disponibles en el sitio.
        </p>
      </section>

      <section className="grid gap-4">
        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Uso general</h2>
          <p className="text-sm text-muted">
            FastTools está pensado para funcionar directamente en el navegador. En la
            mayoría de las herramientas, el texto o los datos que escribes se procesan en
            tu propia sesión y no requieren crear una cuenta.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Datos compartidos por el usuario</h2>
          <p className="text-sm text-muted">
            Evita ingresar información sensible o confidencial en herramientas públicas.
            Aunque el objetivo del sitio es minimizar fricción y no pedir registro, cada
            usuario es responsable del contenido que decide procesar.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Cookies, analítica y terceros</h2>
          <p className="text-sm text-muted">
            Si en el futuro se integran analítica, publicidad o servicios de terceros,
            esta página deberá actualizarse para reflejar qué datos se recopilan, con qué
            finalidad y cómo se gestionan.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Actualizaciones</h2>
          <p className="text-sm text-muted">
            Esta política puede cambiar con el tiempo para acompañar mejoras del sitio,
            nuevas integraciones o cambios legales aplicables.
          </p>
        </div>
      </section>
    </div>
  );
}
