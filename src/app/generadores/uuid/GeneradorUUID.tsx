"use client";

import { useId, useState } from "react";

const panelClassName =
  "w-full border border-border rounded-xl p-4 bg-background text-text text-sm leading-relaxed whitespace-pre-wrap break-all";
const buttonClassName =
  "px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

/**
 * Fallback para contextos no seguros, donde crypto.randomUUID() no existe.
 * Usa crypto.getRandomValues() (nunca un PRNG no criptografico) y fija los
 * bits de version (4) y de variante (10xx) que exige un UUID v4.
 */
function generateFallbackUUID() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32),
  ].join("-");
}

function createUUID() {
  // randomUUID solo existe en contextos seguros, pero algunos navegadores
  // exponen la propiedad sobre HTTP y lanzan al invocarla: por eso no alcanza
  // con comprobar que este presente.
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    try {
      return crypto.randomUUID();
    } catch {
      return generateFallbackUUID();
    }
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
