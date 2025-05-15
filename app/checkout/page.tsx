"use client"
import Link from "next/link"
import Image from "next/image"
import { Fish, Trash, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CountrySelector } from "@/components/country-selector"
import { PriceDisplay } from "@/components/price-display"
import { useCart } from "@/context/cart-context"

export default function CheckoutPage() {
  const { items, subtotal } = useCart()

  // حساب الضريبة والشحن والإجمالي
  const shipping = 15.0
  const tax = subtotal * 0.15
  const total = subtotal + shipping + tax

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold text-teal-600">بحر الخيرات</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <CountrySelector />
            <Link href="/" className="text-gray-600 hover:text-teal-600">
              الرئيسية
            </Link>
            <Link href="/shipping" className="text-gray-600 hover:text-teal-600">
              الشحن
            </Link>
            <Link href="/checkout" className="text-teal-600 hover:text-teal-800">
              الدفع
            </Link>
            <Link href="/invoice" className="text-gray-600 hover:text-teal-600">
              الفواتير
            </Link>
          </nav>
          <Button className="hidden md:flex bg-teal-600 hover:bg-teal-700">تسجيل الدخول</Button>
        </div>
      </header>

      {/* Checkout Steps */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">1</div>
              <span className="mr-2">السلة</span>
            </div>
            <ChevronRight className="mx-2 text-gray-400" />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">2</div>
              <span className="mr-2">الشحن</span>
            </div>
            <ChevronRight className="mx-2 text-gray-400" />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">3</div>
              <span className="mr-2">الدفع</span>
            </div>
            <ChevronRight className="mx-2 text-gray-400" />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">4</div>
              <span className="mr-2">التأكيد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">إتمام الطلب</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>معلومات الشحن</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">الاسم الأول</Label>
                      <Input id="first-name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">الاسم الأخير</Label>
                      <Input id="last-name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" className="mt-1" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">العنوان</Label>
                      <Input id="address" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="city">المدينة</Label>
                      <Input id="city" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="postal-code">الرمز البريدي</Label>
                      <Input id="postal-code" className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>طريقة الدفع</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="card">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">بطاقة ائتمان</TabsTrigger>
                      <TabsTrigger value="bank">تحويل بنكي</TabsTrigger>
                      <TabsTrigger value="cod">الدفع عند الاستلام</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="mt-4">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="card-number">رقم البطاقة</Label>
                          <Input id="card-number" placeholder="0000 0000 0000 0000" className="mt-1" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                            <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="cvc">رمز الأمان (CVC)</Label>
                            <Input id="cvc" placeholder="123" className="mt-1" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="name-on-card">الاسم على البطاقة</Label>
                          <Input id="name-on-card" className="mt-1" />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="bank" className="mt-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-medium mb-2">معلومات الحساب البنكي</h3>
                        <p className="text-sm text-gray-600 mb-4">يرجى تحويل المبلغ الإجمالي إلى الحساب التالي:</p>
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-medium">اسم البنك:</span> البنك الأهلي السعودي
                          </p>
                          <p>
                            <span className="font-medium">اسم الحساب:</span> شركة بحر الخيرات
                          </p>
                          <p>
                            <span className="font-medium">رقم الحساب:</span> 1234567890123456
                          </p>
                          <p>
                            <span className="font-medium">رقم الآيبان:</span> SA1234567890123456789012
                          </p>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                          بعد إتمام التحويل، يرجى إرسال صورة من إيصال التحويل إلى البريد الإلكتروني:
                          payments@bahralkhayraat.com
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="cod" className="mt-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-medium mb-2">الدفع عند الاستلام</h3>
                        <p className="text-sm text-gray-600">يمكنك الدفع نقدًا أو عبر بطاقة مدى عند استلام الطلب.</p>
                        <div className="mt-4">
                          <RadioGroup defaultValue="cash">
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <RadioGroupItem value="cash" id="cash" />
                              <Label htmlFor="cash">نقدًا</Label>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse mt-2">
                              <RadioGroupItem value="mada" id="mada" />
                              <Label htmlFor="mada">بطاقة مدى</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href="/invoice">
                    <Button className="bg-teal-600 hover:bg-teal-700">إتمام الطلب</Button>
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
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="flex justify-between mt-1 text-sm text-gray-600">
                            <span>الكمية: {item.quantity}</span>
                            <PriceDisplay price={item.price} priceClassName="text-sm" />
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">حذف</span>
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>المجموع الفرعي</span>
                      <PriceDisplay price={subtotal} priceClassName="font-normal" />
                    </div>
                    <div className="flex justify-between">
                      <span>الشحن</span>
                      <PriceDisplay price={shipping} priceClassName="font-normal" />
                    </div>
                    <div className="flex justify-between">
                      <span>الضريبة (15%)</span>
                      <PriceDisplay price={tax} priceClassName="font-normal" />
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between font-bold text-lg">
                    <span>الإجمالي</span>
                    <PriceDisplay price={total} />
                  </div>

                  <div className="mt-6">\</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
