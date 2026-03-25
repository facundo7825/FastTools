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
        <div>
          <p className="text-sm font-medium text-gray-500 mb-2">Resultado:</p>
          <div className="border rounded-xl p-4 bg-gray-50 text-gray-800 text-sm leading-relaxed">
            El <span className="font-bold">{percent}%</span> de{" "}
            <span className="font-bold">{value}</span> es{" "}
            <span className="font-bold text-lg">{result}</span>
          </div>
        </div>
      )}
    </div>
  );
}
