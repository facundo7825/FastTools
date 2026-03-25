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
        <p className="text-sm text-gray-500 mb-1">Resultado:</p>
        <div className="w-full border rounded-lg p-3 min-h-12 bg-gray-50 text-gray-800 whitespace-pre-wrap break-words">
          {result}
        </div>
      </div>
    </div>
  );
}
