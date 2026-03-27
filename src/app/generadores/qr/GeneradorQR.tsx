"use client";

import { useId, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function GeneradorQR() {
  const inputId = useId();
  const qrWrapperRef = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  function getQrSvg() {
    return qrWrapperRef.current?.querySelector("svg") ?? null;
  }

  async function createPngBlob() {
    const svg = getQrSvg();

    if (!svg) {
      throw new Error("No se pudo generar el QR.");
    }

    const serializedSvg = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([serializedSvg], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);

    try {
      const image = await new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("No se pudo cargar la imagen del QR."));
        img.src = svgUrl;
      });

      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("No se pudo preparar la descarga del QR.");
      }

      context.drawImage(image, 0, 0);

      return await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
            return;
          }

          reject(new Error("No se pudo exportar el QR en PNG."));
        }, "image/png");
      });
    } finally {
      URL.revokeObjectURL(svgUrl);
    }
  }

  async function handleDownload() {
    try {
      const pngBlob = await createPngBlob();
      const url = URL.createObjectURL(pngBlob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "fasttools-qr.png";
      link.click();

      URL.revokeObjectURL(url);
      setFeedback("QR descargado en PNG.");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "No se pudo descargar el QR.");
    }
  }

  async function handleCopy() {
    if (!window.ClipboardItem || !navigator.clipboard?.write) {
      setFeedback("Tu navegador no permite copiar imágenes.");
      return;
    }

    try {
      const pngBlob = await createPngBlob();
      await navigator.clipboard.write([new window.ClipboardItem({ "image/png": pngBlob })]);
      setFeedback("QR copiado como imagen.");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "No se pudo copiar el QR.");
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm text-muted">
          Texto o URL
        </label>
        <input
          id={inputId}
          type="text"
          className="w-full border border-border rounded-xl p-3 bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
          placeholder="Escribe un texto o URL..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setFeedback("");
          }}
        />
      </div>
      {text && (
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-medium text-muted mb-2">Resultado:</p>
            <div
              ref={qrWrapperRef}
              className="flex justify-center p-6 border border-border rounded-xl bg-background w-fit"
            >
              <QRCodeSVG value={text} size={200} includeMargin />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background transition-colors"
            >
              Descargar PNG
            </button>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-sm border border-border text-text rounded-xl hover:border-primary hover:text-primary active:bg-background transition-colors"
            >
              Copiar imagen
            </button>
          </div>

          <p className="text-xs text-muted" aria-live="polite">
            {feedback || "Podés descargar el QR en PNG o copiar la imagen al portapapeles."}
          </p>
        </div>
      )}
      {!text && (
        <p className="text-xs text-muted">
          Escribí un texto o una URL para generar el código QR.
        </p>
      )}
    </div>
  );
}
