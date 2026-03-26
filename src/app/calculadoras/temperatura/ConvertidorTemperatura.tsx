"use client";

import { useState } from "react";

function round(n: number, decimals = 4): string {
  return parseFloat(n.toFixed(decimals)).toString();
}

export default function ConvertidorTemperatura() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  function handleCelsius(val: string) {
    setCelsius(val);
    const c = parseFloat(val);
    if (!isNaN(c)) {
      setFahrenheit(round((c * 9) / 5 + 32));
      setKelvin(round(c + 273.15));
    } else {
      setFahrenheit("");
      setKelvin("");
    }
  }

  function handleFahrenheit(val: string) {
    setFahrenheit(val);
    const f = parseFloat(val);
    if (!isNaN(f)) {
      const c = ((f - 32) * 5) / 9;
      setCelsius(round(c));
      setKelvin(round(c + 273.15));
    } else {
      setCelsius("");
      setKelvin("");
    }
  }

  function handleKelvin(val: string) {
    setKelvin(val);
    const k = parseFloat(val);
    if (!isNaN(k)) {
      const c = k - 273.15;
      setCelsius(round(c));
      setFahrenheit(round((c * 9) / 5 + 32));
    } else {
      setCelsius("");
      setFahrenheit("");
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-sm text-muted">Celsius (°C)</label>
          <input
            type="number"
            className="border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            placeholder="Ej: 100"
            value={celsius}
            onChange={(e) => handleCelsius(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-sm text-muted">Fahrenheit (°F)</label>
          <input
            type="number"
            className="border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            placeholder="Ej: 212"
            value={fahrenheit}
            onChange={(e) => handleFahrenheit(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-sm text-muted">Kelvin (K)</label>
          <input
            type="number"
            className="border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            placeholder="Ej: 373.15"
            value={kelvin}
            onChange={(e) => handleKelvin(e.target.value)}
          />
        </div>
      </div>
      <p className="text-xs text-muted">Escribí en cualquier campo y los otros se actualizan automáticamente.</p>
    </div>
  );
}
