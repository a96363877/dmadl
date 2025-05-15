"use client"

import { useCountry } from "@/context/country-context"
import { formatPrice } from "@/lib/currency"

interface PriceDisplayProps {
  price: number
  oldPrice?: number
  unit?: string
  className?: string
  priceClassName?: string
  oldPriceClassName?: string
  unitClassName?: string
}

export function PriceDisplay({
  price,
  oldPrice,
  unit,
  className = "",
  priceClassName = "font-bold text-lg text-red-700",
  oldPriceClassName = "text-sm text-gray-500 line-through",
  unitClassName = "text-xs text-gray-500",
}: PriceDisplayProps) {
  const { country } = useCountry()

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <p className={priceClassName}>{formatPrice(price, country)}</p>
        {oldPrice && <p className={oldPriceClassName}>{formatPrice(oldPrice, country)}</p>}
      </div>
      {unit && <p className={unitClassName}>السعر / {unit}</p>}
    </div>
  )
}
