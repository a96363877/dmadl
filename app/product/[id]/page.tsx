"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Fish, Minus, Plus, Star, Truck, ShieldCheck, ArrowLeft, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { CountrySelector } from "@/components/country-selector"
import { PriceDisplay } from "@/components/price-display"
import { MiniCart } from "@/components/mini-cart"
import { useCart } from "@/context/cart-context"
import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState<any>(null)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])
  const { addItem } = useCart()

  useEffect(() => {
    // تحميل بيانات المنتج
    const productId = Number.parseInt(params.id)
    const foundProduct = products.find((p) => p.id === productId)

    if (foundProduct) {
      setProduct(foundProduct)

      // تحميل المنتجات ذات الصلة (من نفس الفئة)
      const related = products
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4)
      setRelatedProducts(related)
    }
  }, [params.id])

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity)
    }
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">جاري تحميل المنتج...</h1>
          <p className="text-gray-500">يرجى الانتظار قليلاً</p>
        </div>
      </div>
    )
  }

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
          <div className="flex items-center gap-4">
            <MiniCart />
            <Button className="hidden md:flex bg-red-600 hover:bg-red-700">تسجيل الدخول</Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              الرئيسية
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="#" className="text-gray-500 hover:text-red-600">
              {product.category}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-4">
                {product.badge && (
                  <Badge
                    className={`absolute top-4 right-4 z-10 ${
                      product.badge === "جديد" ? "bg-red-500" : product.badge === "خصم" ? "bg-red-500" : "bg-amber-500"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative h-24 rounded-md overflow-hidden border-2 border-transparent hover:border-red-500 cursor-pointer"
                  >
                    <Image src={product.image || "/placeholder.svg"} alt={`صورة ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < product.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 mr-1">({product.reviews})</span>
                </div>
                <Badge variant="outline" className="text-red-700 border-red-200">
                  {product.category}
                </Badge>
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-6">
                <PriceDisplay
                  price={product.price}
                  oldPrice={product.oldPrice}
                  unit={product.unit}
                  priceClassName="text-2xl font-bold text-red-700"
                  oldPriceClassName="text-lg text-gray-500 line-through"
                  className="mb-1"
                />
                {product.oldPrice && (
                  <p className="text-sm text-red-500">
                    وفر {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </p>
                )}
              </div>

              <Separator className="my-6" />

              <div className="mb-6">
                <h3 className="font-medium mb-3">الكمية</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-r-none"
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="h-10 w-16 flex items-center justify-center border-y border-input">{quantity}</div>
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none" onClick={handleIncrement}>
                    <Plus className="h-4 w-4" />
                  </Button>
                  <span className="mr-3 text-sm text-gray-500">
                    متوفر: <span className="text-red-700 font-medium">50</span> {product.unit}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-red-600 hover:bg-red-700 flex-1" size="lg" onClick={handleAddToCart}>
                  إضافة للسلة
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="h-5 w-5 mr-2" />
                  أضف للمفضلة
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">توصيل سريع</h4>
                    <p className="text-sm text-gray-600">توصيل مجاني للطلبات فوق 200 ريال</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">ضمان الجودة</h4>
                    <p className="text-sm text-gray-600">نضمن جودة منتجاتنا 100% أو استرداد كامل المبلغ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-8">
              <TabsTrigger value="description">الوصف</TabsTrigger>
              <TabsTrigger value="specifications">المواصفات</TabsTrigger>
              <TabsTrigger value="reviews">التقييمات</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">وصف المنتج</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-700 mb-4">
                يعتبر {product.name} من أفضل أنواع الأسماك المتوفرة في الأسواق، حيث يتميز بمذاقه الرائع ولحمه الطري.
                يحتوي على نسبة عالية من البروتين وأحماض أوميغا 3 الدهنية المفيدة للصحة.
              </p>
              <p className="text-gray-700">
                يمكن طهي {product.name} بعدة طرق مختلفة مثل الشوي، القلي، الطهي بالفرن، أو على البخار. ينصح بتتبيله
                بالأعشاب والتوابل المفضلة لديك للحصول على أفضل مذاق.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">مواصفات المنتج</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">المصدر</h4>
                    <p className="text-gray-700">{product.category.includes("فاخرة") ? "مستورد" : "محلي"}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">الحالة</h4>
                    <p className="text-gray-700">طازج</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">وحدة البيع</h4>
                    <p className="text-gray-700">{product.unit}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">التخزين</h4>
                    <p className="text-gray-700">يحفظ مبردًا في درجة حرارة 0-4 درجات مئوية</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">الصلاحية</h4>
                    <p className="text-gray-700">3-5 أيام من تاريخ الاستلام (مبرد)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">القيمة الغذائية</h4>
                    <p className="text-gray-700">غني بالبروتين وأوميغا 3</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">تقييمات العملاء</h3>
                <Button className="bg-red-600 hover:bg-red-700">أضف تقييمك</Button>
              </div>

              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-6 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="صورة المستخدم"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">مستخدم {i}</h4>
                          <p className="text-xs text-gray-500">منذ {i} أيام</p>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < 5 - (i % 2) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      منتج رائع وطازج جدًا. التوصيل كان سريعًا والتغليف ممتاز. سأطلب مرة أخرى بالتأكيد.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">منتجات ذات صلة</h2>
            <Link href="/" className="text-red-600 hover:text-red-700 flex items-center">
              <span>عرض الكل</span>
              <ArrowLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <div
                key={relProduct.id}
                className="bg-white rounded-lg overflow-hidden border shadow-sm transition-all hover:shadow-md group"
              >
                <Link href={`/product/${relProduct.id}`} className="block relative h-48">
                  <Image
                    src={relProduct.image || "/placeholder.svg"}
                    alt={relProduct.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <Link href={`/product/${relProduct.id}`} className="hover:text-red-600 transition-colors">
                    <h3 className="font-medium mb-1">{relProduct.name}</h3>
                  </Link>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < relProduct.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({relProduct.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <PriceDisplay price={relProduct.price} priceClassName="font-medium" />
                    <Link href={`/product/${relProduct.id}`}>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                        عرض
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 pt-8">
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
