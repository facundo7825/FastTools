"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function GeneradorQR() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        className="w-full border rounded-lg p-3"
        placeholder="Escribe un texto o URL..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <div className="flex justify-center p-4 border rounded-lg bg-white w-fit">
          <QRCodeSVG value={text} size={200} />
        </div>
      )}
    </div>
  );
}
