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
      <p className="text-gray-700">
        Palabras: <span className="font-bold">{wordCount}</span>
      </p>
    </div>
  );
}
