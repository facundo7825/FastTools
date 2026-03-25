"use client";

import { useState } from "react";

export default function MayusculasMinusculas() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"upper" | "lower">("upper");

  const result = mode === "upper" ? text.toUpperCase() : text.toLowerCase();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <button
          className={`px-4 py-2 rounded-lg border text-sm font-medium ${mode === "upper" ? "bg-black text-white" : "hover:bg-gray-50"}`}
          onClick={() => setMode("upper")}
        >
          MAYÚSCULAS
        </button>
        <button
          className={`px-4 py-2 rounded-lg border text-sm font-medium ${mode === "lower" ? "bg-black text-white" : "hover:bg-gray-50"}`}
          onClick={() => setMode("lower")}
        >
          minúsculas
        </button>
      </div>
      <textarea
        className="w-full border rounded-lg p-3 h-48 resize-y"
        placeholder="Escribe o pega tu texto aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm text-gray-500">Resultado:</p>
          <div className="flex gap-2">
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Copiar
            </button>
            <button
              onClick={() => setText("")}
              className="px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Limpiar
            </button>
          </div>
        </div>
        <div className="w-full border rounded-xl p-4 min-h-16 bg-gray-50 text-gray-800 text-sm leading-relaxed whitespace-pre-wrap break-words">
          {result}
        </div>
      </div>
    </div>
  );
}
