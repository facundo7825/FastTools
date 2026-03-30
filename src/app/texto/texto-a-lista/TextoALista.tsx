"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function splitItems(text: string) {
  return text
    .split(/[\n,;]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function TextoALista() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [prefix, setPrefix] = useState("- ");
  const [feedback, setFeedback] = useState("");

  const result = useMemo(() => splitItems(text).map((item) => `${prefix}${item}`).join("\n"), [prefix, text]);
  const totalItems = useMemo(() => splitItems(text).length, [text]);

  async function handleCopy() {
    await navigator.clipboard.writeText(result);
    setFeedback("Lista copiada.");
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
          className={`${fieldClassName} min-h-48 resize-y`}
          placeholder="Ejemplo: manzana, banana, pera"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="list-prefix" className="text-sm text-muted">
          Formato de lista
        </label>
        <select
          id="list-prefix"
          value={prefix}
          onChange={(event) => setPrefix(event.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          <option value="- ">Guiones</option>
          <option value="• ">Vinetas</option>
          <option value="1. ">Numerada simple</option>
        </select>
      </div>

      <div className="rounded-2xl border border-border bg-background p-4">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Items detectados</p>
        <p className="mt-2 text-2xl font-bold text-text">{totalItems}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={result === ""}
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copiar lista
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
        {feedback || "Convierte texto separado por comas, punto y coma o lineas en una lista limpia."}
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Resultado</p>
        <textarea
          readOnly
          value={result}
          className={`${fieldClassName} min-h-48 resize-y bg-background`}
          placeholder="Aqui veras el texto convertido en lista."
        />
      </div>
    </div>
  );
}
