import Link from "next/link"
import Image from "next/image"
import { Beef, Truck, CreditCard, Star, ChevronRight, Search, Menu, X, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CountrySelector } from "@/components/country-selector"
import { PriceDisplay } from "@/components/price-display"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { MiniCart } from "@/components/mini-cart"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-red-900 text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4">
          توصيل مجاني للطلبات فوق 200 ريال | استخدم كود "MEAT10" للحصول على خصم 10%
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Beef className="h-8 w-8 text-red-600" strokeWidth={1.5} />
                <span className="text-2xl font-bold text-red-700">لحوم الخيرات</span>
              </Link>

              <div className="hidden lg:flex relative w-96">
                <Input placeholder="ابحث عن منتجات..." className="pr-10 border-red-200 focus-visible:ring-red-500" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <CountrySelector />
              <Link href="/shipping" className="text-gray-600 hover:text-red-600 transition-colors">
                الشحن والتوصيل
              </Link>
              <Link href="/checkout" className="text-gray-600 hover:text-red-600 transition-colors">
                الدفع
              </Link>
              <Link href="/invoice" className="text-gray-600 hover:text-red-600 transition-colors">
                الفواتير
              </Link>
              <div className="h-6 w-px bg-gray-200"></div>
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5 text-gray-600" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">2</Badge>
              </Button>
              <MiniCart />
              <Button className="bg-red-600 hover:bg-red-700">تسجيل الدخول</Button>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <CountrySelector />
              <MiniCart />

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-gray-600" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between py-4 border-b">
                      <Link href="/" className="flex items-center gap-2">
                        <Beef className="h-6 w-6 text-red-600" />
                        <span className="text-xl font-bold text-red-700">لحوم الخيرات</span>
                      </Link>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetTrigger>
                    </div>
                    <div className="relative my-4">
                      <Input
                        placeholder="ابحث عن منتجات..."
                        className="pr-10 border-red-200 focus-visible:ring-red-500"
                      />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                    </div>
                    <nav className="flex flex-col space-y-1 mt-4">
                      <Link
                        href="/"
                        className="py-3 px-4 rounded-md text-red-700 bg-red-50 font-medium flex items-center justify-between"
                      >
                        الرئيسية
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/shipping"
                        className="py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                      >
                        الشحن والتوصيل
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/checkout"
                        className="py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                      >
                        الدفع
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/invoice"
                        className="py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                      >
                        الفواتير
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/cart"
                        className="py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                      >
                        سلة التسوق
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </nav>
                    <div className="mt-auto pt-4 border-t">
                      <Button className="w-full bg-red-600 hover:bg-red-700">تسجيل الدخول</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <nav className="hidden lg:flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <Link href="#" className="text-red-700 font-medium">
                اللحوم الطازجة
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                لحوم الأبقار
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                لحوم الأغنام
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                لحوم الإبل
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                التوابل والصلصات
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">خدمة العملاء:</span>
              <span className="text-sm font-medium">966512345678+</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-red-900/20 to-red-700/80 z-10"></div>
        <div className="relative h-[500px] md:h-[600px]">
          <img
            src="/meat.jpg"
            alt="لحوم طازجة"
            className="object-cover h-[500px] md:h-[600px] w-full"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge className="bg-white text-red-700 hover:bg-white mb-4">أفضل جودة مضمونة</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                أفضل اللحوم الطازجة مباشرة من المزرعة إلى منزلك
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                نقدم لكم أجود أنواع اللحوم الطازجة بأسعار منافسة وتوصيل سريع
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                  تسوق الآن
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/50 bg-white/10">
                  تعرف على منتجاتنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <Beef className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">لحوم طازجة 100%</h3>
              <p className="text-gray-600">نوفر لحومًا طازجة من أفضل المزارع المحلية وتخضع لفحوصات جودة صارمة</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">توصيل سريع ومبرد</h3>
              <p className="text-gray-600">نضمن وصول طلبك في أسرع وقت ممكن وبحالة ممتازة باستخدام شاحنات مبردة مخصصة</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">دفع آمن ومرن</h3>
              <p className="text-gray-600">
                طرق دفع متعددة وآمنة لضمان راحتك، بما في ذلك الدفع عند الاستلام والبطاقات الائتمانية
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ضمان الجودة</h3>
              <p className="text-gray-600">
                نضمن جودة منتجاتنا، وإذا لم تكن راضيًا عن جودة المنتج، نقدم لك استرداد كامل للمبلغ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">تسوق حسب الفئة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر من بين مجموعة واسعة من اللحوم الطازجة والمجمدة والمعلبة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link href={category.href} key={category.name} className="group">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">منتجاتنا المميزة</h2>
              <p className="text-gray-600">اكتشف أفضل اللحوم الطازجة والمميزة</p>
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto mt-6 md:mt-0">
              <TabsList className="grid w-full md:w-auto grid-cols-4 md:flex">
                <TabsTrigger value="all">الكل</TabsTrigger>
                <TabsTrigger value="beef">لحم بقري</TabsTrigger>
                <TabsTrigger value="lamb">لحم غنم</TabsTrigger>
                <TabsTrigger value="premium">منتجات فاخرة</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md group"
                    >
                      <div className="relative h-60">
                        <Badge
                          className={`absolute top-3 right-3 z-10 ${
                            product.badge === "جديد"
                              ? "bg-red-500"
                              : product.badge === "خصم"
                                ? "bg-amber-500"
                                : "bg-green-500"
                          }`}
                        >
                          {product.badge}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 left-3 z-10 bg-white/80 hover:bg-white text-gray-600 rounded-full h-8 w-8"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link href={`/product/${product.id}`} className="hover:text-red-600 transition-colors">
                              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                            </Link>
                            <div className="flex items-center gap-1 mb-2">
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < product.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">({product.reviews})</span>
                            </div>
                            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-end justify-between">
                          <PriceDisplay price={product.price} oldPrice={product.oldPrice} unit={product.unit} />
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{product.category}</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <AddToCartButton product={product} className="w-full" />
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="beef">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.category.includes("لحم بقري"))
                    .map((product) => (
                      <Card
                        key={product.id}
                        className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md group"
                      >
                        <div className="relative h-60">
                          <Badge
                            className={`absolute top-3 right-3 z-10 ${
                              product.badge === "جديد"
                                ? "bg-red-500"
                                : product.badge === "خصم"
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                          >
                            {product.badge}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-3 left-3 z-10 bg-white/80 hover:bg-white text-gray-600 rounded-full h-8 w-8"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <Link href={`/product/${product.id}`} className="hover:text-red-600 transition-colors">
                                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                              </Link>
                              <div className="flex items-center gap-1 mb-2">
                                <div className="flex">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < product.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">({product.reviews})</span>
                              </div>
                              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-end justify-between">
                            <PriceDisplay price={product.price} oldPrice={product.oldPrice} unit={product.unit} />
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{product.category}</Badge>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <AddToCartButton product={product} className="w-full" />
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="lamb">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.category === "لحم غنم")
                    .map((product) => (
                      <Card
                        key={product.id}
                        className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md group"
                      >
                        <div className="relative h-60">
                          <Badge
                            className={`absolute top-3 right-3 z-10 ${
                              product.badge === "جديد"
                                ? "bg-red-500"
                                : product.badge === "خصم"
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                          >
                            {product.badge}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-3 left-3 z-10 bg-white/80 hover:bg-white text-gray-600 rounded-full h-8 w-8"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <Link href={`/product/${product.id}`} className="hover:text-red-600 transition-colors">
                                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                              </Link>
                              <div className="flex items-center gap-1 mb-2">
                                <div className="flex">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < product.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">({product.reviews})</span>
                              </div>
                              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-end justify-between">
                            <PriceDisplay price={product.price} oldPrice={product.oldPrice} unit={product.unit} />
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{product.category}</Badge>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <AddToCartButton product={product} className="w-full" />
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="premium">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter((p) => p.category === "لحوم فاخرة")
                    .map((product) => (
                      <Card
                        key={product.id}
                        className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md group"
                      >
                        <div className="relative h-60">
                          <Badge
                            className={`absolute top-3 right-3 z-10 ${
                              product.badge === "جديد"
                                ? "bg-red-500"
                                : product.badge === "خصم"
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                          >
                            {product.badge}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-3 left-3 z-10 bg-white/80 hover:bg-white text-gray-600 rounded-full h-8 w-8"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <Link href={`/product/${product.id}`} className="hover:text-red-600 transition-colors">
                                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                              </Link>
                              <div className="flex items-center gap-1 mb-2">
                                <div className="flex">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < product.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">({product.reviews})</span>
                              </div>
                              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-end justify-between">
                            <PriceDisplay price={product.price} oldPrice={product.oldPrice} unit={product.unit} />
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{product.category}</Badge>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <AddToCartButton product={product} className="w-full" />
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <div className="text-center mt-10">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  عرض جميع المنتجات
                </Button>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">آراء عملائنا</Badge>
            <h2 className="text-3xl font-bold mb-4">ماذا يقول عملاؤنا عنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نفخر بثقة عملائنا وآرائهم الإيجابية حول جودة منتجاتنا وخدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-red-100 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 w-fit">خصم 15% لفترة محدودة</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  اشترك في نشرتنا البريدية واحصل على خصم 15% على طلبك الأول
                </h2>
                <p className="text-white/80 mb-8">
                  انضم إلى قائمتنا البريدية للحصول على أحدث العروض والمنتجات الجديدة ووصفات اللحوم اللذيذة
                </p>
                <div className="flex flex-col sm:flex-row gap-3">{/*  Add newsletter signup form here later */}</div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/placeholder.svg?height=500&amp;width=600"
                  alt="اشترك في نشرتنا البريدية"
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">لحوم الخيرات</h4>
              <p className="text-gray-400">
                نقدم لكم أجود أنواع اللحوم الطازجة بأسعار منافسة وتوصيل سريع. رؤيتنا هي أن نكون الوجهة الأولى للحوم في
                المملكة العربية السعودية.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">روابط مهمة</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <Link href="#" className="hover:text-red-500 transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500 transition-colors">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500 transition-colors">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500 transition-colors">
                    الشروط والأحكام
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
              <p className="text-gray-400">البريد الإلكتروني: info@example.com</p>
              <p className="text-gray-400">رقم الهاتف: 966512345678+</p>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  {/*  Add social media icons here later */}
                </Link>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  {/*  Add social media icons here later */}
                </Link>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  {/*  Add social media icons here later */}
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 border-t pt-8 border-gray-700">
            <p className="text-gray-400">
              جميع الحقوق محفوظة © {new Date().getFullYear()} لحوم الخيرات. تصميم وتطوير بواسطة [Your Company/Name]
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const categories = [
  {
    name: "لحوم بقرية",
    image: "/caw.jpg",
    href: "#",
  },
  {
    name: "لحوم غنم",
    image: "/shep.jpg",
    href: "#",
  },
  {
    name: "لحوم إبل",
    image: "/abk.webp",
    href: "#",
  },
  {
    name: "لحوم دجاج",
    image: "/chicken.jpg",
    href: "#",
  },
]

const products = [
  {
    id: "1",
    name: "لحم بقري طازج",
    description: "لحم بقري طازج من أفضل المزارع المحلية، غني بالبروتين",
    price: 85,
    oldPrice: 100,
    unit: "كيلو",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviews: 120,
    badge: "خصم",
    category: "لحم بقري",
  },
  {
    id: "2",
    name: "لحم غنم طازج",
    description: "لحم غنم طازج من أفضل المزارع المحلية",
    price: 95,
    unit: "كيلو",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 95,
    badge: "جديد",
    category: "لحم غنم",
  },
  {
    id: "3",
    name: "لحم إبل",
    description: "لحم إبل طازج من أفضل المزارع المحلية",
    price: 75,
    unit: "كيلو",
    image: "/placeholder.svg?height=300&width=300",
    rating: 3,
    reviews: 80,
    badge: null,
    category: "لحم إبل",
  },
  {
    id: "4",
    name: "لحم واغيو",
    description: "لحم واغيو الياباني الفاخر",
    price: 450,
    unit: "كيلو",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviews: 50,
    badge: null,
    category: "لحوم فاخرة",
  },
]

const testimonials = [
  {
    name: "أحمد",
    text: "أفضل جودة لحوم طازجة وجدتها على الإطلاق! خدمة التوصيل سريعة والأسعار ممتازة.",
    avatar: "/placeholder.svg?height=100&width=100",
    location: "الرياض",
    rating: 5,
  },
  {
    name: "ليلى",
    text: "أحببت تنوع اللحوم لديهم. كل شيء طازج ولذيذ، وسأطلب منهم بالتأكيد مرة أخرى.",
    avatar: "/placeholder.svg?height=100&width=100",
    location: "جدة",
    rating: 4,
  },
  {
    name: "خالد",
    text: "خدمة عملاء رائعة ومنتجات عالية الجودة. أوصي بهم بشدة لكل محبي اللحوم الطازجة.",
    avatar: "/placeholder.svg?height=100&width=100",
    location: "الدمام",
    rating: 5,
  },
]
