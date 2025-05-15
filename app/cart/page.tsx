"use client"

import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { CartItemComponent } from "@/components/cart-item"
import { PriceDisplay } from "@/components/price-display"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Fish, ShoppingCart, ArrowLeft, Trash } from "lucide-react"
import { useCountry } from "@/context/country-context"
import { CountrySelector } from "@/components/country-selector"

export default function CartPage() {
  const { items, itemCount, subtotal, clearCart } = useCart()
  const { country } = useCountry()

  // حساب الضريبة والشحن والإجمالي
  const shipping = itemCount > 0 ? 15 : 0
  const tax = subtotal * 0.15
  const total = subtotal + shipping + tax

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold text-red-600">بحر الخيرات</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <CountrySelector />
            <Link href="/" className="text-gray-600 hover:text-red-600">
              الرئيسية
            </Link>
            <Link href="/shipping" className="text-gray-600 hover:text-red-600">
              الشحن
            </Link>
            <Link href="/checkout" className="text-gray-600 hover:text-red-600">
              الدفع
            </Link>
            <Link href="/invoice" className="text-gray-600 hover:text-red-600">
              الفواتير
            </Link>
          </nav>
          <Button className="hidden md:flex bg-red-600 hover:bg-red-700">تسجيل الدخول</Button>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-10 flex-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">سلة التسوق</h1>
            <div className="text-sm text-gray-500">
              {itemCount} {itemCount === 1 ? "منتج" : "منتجات"}
            </div>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <h2 className="text-2xl font-medium text-gray-900 mb-2">سلة التسوق فارغة</h2>
              <p className="text-gray-500 mb-8 max-w-md">
                لم تقم بإضافة أي منتجات إلى سلة التسوق بعد. استعرض منتجاتنا واستمتع بأفضل المأكولات البحرية الطازجة.
              </p>
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700">تصفح المنتجات</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>المنتجات</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={clearCart}
                    >
                      <Trash className="h-4 w-4 mr-2" />
                      حذف الكل
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {items.map((item) => (
                        <CartItemComponent key={item.id} item={item} />
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href="/">
                      <Button variant="outline" className="flex items-center">
                        <ArrowLeft className="h-4 w-4 ml-2" />
                        متابعة التسوق
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>ملخص الطلب</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>المجموع الفرعي</span>
                          <PriceDisplay price={subtotal} />
                        </div>
                        <div className="flex justify-between">
                          <span>الشحن</span>
                          <PriceDisplay price={shipping} />
                        </div>
                        <div className="flex justify-between">
                          <span>الضريبة (15%)</span>
                          <PriceDisplay price={tax} />
                        </div>
                      </div>

                      <Separator />

                      <div className="flex justify-between font-bold text-lg">
                        <span>الإجمالي</span>
                        <PriceDisplay price={total} />
                      </div>

                      <div className="mt-6">
                        <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                          كود الخصم
                        </label>
                        <div className="flex">
                          <Input id="coupon" className="rounded-l-none" />
                          <Button className="rounded-r-none bg-red-600 hover:bg-red-700">تطبيق</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/checkout" className="w-full">
                      <Button className="w-full bg-red-600 hover:bg-red-700">متابعة الدفع</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="mt-6">
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">معلومات الشحن</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      نوفر خدمة توصيل سريعة وموثوقة لضمان وصول منتجاتنا البحرية الطازجة إلى منزلك في أفضل حالة.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-50 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        توصيل مجاني للطلبات فوق 200 {country.currency.symbol}
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-50 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        توصيل سريع خلال 24 ساعة
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-50 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        تغليف مبرد للحفاظ على جودة المنتجات
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-gray-400">© 2025 بحر الخيرات. جميع الحقوق محفوظة</p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  سياسة الخصوصية
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  الشروط والأحكام
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  سياسة الاسترجاع
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
