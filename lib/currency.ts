import type { Country } from "./countries"

export const formatPrice = (
  price: number,
  country: Country,
  options: {
    notation?: Intl.NumberFormatOptions["notation"]
    minimumFractionDigits?: number
    maximumFractionDigits?: number
  } = {},
): string => {
  const { notation = "standard", minimumFractionDigits = 2, maximumFractionDigits = 2 } = options

  // تحويل السعر من الريال السعودي إلى العملة المحددة
  const convertedPrice = price * country.exchangeRate

  // تنسيق السعر حسب العملة
  const formattedPrice = new Intl.NumberFormat("ar-SA", {
    style: "decimal",
    notation,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(convertedPrice)

  // إضافة رمز العملة
  return `${formattedPrice} ${country.currency.symbol}`
}

export const convertPrice = (price: number, country: Country): number => {
  return price * country.exchangeRate
}
