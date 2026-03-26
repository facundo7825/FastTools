"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function GeneradorQR() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        className="w-full border border-border rounded-xl p-3 bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
        placeholder="Escribe un texto o URL..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <div>
          <p className="text-sm font-medium text-muted mb-2">Resultado:</p>
          <div className="flex justify-center p-6 border border-border rounded-xl bg-background w-fit">
            <QRCodeSVG value={text} size={200} />
          </div>
        </div>
      )}
    </div>
  );
}
