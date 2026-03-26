"use client";

import { useState } from "react";

export default function CapitalizarTexto() {
  const [text, setText] = useState("");

  const result = text.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="flex flex-col gap-5">
      <textarea
        className="w-full border border-border rounded-xl p-3 h-48 resize-y bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
        placeholder="Escribe o pega tu texto aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-muted">Resultado:</p>
          <div className="flex gap-2">
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background transition-colors"
            >
              Copiar
            </button>
            <button
              onClick={() => setText("")}
              className="px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background transition-colors"
            >
              Limpiar
            </button>
          </div>
        </div>
        <div className="w-full border border-border rounded-xl p-4 min-h-16 bg-background text-text text-sm leading-relaxed whitespace-pre-wrap break-words">
          {result}
        </div>
      </div>
    </div>
  );
}
