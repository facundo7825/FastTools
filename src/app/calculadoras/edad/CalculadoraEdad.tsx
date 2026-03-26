"use client";

import { useState } from "react";

export default function CalculadoraEdad() {
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
      <input
        type="date"
        className="border border-border rounded-xl p-3 w-full sm:w-fit bg-surface text-text focus:outline-none focus:border-primary transition-colors"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      {result !== null && (
        <div>
          <p className="text-sm font-medium text-muted mb-2">Resultado:</p>
          <div className="border border-border rounded-xl p-4 bg-background text-text text-sm leading-relaxed">
            Tienes <span className="font-bold text-primary">{result.years} años</span>,{" "}
            <span className="font-bold text-primary">{result.months} meses</span> y{" "}
            <span className="font-bold text-primary">{result.days} días</span>
          </div>
        </div>
      )}
    </div>
  );
}
