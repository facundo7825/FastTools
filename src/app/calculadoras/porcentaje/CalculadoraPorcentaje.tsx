"use client";

import { useId, useState } from "react";

const fieldClassName =
  "border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function CalculadoraPorcentaje() {
  const valueId = useId();
  const percentId = useId();
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");

  const result =
    value !== "" && percent !== ""
      ? ((parseFloat(value) * parseFloat(percent)) / 100).toFixed(2)
      : null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor={valueId} className="text-sm text-muted">
            Valor base
          </label>
          <input
            id={valueId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 250"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor={percentId} className="text-sm text-muted">
            Porcentaje
          </label>
          <input
            id={percentId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 15"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </div>
      </div>
      {result !== null ? (
        <div>
          <p className="text-sm font-medium text-muted mb-2">Resultado</p>
          <div className="border border-border rounded-xl p-4 bg-background text-text text-sm leading-relaxed">
            El <span className="font-bold">{percent}%</span> de{" "}
            <span className="font-bold">{value}</span> es{" "}
            <span className="font-bold text-lg text-primary">{result}</span>
          </div>
        </div>
      ) : (
        <p className="text-xs text-muted">Completa ambos campos para ver el resultado.</p>
      )}
    </div>
  );
}
