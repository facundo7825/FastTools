"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function parseValues(input: string) {
  return input
    .split(/[\n,; ]+/)
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => Number(value))
    .filter((value) => !Number.isNaN(value));
}

export default function CalculadoraPromedio() {
  const valuesId = useId();
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const values = useMemo(() => parseValues(input), [input]);
  const total = useMemo(() => values.reduce((acc, value) => acc + value, 0), [values]);
  const average = values.length > 0 ? total / values.length : 0;

  async function handleCopy() {
    await navigator.clipboard.writeText(average.toFixed(2));
    setFeedback("Promedio copiado.");
  }

  function handleClear() {
    setInput("");
    setFeedback("Valores limpiados.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={valuesId} className="text-sm text-muted">
          Valores para calcular el promedio
        </label>
        <textarea
          id={valuesId}
          className={`${fieldClassName} min-h-52 resize-y`}
          placeholder="Ejemplo: 8, 7, 9, 10 o una linea por numero"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Cantidad</p>
          <p className="mt-2 text-2xl font-bold text-text">{values.length}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Suma total</p>
          <p className="mt-2 text-2xl font-bold text-text">{total.toFixed(2)}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Promedio</p>
          <p className="mt-2 text-2xl font-bold text-primary">{average.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={values.length === 0}
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copiar promedio
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
        {feedback ||
          "Pega numeros separados por comas, espacios o lineas para calcular el promedio automaticamente."}
      </p>
    </div>
  );
}
