"use client";

import { useState } from "react";

export default function QuitarEspacios() {
  const [text, setText] = useState("");

  const result = text.replace(/\s+/g, " ").trim();

  return (
    <div className="flex flex-col gap-4">
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
