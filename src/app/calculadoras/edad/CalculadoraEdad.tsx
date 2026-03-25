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
    <div className="flex flex-col gap-4">
      <input
        type="date"
        className="border rounded-lg p-3 w-full sm:w-fit"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      {result !== null && (
        <div>
          <p className="text-sm font-medium text-gray-500 mb-2">Resultado:</p>
          <div className="border rounded-xl p-4 bg-gray-50 text-gray-800 text-sm leading-relaxed">
            Tienes <span className="font-bold">{result.years} años</span>,{" "}
            <span className="font-bold">{result.months} meses</span> y{" "}
            <span className="font-bold">{result.days} días</span>
          </div>
        </div>
      )}
    </div>
  );
}
