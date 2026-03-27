"use client";

import { useId, useState } from "react";

const fieldClassName =
  "w-full border border-border rounded-xl p-3 bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";
const buttonClassName =
  "px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function ContadorLineas() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const lineCount = text === "" ? 0 : text.split("\n").length;
  const nonEmptyLines = text === "" ? 0 : text.split("\n").filter((line) => line.trim() !== "").length;

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
          onChange={(e) => {
            setText(e.target.value);
            setFeedback("");
          }}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap gap-5 text-sm">
            <p className="text-text">
              Lineas totales: <span className="font-bold">{lineCount}</span>
            </p>
            <p className="text-muted">
              No vacias: <span className="font-bold text-text">{nonEmptyLines}</span>
            </p>
          </div>
          <p className="text-xs text-muted" aria-live="polite">
            {feedback || "Podes copiar el texto o limpiar el campo."}
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
