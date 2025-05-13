import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { CountryProvider } from "@/context/country-context"
import { CartProvider } from "@/context/cart-context"

export const metadata: Metadata = {
  title: "بحر الخيرات - متجر الأسماك الاحترافي",
  description: "أفضل متجر لبيع الأسماك الطازجة والمأكولات البحرية في المملكة",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CountryProvider>
            <CartProvider>{children}</CartProvider>
          </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
