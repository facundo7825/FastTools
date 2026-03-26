"use client";

import { useState } from "react";

export default function ReglaDeTres() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  const result =
    a !== "" && b !== "" && c !== "" && parseFloat(a) !== 0
      ? ((parseFloat(b) * parseFloat(c)) / parseFloat(a)).toFixed(2)
      : null;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-center">
        <input
          type="number"
          className="border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          className="border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
          placeholder="B"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <input
          type="number"
          className="border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
          placeholder="C"
          value={c}
          onChange={(e) => setC(e.target.value)}
        />
        <div className="border border-border rounded-xl p-3 w-full bg-background text-primary font-bold text-center text-lg">
          {result !== null ? result : "X"}
        </div>
      </div>
      <p className="text-sm text-muted mt-1">Si A es a B, entonces C es a X.</p>
    </div>
  );
}
