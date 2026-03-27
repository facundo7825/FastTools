"use client";

import { useId, useState } from "react";

const fieldClassName =
  "w-full border border-border rounded-xl p-3 bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";
const buttonClassName =
  "px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function InvertirTexto() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const result = text.split("").reverse().join("");

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
          placeholder="Escribe o pega tu texto aqui..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setFeedback("");
          }}
        />
      </div>
      <div>
        <div className="flex flex-col gap-3 mb-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted">Resultado</p>
            <p className="text-xs text-muted" aria-live="polite">
              {feedback || "El texto invertido se actualiza automaticamente."}
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
          {result || "El texto invertido aparecera aqui."}
        </div>
      </div>
    </div>
  );
}
