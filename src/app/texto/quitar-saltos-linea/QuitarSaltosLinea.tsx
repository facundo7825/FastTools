"use client";

import { useId, useState } from "react";

const fieldClassName =
  "w-full border border-border rounded-xl p-3 bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";
const buttonClassName =
  "px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function QuitarSaltosLinea() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const result = text.replace(/\r?\n+/g, " ").replace(/\s{2,}/g, " ").trim();

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
          Texto original
        </label>
        <textarea
          id={inputId}
          className={`${fieldClassName} h-48 resize-y`}
          placeholder="Pega aqui un texto con varias lineas..."
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
            <p className="text-sm text-muted">Resultado en una sola linea</p>
            <p className="text-xs text-muted" aria-live="polite">
              {feedback || "Los saltos de linea se reemplazan por espacios."}
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
          {result || "El texto sin saltos de linea aparecera aqui."}
        </div>
      </div>
    </div>
  );
}
