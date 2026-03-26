"use client";

import { useState } from "react";

function getCategory(imc: number): { label: string; color: string } {
  if (imc < 18.5) return { label: "Bajo peso", color: "text-blue-500" };
  if (imc < 25) return { label: "Peso normal", color: "text-green-600" };
  if (imc < 30) return { label: "Sobrepeso", color: "text-yellow-600" };
  if (imc < 35) return { label: "Obesidad grado I", color: "text-orange-500" };
  if (imc < 40) return { label: "Obesidad grado II", color: "text-red-500" };
  return { label: "Obesidad grado III", color: "text-red-700" };
}

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura);
  const alturaM = alturaNum / 100;
  const imc = pesoNum > 0 && alturaM > 0 ? pesoNum / (alturaM * alturaM) : null;
  const categoria = imc !== null ? getCategory(imc) : null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-sm text-muted">Peso (kg)</label>
          <input
            type="number"
            min="1"
            max="300"
            className="border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            placeholder="Ej: 70"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-sm text-muted">Altura (cm)</label>
          <input
            type="number"
            min="50"
            max="250"
            className="border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            placeholder="Ej: 175"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
      </div>

      {imc !== null && categoria !== null && (
        <div className="border border-border rounded-xl p-4 bg-background flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted mb-1">Tu IMC</p>
            <p className="text-4xl font-extrabold text-text">{imc.toFixed(1)}</p>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted mb-1">Categoría</p>
            <p className={`text-xl font-bold ${categoria.color}`}>{categoria.label}</p>
          </div>
        </div>
      )}

      <div className="border border-border rounded-xl p-4 bg-background">
        <p className="text-xs font-semibold text-muted mb-2 uppercase tracking-wide">Tabla de referencia</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-muted">
          <span>Bajo peso</span><span className="text-blue-500 font-medium">&lt; 18.5</span>
          <span>Peso normal</span><span className="text-green-600 font-medium">18.5 – 24.9</span>
          <span>Sobrepeso</span><span className="text-yellow-600 font-medium">25 – 29.9</span>
          <span>Obesidad I</span><span className="text-orange-500 font-medium">30 – 34.9</span>
          <span>Obesidad II</span><span className="text-red-500 font-medium">35 – 39.9</span>
          <span>Obesidad III</span><span className="text-red-700 font-medium">≥ 40</span>
        </div>
      </div>
    </div>
  );
}
