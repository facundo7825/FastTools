"use client";

import { useId, useState } from "react";

const CHARS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

const fieldClassName =
  "w-full border border-border rounded-xl p-3 bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function GeneradorPassword() {
  const lengthId = useId();
  const [length, setLength] = useState(16);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  function generate() {
    let charset = "";
    if (useLower) charset += CHARS.lower;
    if (useUpper) charset += CHARS.upper;
    if (useNumbers) charset += CHARS.numbers;
    if (useSymbols) charset += CHARS.symbols;

    if (!charset) {
      setFeedback("Selecciona al menos un tipo de caracter.");
      return;
    }

    let result = "";
    for (let index = 0; index < length; index++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(result);
    setFeedback("Contrasena generada.");
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(password);
    setFeedback("Contrasena copiada.");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={lengthId} className="text-sm text-muted">
          Longitud: {length}
        </label>
        <input
          id={lengthId}
          type="range"
          min={6}
          max={64}
          value={length}
          onChange={(e) => {
            setLength(Number(e.target.value));
            setFeedback("");
          }}
          className="w-full accent-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
        />
      </div>

      <fieldset className="flex flex-wrap gap-4">
        <legend className="text-sm text-muted mb-1">Tipos de caracteres</legend>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} className="accent-primary" />
          Minusculas
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} className="accent-primary" />
          Mayusculas
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className="accent-primary" />
          Numeros
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className="accent-primary" />
          Simbolos
        </label>
      </fieldset>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={generate}
          className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors w-fit"
        >
          Generar contrasena
        </button>
        {password && (
          <button
            onClick={handleCopy}
            className="px-4 py-2 border border-border text-text rounded-xl text-sm font-medium hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
          >
            Copiar
          </button>
        )}
      </div>

      <p className="text-xs text-muted" aria-live="polite">
        {feedback || "Configura la longitud y genera una contrasena segura."}
      </p>

      {password && (
        <div>
          <p className="text-sm font-medium text-muted mb-2">Resultado</p>
          <div className={`${fieldClassName} bg-background font-mono text-sm leading-relaxed break-all`}>
            {password}
          </div>
        </div>
      )}
    </div>
  );
}
