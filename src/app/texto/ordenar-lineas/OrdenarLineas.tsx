"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function splitLines(text: string) {
  return text.split(/\r?\n/);
}

export default function OrdenarLineas() {
  const textId = useId();
  const [text, setText] = useState("");
  const [ignoreCase, setIgnoreCase] = useState(true);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [feedback, setFeedback] = useState("");

  const sortedText = useMemo(() => {
    const lines = splitLines(text);
    const prepared = removeEmpty ? lines.filter((line) => line.trim() !== "") : lines;

    return [...prepared]
      .sort((first, second) =>
        first.localeCompare(second, "es", {
          sensitivity: ignoreCase ? "base" : "variant",
        }),
      )
      .join("\n");
  }, [ignoreCase, removeEmpty, text]);

  const totalLines = useMemo(
    () => splitLines(text).filter((line) => line.trim() !== "").length,
    [text],
  );

  async function handleCopy() {
    await navigator.clipboard.writeText(sortedText);
    setFeedback("Lineas ordenadas copiadas.");
  }

  function handleClear() {
    setText("");
    setFeedback("Texto limpiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={textId} className="text-sm text-muted">
          Lineas a ordenar
        </label>
        <textarea
          id={textId}
          className={`${fieldClassName} min-h-52 resize-y`}
          placeholder="Pega aqui una lista con una linea por elemento."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <fieldset className="flex flex-wrap gap-4">
        <legend className="mb-1 text-sm text-muted">Opciones</legend>
        <label className="flex items-center gap-2 text-sm text-text">
          <input
            type="checkbox"
            checked={ignoreCase}
            onChange={(event) => setIgnoreCase(event.target.checked)}
            className="accent-primary"
          />
          Ignorar mayusculas y minusculas
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input
            type="checkbox"
            checked={removeEmpty}
            onChange={(event) => setRemoveEmpty(event.target.checked)}
            className="accent-primary"
          />
          Quitar lineas vacias
        </label>
      </fieldset>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={sortedText.trim() === ""}
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

      <div className="grid gap-3 rounded-2xl border border-border bg-background p-4 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Lineas detectadas</p>
          <p className="mt-1 text-2xl font-bold text-text">{totalLines}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Estado</p>
          <p className="mt-1 text-sm text-text" aria-live="polite">
            {feedback || "El resultado se actualiza automaticamente al editar el texto."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Resultado ordenado</p>
        <textarea
          readOnly
          value={sortedText}
          className={`${fieldClassName} min-h-52 resize-y bg-background`}
          placeholder="Aqui veras las lineas ordenadas alfabeticamente."
        />
      </div>
    </div>
  );
}
