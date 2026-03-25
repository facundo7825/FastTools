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
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-center">
        <input
          type="number"
          className="border rounded-lg p-3 w-full"
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          className="border rounded-lg p-3 w-full"
          placeholder="B"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <input
          type="number"
          className="border rounded-lg p-3 w-full"
          placeholder="C"
          value={c}
          onChange={(e) => setC(e.target.value)}
        />
        <div className="border rounded-lg p-3 w-full bg-gray-50 text-gray-800 font-bold text-center">
          {result !== null ? result : "X"}
        </div>
      </div>
      <p className="text-sm text-gray-500">Si A es a B, entonces C es a X.</p>
    </div>
  );
}
