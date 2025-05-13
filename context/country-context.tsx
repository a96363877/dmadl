"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Country, countries, getCountryByCode } from "@/lib/countries"

type CountryContextType = {
  country: Country
  setCountry: (country: Country) => void
  availableCountries: Country[]
}

const CountryContext = createContext<CountryContextType | undefined>(undefined)

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<Country>(countries[0])

  // استرجاع البلد المحفوظ من التخزين المحلي عند تحميل الصفحة
  useEffect(() => {
    const savedCountryCode = localStorage.getItem("selectedCountry")
    if (savedCountryCode) {
      const savedCountry = getCountryByCode(savedCountryCode)
      setCountry(savedCountry)
    }
  }, [])

  // حفظ البلد المختار في التخزين المحلي عند تغييره
  const handleSetCountry = (newCountry: Country) => {
    setCountry(newCountry)
    localStorage.setItem("selectedCountry", newCountry.code)
  }

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry: handleSetCountry,
        availableCountries: countries,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext)
  if (context === undefined) {
    throw new Error("useCountry must be used within a CountryProvider")
  }
  return context
}
