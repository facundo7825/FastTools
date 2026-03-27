import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Politica de privacidad",
  description:
    "Consulta la politica de privacidad de FastTools y como se manejan los datos al usar el sitio.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Politica de privacidad | FastTools",
    description:
      "Consulta la politica de privacidad de FastTools y como se manejan los datos al usar el sitio.",
    url: "/privacidad",
  },
  twitter: {
    title: "Politica de privacidad | FastTools",
    description:
      "Consulta la politica de privacidad de FastTools y como se manejan los datos al usar el sitio.",
  },
};

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/privacidad", label: "Privacidad" },
        ]}
      />

      <section className="border-b border-border pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">Politica de privacidad</h1>
        <p className="text-muted max-w-3xl">
          Esta pagina resume de forma clara como FastTools trata la informacion cuando
          visitas y usas las herramientas disponibles en el sitio.
        </p>
      </section>

      <section className="grid gap-4">
        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Uso general</h2>
          <p className="text-sm text-muted">
            FastTools esta pensado para funcionar directamente en el navegador. En la
            mayoria de las herramientas, el texto o los datos que escribes se procesan en
            tu propia sesion y no requieren crear una cuenta.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Datos compartidos por el usuario</h2>
          <p className="text-sm text-muted">
            Evita ingresar informacion sensible o confidencial en herramientas publicas.
            Aunque el objetivo del sitio es minimizar friccion y no pedir registro, cada
            usuario es responsable del contenido que decide procesar.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Cookies, analitica y terceros</h2>
          <p className="text-sm text-muted">
            Si en el futuro se integran analitica, publicidad o servicios de terceros,
            esta pagina debera actualizarse para reflejar que datos se recopilan, con que
            finalidad y como se gestionan.
          </p>
        </div>

        <div className="border border-border rounded-2xl bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text mb-2">Actualizaciones</h2>
          <p className="text-sm text-muted">
            Esta politica puede cambiar con el tiempo para acompañar mejoras del sitio,
            nuevas integraciones o cambios legales aplicables.
          </p>
        </div>
      </section>
    </div>
  );
}
