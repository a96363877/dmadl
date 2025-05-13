"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useCountry } from "@/context/country-context"

export function CountrySelector() {
  const { country, setCountry, availableCountries } = useCountry()
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex items-center gap-2 border-gray-200 hover:bg-gray-50"
        >
          <span className="text-lg">{country.flag}</span>
          <span className="hidden md:inline">{country.name}</span>
          <span className="text-xs text-gray-500">{country.currency.code}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0" align="end">
        <Command>
          <CommandInput placeholder="ابحث عن بلد..." />
          <CommandEmpty>لم يتم العثور على نتائج</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {availableCountries.map((item) => (
                <CommandItem
                  key={item.code}
                  value={`${item.name} ${item.currency.code}`}
                  onSelect={() => {
                    setCountry(item)
                    setOpen(false)
                  }}
                  className="flex items-center gap-2 py-2"
                >
                  <span className="text-lg">{item.flag}</span>
                  <span>{item.name}</span>
                  <span className="text-xs text-gray-500 mr-auto">{item.currency.code}</span>
                  <Check className={`h-4 w-4 ${country.code === item.code ? "opacity-100" : "opacity-0"}`} />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
