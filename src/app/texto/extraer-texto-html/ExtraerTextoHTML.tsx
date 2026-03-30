"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function extractTextFromHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|section|article|li|h[1-6])>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

export default function ExtraerTextoHTML() {
  const inputId = useId();
  const [html, setHtml] = useState("");
  const [feedback, setFeedback] = useState("");

  const result = useMemo(() => extractTextFromHtml(html), [html]);

  async function handleCopy() {
    await navigator.clipboard.writeText(result);
    setFeedback("Texto extraido copiado.");
  }

  function handleClear() {
    setHtml("");
    setFeedback("Campo limpiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-sm text-muted">
          HTML de entrada
        </label>
        <textarea
          id={inputId}
          className={`${fieldClassName} min-h-56 resize-y font-mono text-sm`}
          placeholder="<h1>Titulo</h1><p>Este es un ejemplo.</p>"
          value={html}
          onChange={(event) => {
            setHtml(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={result.trim() === ""}
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copiar texto
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
        >
          Limpiar
        </button>
      </div>

      <div className="grid gap-3 rounded-2xl border border-border bg-background p-4 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Caracteres extraidos</p>
          <p className="mt-1 text-2xl font-bold text-text">{result.length}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Estado</p>
          <p className="mt-1 text-sm text-text" aria-live="polite">
            {feedback || "El texto plano se genera automaticamente al pegar el HTML."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Texto extraido</p>
        <textarea
          readOnly
          value={result}
          className={`${fieldClassName} min-h-56 resize-y bg-background`}
          placeholder="Aqui veras el contenido de texto sin etiquetas HTML."
        />
      </div>
    </div>
  );
}
