export type Country = {
  code: string
  name: string
  flag: string
  currency: {
    code: string
    name: string
    symbol: string
  }
  // معدل التحويل مقارنة بالريال السعودي (SAR)
  exchangeRate: number
}

export const countries: Country[] = [
  {
    code: "SA",
    name: "المملكة العربية السعودية",
    flag: "🇸🇦",
    currency: {
      code: "SAR",
      name: "ريال سعودي",
      symbol: "ر.س",
    },
    exchangeRate: 1, // العملة الأساسية
  },
  {
    code: "AE",
    name: "الإمارات العربية المتحدة",
    flag: "🇦🇪",
    currency: {
      code: "AED",
      name: "درهم إماراتي",
      symbol: "د.إ",
    },
    exchangeRate: 0.98,
  },
  {
    code: "KW",
    name: "الكويت",
    flag: "🇰🇼",
    currency: {
      code: "KWD",
      name: "دينار كويتي",
      symbol: "د.ك",
    },
    exchangeRate: 0.08,
  },
  {
    code: "QA",
    name: "قطر",
    flag: "🇶🇦",
    currency: {
      code: "QAR",
      name: "ريال قطري",
      symbol: "ر.ق",
    },
    exchangeRate: 0.97,
  },
  {
    code: "BH",
    name: "البحرين",
    flag: "🇧🇭",
    currency: {
      code: "BHD",
      name: "دينار بحريني",
      symbol: "د.ب",
    },
    exchangeRate: 0.1,
  },
  {
    code: "OM",
    name: "عمان",
    flag: "🇴🇲",
    currency: {
      code: "OMR",
      name: "ريال عماني",
      symbol: "ر.ع",
    },
    exchangeRate: 0.1,
  },
  {
    code: "EG",
    name: "مصر",
    flag: "🇪🇬",
    currency: {
      code: "EGP",
      name: "جنيه مصري",
      symbol: "ج.م",
    },
    exchangeRate: 8.5,
  },
  {
    code: "JO",
    name: "الأردن",
    flag: "🇯🇴",
    currency: {
      code: "JOD",
      name: "دينار أردني",
      symbol: "د.أ",
    },
    exchangeRate: 0.19,
  },
  {
    code: "US",
    name: "الولايات المتحدة",
    flag: "🇺🇸",
    currency: {
      code: "USD",
      name: "دولار أمريكي",
      symbol: "$",
    },
    exchangeRate: 0.27,
  },
  {
    code: "GB",
    name: "المملكة المتحدة",
    flag: "🇬🇧",
    currency: {
      code: "GBP",
      name: "جنيه إسترليني",
      symbol: "£",
    },
    exchangeRate: 0.21,
  },
]

export const getCountryByCode = (code: string): Country => {
  return countries.find((country) => country.code === code) || countries[0]
}
