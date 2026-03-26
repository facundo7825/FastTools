"use client";

import { useState } from "react";

const CHARS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

export default function GeneradorPassword() {
  const [length, setLength] = useState(16);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("");

  function generate() {
    let charset = "";
    if (useLower) charset += CHARS.lower;
    if (useUpper) charset += CHARS.upper;
    if (useNumbers) charset += CHARS.numbers;
    if (useSymbols) charset += CHARS.symbols;
    if (!charset) return;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-muted">Longitud: {length}</label>
        <input
          type="range"
          min={6}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} className="accent-primary" />
          Minúsculas
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} className="accent-primary" />
          Mayúsculas
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className="accent-primary" />
          Números
        </label>
        <label className="flex items-center gap-2 text-sm text-text">
          <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className="accent-primary" />
          Símbolos
        </label>
      </div>

      <button
        onClick={generate}
        className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors w-fit"
      >
        Generar contraseña
      </button>

      {password && (
        <div>
          <p className="text-sm font-medium text-muted mb-2">Resultado:</p>
          <div className="w-full border border-border rounded-xl p-4 bg-background font-mono text-text text-sm leading-relaxed break-all">
            {password}
          </div>
        </div>
      )}
    </div>
  );
}
