"use client";

import { useState } from "react";

export default function ContadorLineas() {
  const [text, setText] = useState("");

  const lineCount = text === "" ? 0 : text.split("\n").length;
  const nonEmptyLines = text === "" ? 0 : text.split("\n").filter((l) => l.trim() !== "").length;

  return (
    <div className="flex flex-col gap-5">
      <textarea
        className="w-full border border-border rounded-xl p-3 h-48 resize-y bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
        placeholder="Escribe o pega tu texto aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-5 text-sm">
          <p className="text-text">
            Líneas totales: <span className="font-bold">{lineCount}</span>
          </p>
          <p className="text-muted">
            No vacías: <span className="font-bold text-text">{nonEmptyLines}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigator.clipboard.writeText(text)}
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
    </div>
  );
}
