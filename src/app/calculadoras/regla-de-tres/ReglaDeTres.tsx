"use client";

import { useId, useState } from "react";

const fieldClassName =
  "border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function ReglaDeTres() {
  const aId = useId();
  const bId = useId();
  const cId = useId();
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  const result =
    a !== "" && b !== "" && c !== "" && parseFloat(a) !== 0
      ? ((parseFloat(b) * parseFloat(c)) / parseFloat(a)).toFixed(2)
      : null;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={aId} className="text-sm text-muted">
            Valor A
          </label>
          <input
            id={aId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 2"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={bId} className="text-sm text-muted">
            Valor B
          </label>
          <input
            id={bId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 10"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={cId} className="text-sm text-muted">
            Valor C
          </label>
          <input
            id={cId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 5"
            value={c}
            onChange={(e) => setC(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm text-muted">Resultado X</span>
          <div className="border border-border rounded-xl p-3 w-full bg-background text-primary font-bold text-center text-lg">
            {result !== null ? result : "X"}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted">Si A es a B, entonces C es a X.</p>
    </div>
  );
}
