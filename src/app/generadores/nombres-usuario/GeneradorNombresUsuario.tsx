"use client";

import { useId, useMemo, useState } from "react";

const adjectives = [
  "luna",
  "pixel",
  "bravo",
  "neon",
  "claro",
  "norte",
  "fuego",
  "atlas",
  "viva",
  "delta",
];

const nouns = [
  "studio",
  "signal",
  "wave",
  "lab",
  "spark",
  "crew",
  "forge",
  "fox",
  "base",
  "pulse",
];

function pickRandom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function buildUsername(base: string, includeNumbers: boolean, separator: string) {
  const segments = [pickRandom(adjectives), base || pickRandom(nouns), pickRandom(nouns)];
  const core = Array.from(new Set(segments)).join(separator);

  if (!includeNumbers) {
    return core;
  }

  return `${core}${separator}${Math.floor(100 + Math.random() * 900)}`;
}

export default function GeneradorNombresUsuario() {
  const topicId = useId();
  const amountId = useId();
  const [topic, setTopic] = useState("");
  const [amount, setAmount] = useState(6);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [separator, setSeparator] = useState("");
  const [feedback, setFeedback] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const normalizedTopic = useMemo(
    () => topic.trim().toLowerCase().replace(/\s+/g, separator || ""),
    [separator, topic],
  );

  function generate() {
    const nextResults = Array.from({ length: amount }, () =>
      buildUsername(normalizedTopic, includeNumbers, separator),
    );

    setResults(Array.from(new Set(nextResults)));
    setFeedback("Nombres de usuario generados.");
  }

  async function handleCopyAll() {
    await navigator.clipboard.writeText(results.join("\n"));
    setFeedback("Lista copiada.");
  }

  async function handleCopyOne(value: string) {
    await navigator.clipboard.writeText(value);
    setFeedback(`Copiado: ${value}`);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={topicId} className="text-sm text-muted">
            Tema o palabra base
          </label>
          <input
            id={topicId}
            type="text"
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
              setFeedback("");
            }}
            className="w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="Ejemplo: gamer, arte, cafe, dev"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={amountId} className="text-sm text-muted">
            Cantidad de opciones
          </label>
          <input
            id={amountId}
            type="range"
            min={4}
            max={12}
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            className="w-full rounded-lg accent-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <p className="text-sm text-text">{amount} sugerencias</p>
        </div>
      </div>

      <fieldset className="flex flex-wrap gap-4">
        <legend className="mb-1 text-sm text-muted">Opciones</legend>
        <label className="flex items-center gap-2 text-sm text-text">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(event) => setIncludeNumbers(event.target.checked)}
            className="accent-primary"
          />
          Incluir numeros
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <span>Separador</span>
          <select
            value={separator}
            onChange={(event) => setSeparator(event.target.value)}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="">Sin separador</option>
            <option value=".">Punto</option>
            <option value="_">Guion bajo</option>
          </select>
        </label>
      </fieldset>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={generate}
          className="w-fit rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-strong"
        >
          Generar nombres
        </button>
        {results.length > 0 && (
          <button
            type="button"
            onClick={handleCopyAll}
            className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
          >
            Copiar lista
          </button>
        )}
      </div>

      <p className="text-sm text-muted" aria-live="polite">
        {feedback || "Genera opciones rapidas para perfiles, proyectos o redes sociales."}
      </p>

      {results.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {results.map((result) => (
            <div
              key={result}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
            >
              <span className="font-medium text-text">{result}</span>
              <button
                type="button"
                onClick={() => handleCopyOne(result)}
                className="text-sm font-semibold text-text transition-colors hover:text-primary"
              >
                Copiar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
