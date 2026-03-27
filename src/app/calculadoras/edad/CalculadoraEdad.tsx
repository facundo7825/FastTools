"use client";

import { useId, useState } from "react";

const fieldClassName =
  "border border-border rounded-xl p-3 w-full sm:w-fit bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function CalculadoraEdad() {
  const birthdateId = useId();
  const [birthdate, setBirthdate] = useState("");

  let result = null;
  if (birthdate) {
    const birth = new Date(birthdate);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    result = { years, months, days };
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={birthdateId} className="text-sm text-muted">
          Fecha de nacimiento
        </label>
        <input
          id={birthdateId}
          type="date"
          className={fieldClassName}
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      {result !== null ? (
        <div>
          <p className="text-sm font-medium text-muted mb-2">Resultado</p>
          <div className="border border-border rounded-xl p-4 bg-background text-text text-sm leading-relaxed">
            Tienes <span className="font-bold text-primary">{result.years} anos</span>,{" "}
            <span className="font-bold text-primary">{result.months} meses</span> y{" "}
            <span className="font-bold text-primary">{result.days} dias</span>.
          </div>
        </div>
      ) : (
        <p className="text-xs text-muted">Selecciona una fecha para calcular la edad exacta.</p>
      )}
    </div>
  );
}
