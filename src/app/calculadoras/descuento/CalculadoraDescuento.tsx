"use client";

import { useId, useState } from "react";

const fieldClassName =
  "border border-border rounded-xl p-3 w-full bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export default function CalculadoraDescuento() {
  const priceId = useId();
  const discountId = useId();
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const priceValue = parseFloat(price);
  const discountValue = parseFloat(discount);

  const hasResult =
    price !== "" &&
    discount !== "" &&
    !Number.isNaN(priceValue) &&
    !Number.isNaN(discountValue);

  const discountAmount = hasResult ? (priceValue * discountValue) / 100 : 0;
  const finalPrice = hasResult ? priceValue - discountAmount : 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor={priceId} className="text-sm text-muted">
            Precio original
          </label>
          <input
            id={priceId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 15000"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor={discountId} className="text-sm text-muted">
            Descuento (%)
          </label>
          <input
            id={discountId}
            type="number"
            className={fieldClassName}
            placeholder="Ej: 20"
            value={discount}
            onChange={(event) => setDiscount(event.target.value)}
          />
        </div>
      </div>

      {hasResult ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="border border-border rounded-xl p-4 bg-background">
            <p className="text-sm text-muted mb-1">Monto descontado</p>
            <p className="text-2xl font-extrabold text-text">{discountAmount.toFixed(2)}</p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-background">
            <p className="text-sm text-muted mb-1">Precio final</p>
            <p className="text-2xl font-extrabold text-primary">{finalPrice.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <p className="text-xs text-muted">
          Completa el precio original y el porcentaje para ver el descuento aplicado.
        </p>
      )}
    </div>
  );
}
