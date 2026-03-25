"use client";

import { useState } from "react";

export default function CapitalizarTexto() {
  const [text, setText] = useState("");

  const result = text.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="flex flex-col gap-4">
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
        <div className="w-full border rounded-lg p-3 min-h-12 bg-gray-50 text-gray-800 whitespace-pre-wrap break-words">
          {result}
        </div>
      </div>
    </div>
  );
}
