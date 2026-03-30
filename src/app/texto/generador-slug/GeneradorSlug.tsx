"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function slugify(text: string, separator: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, separator)
    .replace(new RegExp(`${separator}{2,}`, "g"), separator)
    .replace(new RegExp(`^${separator}|${separator}$`, "g"), "");
}

export default function GeneradorSlug() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [separator, setSeparator] = useState("-");
  const [feedback, setFeedback] = useState("");

  const slug = useMemo(() => slugify(text, separator), [separator, text]);

  async function handleCopy() {
    await navigator.clipboard.writeText(slug);
    setFeedback("Slug copiado.");
  }

  function handleClear() {
    setText("");
    setFeedback("Campo limpiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-sm text-muted">
          Texto base
        </label>
        <textarea
          id={inputId}
          className={`${fieldClassName} min-h-40 resize-y`}
          placeholder="Ejemplo: Como crear una URL limpia para mi articulo"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="slug-separator" className="text-sm text-muted">
          Separador
        </label>
        <select
          id="slug-separator"
          value={separator}
          onChange={(event) => setSeparator(event.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          <option value="-">Guion medio</option>
          <option value="_">Guion bajo</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={slug === ""}
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copiar slug
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
        >
          Limpiar
        </button>
      </div>

      <p className="text-sm text-muted" aria-live="polite">
        {feedback || "Convierte texto en una version corta, limpia y lista para usar en URLs."}
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Slug generado</p>
        <textarea
          readOnly
          value={slug}
          className={`${fieldClassName} min-h-32 resize-y bg-background`}
          placeholder="Aqui veras el slug listo para usar."
        />
      </div>
    </div>
  );
}
