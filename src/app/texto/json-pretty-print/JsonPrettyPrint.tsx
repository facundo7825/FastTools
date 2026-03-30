"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function JsonPrettyPrint() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [indentation, setIndentation] = useState(2);
  const [feedback, setFeedback] = useState("");

  const parsed = useMemo(() => {
    if (text.trim() === "") {
      return { valid: true, output: "", error: "" };
    }

    try {
      const value = JSON.parse(text);
      return {
        valid: true,
        output: JSON.stringify(value, null, indentation),
        error: "",
      };
    } catch (error) {
      return {
        valid: false,
        output: "",
        error: error instanceof Error ? error.message : "JSON invalido.",
      };
    }
  }, [indentation, text]);

  async function handleCopy() {
    await navigator.clipboard.writeText(parsed.output);
    setFeedback("JSON formateado copiado.");
  }

  function handleClear() {
    setText("");
    setFeedback("Campo limpiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-sm text-muted">
          JSON de entrada
        </label>
        <textarea
          id={inputId}
          className={`${fieldClassName} min-h-56 resize-y font-mono text-sm`}
          placeholder='{"nombre":"FastTools","tipo":"app"}'
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm text-muted" htmlFor="json-indentation">
          Espacios de indentacion
        </label>
        <select
          id="json-indentation"
          value={indentation}
          onChange={(event) => setIndentation(Number(event.target.value))}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          <option value={2}>2 espacios</option>
          <option value={4}>4 espacios</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={!parsed.valid || parsed.output.trim() === ""}
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

      <div className="rounded-2xl border border-border bg-background p-4">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Estado</p>
        <p className="mt-2 text-sm text-text" aria-live="polite">
          {parsed.valid
            ? feedback || "JSON valido. El resultado se actualiza automaticamente."
            : `Error: ${parsed.error}`}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Resultado formateado</p>
        <textarea
          readOnly
          value={parsed.output}
          className={`${fieldClassName} min-h-56 resize-y bg-background font-mono text-sm`}
          placeholder="Aqui veras el JSON ordenado y con indentacion."
        />
      </div>
    </div>
  );
}
