import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Encuentra la informacion de contacto y soporte general de FastTools para consultas, sugerencias o reportes.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | FastTools",
    description:
      "Encuentra la informacion de contacto y soporte general de FastTools para consultas, sugerencias o reportes.",
    url: "/contacto",
  },
  twitter: {
    title: "Contacto | FastTools",
    description:
      "Encuentra la informacion de contacto y soporte general de FastTools para consultas, sugerencias o reportes.",
  },
};

const cards = [
  {
    title: "Consultas y sugerencias",
    text: "Si mas adelante se habilita un canal directo de contacto, esta sera la pagina oficial para publicarlo.",
  },
  {
    title: "Reportes de errores",
    text: "Si detectas un fallo, toma nota del caso, de la pagina y del dato usado. Ese contexto acelera mucho la correccion.",
  },
];

export default function ContactoPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/contacto", label: "Contacto" },
        ]}
      />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Soporte y feedback
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">Contacto</h1>
        <p className="mt-4 max-w-3xl text-muted">
          Esta pagina concentra la referencia de soporte general para consultas, sugerencias
          y reportes relacionados con FastTools.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="rounded-[1.6rem] border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-text">{card.title}</h2>
            <p className="mt-2 text-sm text-muted">{card.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[1.8rem] border border-border bg-background p-6">
        <h2 className="text-lg font-semibold text-text mb-2">Siguiente paso recomendado</h2>
        <p className="text-sm text-muted">
          Antes de publicar el sitio de forma definitiva, conviene reemplazar esta pagina
          con un canal real de contacto: email, formulario o perfil oficial del proyecto.
        </p>
      </section>
    </div>
  );
}
