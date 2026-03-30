"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function minifyText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export default function MinificarTexto() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const minified = useMemo(() => minifyText(text), [text]);

  async function handleCopy() {
    await navigator.clipboard.writeText(minified);
    setFeedback("Texto minificado copiado.");
  }

  function handleClear() {
    setText("");
    setFeedback("Campo limpiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-sm text-muted">
          Texto de entrada
        </label>
        <textarea
          id={inputId}
          className={`${fieldClassName} min-h-56 resize-y`}
          placeholder="Pega aqui texto con espacios, saltos y separaciones que quieras compactar."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Caracteres originales</p>
          <p className="mt-2 text-2xl font-bold text-text">{text.length}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Caracteres minificados</p>
          <p className="mt-2 text-2xl font-bold text-text">{minified.length}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Ahorro estimado</p>
          <p className="mt-2 text-2xl font-bold text-text">
            {Math.max(text.length - minified.length, 0)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={minified.trim() === ""}
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copiar resultado
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
        {feedback || "La herramienta compacta espacios y saltos para dejar una sola version limpia."}
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Texto minificado</p>
        <textarea
          readOnly
          value={minified}
          className={`${fieldClassName} min-h-56 resize-y bg-background`}
          placeholder="Aqui veras el texto compactado."
        />
      </div>
    </div>
  );
}
