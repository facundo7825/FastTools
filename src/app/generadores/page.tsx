import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  categoryJsonLd,
  categoryMetadata,
  getCategory,
  toolHref,
  toolsByCategory,
} from "@/lib/tool-registry";

export const metadata: Metadata = categoryMetadata("generadores");

export default function Generadores() {
  const category = getCategory("generadores");

  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd("generadores")) }}
      />
      <Breadcrumb
        crumbs={[
          { href: "/", title: "Inicio" },
          { href: "/generadores", title: category.shortTitle },
        ]}
      />

      <section className="rounded-[2rem] border border-border bg-surface px-6 py-7 shadow-sm sm:px-8 sm:py-9">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">{category.eyebrow}</p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-text">{category.title}</h1>
        <p className="mt-4 max-w-3xl text-muted">
          Para esos casos donde necesitas producir algo ya mismo: una contraseña, un QR, un UUID, hashes, nombres de usuario o texto de relleno para una maqueta.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {toolsByCategory("generadores").map((tool) => (
          <Link
            key={tool.slug}
            href={toolHref(tool)}
            className="group rounded-[1.6rem] border border-border bg-surface p-5 shadow-sm hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_26px_rgba(23,32,51,0.06)]"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Generadores</p>
            <p className="mt-3 text-lg font-semibold text-text group-hover:text-primary">{tool.title}</p>
            <p className="mt-2 text-sm text-muted">{tool.description}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-text group-hover:text-primary">
              Abrir herramienta {"->"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
