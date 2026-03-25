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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700">Longitud: {length}</label>
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
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} />
          Minúsculas
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} />
          Mayúsculas
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} />
          Números
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} />
          Símbolos
        </label>
      </div>

      <button
        onClick={generate}
        className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 w-fit"
      >
        Generar contraseña
      </button>

      {password && (
        <div>
          <p className="text-sm text-gray-500 mb-1">Contraseña:</p>
          <div className="w-full border rounded-lg p-3 bg-gray-50 font-mono text-gray-800 break-all">
            {password}
          </div>
        </div>
      )}
    </div>
  );
}
