"use client";

import { useId, useState } from "react";

const fieldClassName =
  "w-full border border-border rounded-xl p-3 bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";
const buttonClassName =
  "px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function EliminarLineasDuplicadas() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const lines = text.split(/\r?\n/);
  const seen = new Set<string>();
  const resultLines = lines.filter((line) => {
    if (seen.has(line)) {
      return false;
    }
    seen.add(line);
    return true;
  });
  const result = resultLines.join("\n").trim();

  async function handleCopy() {
    await navigator.clipboard.writeText(result);
    setFeedback("Resultado copiado.");
  }

  function handleClear() {
    setText("");
    setFeedback("Texto limpiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm text-muted">
          Lista o texto original
        </label>
        <textarea
          id={inputId}
          className={`${fieldClassName} h-48 resize-y`}
          placeholder="Pega lineas repetidas para dejarlas una sola vez..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div>
        <div className="flex flex-col gap-3 mb-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted">Resultado sin duplicados</p>
            <p className="text-xs text-muted" aria-live="polite">
              {feedback || "Se conserva la primera aparicion de cada linea."}
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={handleCopy} className={buttonClassName}>
              Copiar
            </button>
            <button onClick={handleClear} className={buttonClassName}>
              Limpiar
            </button>
          </div>
        </div>

        <div className="w-full border border-border rounded-xl p-4 min-h-16 bg-background text-text text-sm leading-relaxed whitespace-pre-wrap break-words">
          {result || "Las lineas unicas apareceran aqui."}
        </div>
      </div>
    </div>
  );
}
