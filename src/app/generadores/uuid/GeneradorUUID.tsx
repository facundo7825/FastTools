"use client";

import { useId, useState } from "react";

const panelClassName =
  "w-full border border-border rounded-xl p-4 bg-background text-text text-sm leading-relaxed whitespace-pre-wrap break-all";
const buttonClassName =
  "px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

function generateFallbackUUID() {
  const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return template.replace(/[xy]/g, (char) => {
    const random = Math.floor(Math.random() * 16);
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function createUUID() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return generateFallbackUUID();
}

export default function GeneradorUUID() {
  const amountId = useId();
  const [amount, setAmount] = useState(3);
  const [uuids, setUuids] = useState<string[]>(() => Array.from({ length: 3 }, () => createUUID()));
  const [feedback, setFeedback] = useState("");

  function handleGenerate(nextAmount = amount) {
    setUuids(Array.from({ length: nextAmount }, () => createUUID()));
    setFeedback("UUIDs generados.");
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(uuids.join("\n"));
    setFeedback("UUIDs copiados.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={amountId} className="text-sm text-muted">
          Cantidad: {amount}
        </label>
        <input
          id={amountId}
          type="range"
          min={1}
          max={10}
          value={amount}
          onChange={(event) => {
            const nextAmount = Number(event.target.value);
            setAmount(nextAmount);
            handleGenerate(nextAmount);
          }}
          className="w-40 accent-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
        />
      </div>

      <div className={panelClassName}>{uuids.join("\n")}</div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex gap-2">
          <button onClick={() => handleGenerate()} className={buttonClassName}>
            Generar nuevos
          </button>
          <button onClick={handleCopy} className={buttonClassName}>
            Copiar
          </button>
        </div>
        <p className="text-xs text-muted" aria-live="polite">
          {feedback || "Puedes generar uno o varios UUID v4 y copiarlos juntos."}
        </p>
      </div>
    </div>
  );
}
