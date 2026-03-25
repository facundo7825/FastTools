"use client";

import { useState } from "react";

export default function CalculadoraPorcentaje() {
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");

  const result =
    value !== "" && percent !== ""
      ? ((parseFloat(value) * parseFloat(percent)) / 100).toFixed(2)
      : null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="number"
          className="border rounded-lg p-3 w-full"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="number"
          className="border rounded-lg p-3 w-full"
          placeholder="Porcentaje (%)"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />
      </div>
      {result !== null && (
        <p className="text-gray-700">
          El <span className="font-bold">{percent}%</span> de{" "}
          <span className="font-bold">{value}</span> es{" "}
          <span className="font-bold">{result}</span>
        </p>
      )}
    </div>
  );
}
