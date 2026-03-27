"use client";

import { useId, useState } from "react";

function round(value: number, decimals = 4): string {
  return parseFloat(value.toFixed(decimals)).toString();
}

const fieldClassName =
  "border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function ConvertidorTemperatura() {
  const celsiusId = useId();
  const fahrenheitId = useId();
  const kelvinId = useId();
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  function handleCelsius(value: string) {
    setCelsius(value);
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      setFahrenheit(round((parsed * 9) / 5 + 32));
      setKelvin(round(parsed + 273.15));
      return;
    }

    setFahrenheit("");
    setKelvin("");
  }

  function handleFahrenheit(value: string) {
    setFahrenheit(value);
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      const celsiusValue = ((parsed - 32) * 5) / 9;
      setCelsius(round(celsiusValue));
      setKelvin(round(celsiusValue + 273.15));
      return;
    }

    setCelsius("");
    setKelvin("");
  }

  function handleKelvin(value: string) {
    setKelvin(value);
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      const celsiusValue = parsed - 273.15;
      setCelsius(round(celsiusValue));
      setFahrenheit(round((celsiusValue * 9) / 5 + 32));
      return;
    }

    setCelsius("");
    setFahrenheit("");
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor={celsiusId} className="text-sm text-muted">
            Celsius (C)
          </label>
          <input
            id={celsiusId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 100"
            value={celsius}
            onChange={(e) => handleCelsius(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor={fahrenheitId} className="text-sm text-muted">
            Fahrenheit (F)
          </label>
          <input
            id={fahrenheitId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 212"
            value={fahrenheit}
            onChange={(e) => handleFahrenheit(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor={kelvinId} className="text-sm text-muted">
            Kelvin (K)
          </label>
          <input
            id={kelvinId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 373.15"
            value={kelvin}
            onChange={(e) => handleKelvin(e.target.value)}
          />
        </div>
      </div>
      <p className="text-xs text-muted">Escribe en cualquier campo y los otros se actualizan automaticamente.</p>
    </div>
  );
}
