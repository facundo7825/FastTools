"use client";

import { useState } from "react";

export default function ContadorPalabras() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="w-full border rounded-lg p-3 h-48 resize-y"
        placeholder="Escribe o pega tu texto aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <p className="text-gray-700">
          Palabras: <span className="font-bold">{wordCount}</span>
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => navigator.clipboard.writeText(text)}
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
    </div>
  );
}
