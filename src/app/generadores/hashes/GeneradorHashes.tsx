"use client";

import { useEffect, useId, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function bufferToHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

const algorithms = ["SHA-1", "SHA-256", "SHA-512"] as const;

export default function GeneradorHashes() {
  const inputId = useId();
  const [text, setText] = useState("");
  const [algorithm, setAlgorithm] = useState<(typeof algorithms)[number]>("SHA-256");
  const [hash, setHash] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    let active = true;

    async function generate() {
      if (text === "") {
        setHash("");
        return;
      }

      const encoded = new TextEncoder().encode(text);
      const digest = await crypto.subtle.digest(algorithm, encoded);

      if (active) {
        setHash(bufferToHex(digest));
      }
    }

    void generate();

    return () => {
      active = false;
    };
  }, [algorithm, text]);

  async function handleCopy() {
    await navigator.clipboard.writeText(hash);
    setFeedback("Hash copiado.");
  }

  function handleClear() {
    setText("");
    setFeedback("Campo limpiado.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-sm text-muted">
          Texto de entrada
        </label>
        <textarea
          id={inputId}
          className={`${fieldClassName} min-h-44 resize-y`}
          placeholder="Escribe o pega el texto para generar su hash."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setFeedback("");
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="hash-algorithm" className="text-sm text-muted">
          Algoritmo
        </label>
        <select
          id="hash-algorithm"
          value={algorithm}
          onChange={(event) => setAlgorithm(event.target.value as (typeof algorithms)[number])}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          {algorithms.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={hash === ""}
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copiar hash
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
        {feedback || "Genera hashes de texto con SHA-1, SHA-256 o SHA-512 directamente en el navegador."}
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Resultado</p>
        <textarea
          readOnly
          value={hash}
          className={`${fieldClassName} min-h-40 resize-y bg-background font-mono text-sm break-all`}
          placeholder="Aqui veras el hash generado."
        />
      </div>
    </div>
  );
}
