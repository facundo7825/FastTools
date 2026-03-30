"use client";

import { useId, useMemo, useState } from "react";

const fieldClassName =
  "w-full rounded-xl border border-border bg-surface p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function CalculadoraAumentoPorcentual() {
  const baseId = useId();
  const percentId = useId();
  const [base, setBase] = useState("");
  const [percent, setPercent] = useState("");

  const result = useMemo(() => {
    const baseValue = Number(base);
    const percentValue = Number(percent);

    if (base === "" || percent === "" || Number.isNaN(baseValue) || Number.isNaN(percentValue)) {
      return null;
    }

    const increase = (baseValue * percentValue) / 100;
    const finalValue = baseValue + increase;

    return {
      increase: increase.toFixed(2),
      finalValue: finalValue.toFixed(2),
    };
  }, [base, percent]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor={baseId} className="text-sm text-muted">
            Valor base
          </label>
          <input
            id={baseId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 1200"
            value={base}
            onChange={(event) => setBase(event.target.value)}
          />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor={percentId} className="text-sm text-muted">
            Porcentaje de aumento
          </label>
          <input
            id={percentId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 18"
            value={percent}
            onChange={(event) => setPercent(event.target.value)}
          />
        </div>
      </div>

      {result ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Monto del aumento</p>
            <p className="mt-2 text-2xl font-bold text-text">{result.increase}</p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Valor final</p>
            <p className="mt-2 text-2xl font-bold text-primary">{result.finalValue}</p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted">
          Completa ambos campos para ver cuanto aumenta el valor y cual es el resultado final.
        </p>
      )}
    </div>
  );
}
