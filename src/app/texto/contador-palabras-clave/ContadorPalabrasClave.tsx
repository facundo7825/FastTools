"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function countWords(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

export default function ContadorPalabrasClave() {
  const keywordId = useId();
  const textId = useId();
  const [keyword, setKeyword] = useState("");
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const stats = useMemo(() => {
    const cleanKeyword = keyword.trim();
    const wordCount = countWords(text);

    if (cleanKeyword === "") {
      return { matches: 0, wordCount, density: 0 };
    }

    const regex = new RegExp(escapeRegExp(cleanKeyword), "gi");
    const matches = text.match(regex)?.length ?? 0;
    const keywordWords = countWords(cleanKeyword);
    const densityBase = wordCount === 0 ? 0 : (matches * keywordWords * 100) / wordCount;

    return {
      matches,
      wordCount,
      density: Number(densityBase.toFixed(2)),
    };
  }, [keyword, text]);

  async function handleCopyText() {
    await navigator.clipboard.writeText(text);
    setFeedback("Texto copiado.");
  }

  function handleClear() {
    setKeyword("");
    setText("");
    setFeedback("Campos limpiados.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor={keywordId} className="text-sm text-muted">
            Palabra o frase clave
          </label>
          <input
            id={keywordId}
            type="text"
            className={fieldClassName}
            placeholder="Ejemplo: marketing digital"
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value);
              setFeedback("");
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={textId} className="text-sm text-muted">
            Texto a analizar
          </label>
          <textarea
            id={textId}
            className={`${fieldClassName} min-h-56 resize-y`}
            placeholder="Pega aqui el texto completo que quieres revisar."
            value={text}
            onChange={(event) => {
              setText(event.target.value);
              setFeedback("");
            }}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Coincidencias</p>
          <p className="mt-2 text-2xl font-bold text-text">{stats.matches}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Palabras totales</p>
          <p className="mt-2 text-2xl font-bold text-text">{stats.wordCount}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Densidad estimada</p>
          <p className="mt-2 text-2xl font-bold text-text">{stats.density}%</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopyText}
          disabled={text.trim() === ""}
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

      <p className="text-sm text-muted" aria-live="polite">
        {feedback ||
          "Escribe una palabra o frase clave para ver coincidencias y densidad estimada en tiempo real."}
      </p>
    </div>
  );
}
