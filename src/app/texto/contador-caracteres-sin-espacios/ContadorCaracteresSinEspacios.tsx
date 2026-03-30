"use client";

import { useId, useState } from "react";

const fieldClassName =
  "w-full border border-border rounded-xl p-3 bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";
const buttonClassName =
  "px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function ContadorCaracteresSinEspacios() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const count = text.replace(/\s/g, "").length;

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setFeedback("Texto copiado.");
  }

  function handleClear() {
    setText("");
    setFeedback("Texto limpiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm text-muted">
          Texto
        </label>
        <textarea
          id={inputId}
          className={`${fieldClassName} h-48 resize-y`}
          placeholder="Escribe o pega tu texto aqui..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-text text-sm">
            Caracteres sin espacios: <span className="font-bold">{count}</span>
          </p>
          <p className="text-xs text-muted" aria-live="polite">
            {feedback || "Se excluyen espacios, tabulaciones y saltos de linea."}
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
    </div>
  );
}
