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

export default function DensidadKeyword() {
  const keywordId = useId();
  const textId = useId();
  const [keyword, setKeyword] = useState("");
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const stats = useMemo(() => {
    const cleanKeyword = keyword.trim();
    const totalWords = countWords(text);

    if (cleanKeyword === "") {
      return { matches: 0, totalWords, density: 0 };
    }

    const regex = new RegExp(escapeRegExp(cleanKeyword), "gi");
    const matches = text.match(regex)?.length ?? 0;
    const keywordWords = countWords(cleanKeyword);
    const density = totalWords === 0 ? 0 : (matches * keywordWords * 100) / totalWords;

    return {
      matches,
      totalWords,
      density: Number(density.toFixed(2)),
    };
  }, [keyword, text]);

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
            Keyword o frase clave
          </label>
          <input
            id={keywordId}
            type="text"
            className={fieldClassName}
            placeholder="Ejemplo: diseno web"
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
            placeholder="Pega aqui el contenido completo para medir la densidad."
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
          <p className="mt-2 text-2xl font-bold text-text">{stats.totalWords}</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Densidad</p>
          <p className="mt-2 text-2xl font-bold text-primary">{stats.density}%</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
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
          "Mide la densidad estimada de una keyword dentro de cualquier texto en tiempo real."}
      </p>
    </div>
  );
}
