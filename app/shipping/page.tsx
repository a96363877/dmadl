import Link from "next/link"
import Image from "next/image"
import { Fish, Truck, Clock, MapPin, ArrowRight, Search, Menu, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CountrySelector } from "@/components/country-selector"
import { PriceDisplay } from "@/components/price-display"
import { MiniCart } from "@/components/mini-cart"

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-red-900 text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4">
          توصيل مجاني للطلبات فوق 200 ريال | استخدم كود "FISH10" للحصول على خصم 10%
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Fish className="h-8 w-8 text-red-600" strokeWidth={1.5} />
                <span className="text-2xl font-bold text-red-700">بحر الخيرات</span>
              </Link>

              <div className="hidden lg:flex relative w-96">
                <Input placeholder="ابحث عن منتجات..." className="pr-10 border-red-200 focus-visible:ring-red-500" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <CountrySelector />
              <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                الرئيسية
              </Link>
              <Link href="/shipping" className="text-red-600 font-medium">
                الشحن والتوصيل
              </Link>
              <Link href="/checkout" className="text-gray-600 hover:text-red-600 transition-colors">
                الدفع
              </Link>
              <Link href="/invoice" className="text-gray-600 hover:text-red-600 transition-colors">
                الفواتير
              </Link>
              <div className="h-6 w-px bg-gray-200"></div>
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
                        <Fish className="h-6 w-6 text-red-600" />
                        <span className="text-xl font-bold text-red-700">بحر الخيرات</span>
                      </Link>
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
                        className="py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                      >
                        الرئيسية
                        <ChevronDown className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/shipping"
                        className="py-3 px-4 rounded-md text-red-700 bg-red-50 font-medium flex items-center justify-between"
                      >
                        الشحن والتوصيل
                        <ChevronDown className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/checkout"
                        className="py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                      >
                        الدفع
                        <ChevronDown className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/invoice"
                        className="py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                      >
                        الفواتير
                        <ChevronDown className="h-5 w-5" />
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
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shipping" className="font-medium text-red-700">
                  الشحن والتوصيل
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-red-900/90 to-red-700/80 z-10"></div>
        <div className="relative h-[300px]">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="خدمة الشحن والتوصيل"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge className="bg-white text-red-700 hover:bg-white mb-4">خدمة توصيل سريعة</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                معلومات الشحن والتوصيل
              </h1>
              <p className="text-lg text-white/90 mb-0 max-w-xl">
                نوفر خدمة توصيل سريعة وموثوقة لضمان وصول منتجاتنا البحرية الطازجة إلى منزلك في أفضل حالة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28">
                <Card className="border border-gray-200 shadow-sm overflow-hidden">
                  <CardHeader className="bg-red-50 border-b border-red-100">
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      خدمات الشحن
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <nav className="flex flex-col">
                      <Link
                        href="#shipping-options"
                        className="px-4 py-3 border-b hover:bg-gray-50 flex items-center justify-between text-red-700"
                      >
                        خيارات الشحن
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#delivery-areas"
                        className="px-4 py-3 border-b hover:bg-gray-50 flex items-center justify-between text-gray-700"
                      >
                        مناطق التوصيل
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#shipping-policy"
                        className="px-4 py-3 border-b hover:bg-gray-50 flex items-center justify-between text-gray-700"
                      >
                        سياسة الشحن
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#tracking"
                        className="px-4 py-3 hover:bg-gray-50 flex items-center justify-between text-gray-700"
                      >
                        تتبع الطلب
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </nav>
                  </CardContent>
                </Card>

                <Card className="mt-6 border border-gray-200 shadow-sm overflow-hidden">
                  <CardHeader className="bg-red-50 border-b border-red-100">
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      تواصل معنا
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="mb-4 text-gray-600">هل لديك أسئلة حول الشحن؟ تواصل مع فريق خدمة العملاء</p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-phone text-red-600"></i>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">اتصل بنا</p>
                          <p className="font-medium">966512345678+</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-envelope text-red-600"></i>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                          <p className="font-medium">support@bahralkhayraat.com</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">اتصل بنا</Button>
                  </CardContent>
                </Card>

                <Card className="mt-6 border border-gray-200 shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?height=400&width=600" alt="خدمة توصيل" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-bold text-lg mb-1">توصيل سريع ومضمون</h3>
                        <p className="text-sm text-white/80">نضمن وصول منتجاتنا طازجة إلى باب منزلك</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div id="shipping-options" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Truck className="h-5 w-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">خيارات الشحن</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  نقدم خيارات متعددة للشحن والتوصيل لتناسب احتياجاتك. جميع منتجاتنا يتم شحنها في عبوات مبردة خاصة للحفاظ
                  على طزاجتها وجودتها العالية.
                </p>

                <Tabs defaultValue="standard" className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <TabsList className="w-full grid grid-cols-3 bg-gray-50 p-0 h-auto border-b">
                    <TabsTrigger
                      value="standard"
                      className="data-[state=active]:bg-white data-[state=active]:text-red-700 data-[state=active]:shadow-none py-3"
                    >
                      الشحن العادي
                    </TabsTrigger>
                    <TabsTrigger
                      value="express"
                      className="data-[state=active]:bg-white data-[state=active]:text-red-700 data-[state=active]:shadow-none py-3"
                    >
                      الشحن السريع
                    </TabsTrigger>
                    <TabsTrigger
                      value="same-day"
                      className="data-[state=active]:bg-white data-[state=active]:text-red-700 data-[state=active]:shadow-none py-3"
                    >
                      التوصيل في نفس اليوم
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="standard" className="p-6 bg-white m-0">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Truck className="h-7 w-7 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">الشحن العادي</h3>
                        <p className="text-gray-600 mb-4">
                          يصل طلبك خلال 2-3 أيام عمل. مناسب للطلبات العادية وغير العاجلة. نستخدم شاحنات مبردة لضمان وصول
                          المنتجات طازجة.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">التكلفة:</span>
                            <PriceDisplay price={15} priceClassName="font-medium" />
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">وقت التوصيل:</span>
                            <span className="font-medium">2-3 أيام عمل</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">مجاني للطلبات فوق:</span>
                            <PriceDisplay price={200} priceClassName="font-medium" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="express" className="p-6 bg-white m-0">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-7 w-7 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">الشحن السريع</h3>
                        <p className="text-gray-600 mb-4">
                          يصل طلبك خلال 24 ساعة. مثالي للطلبات العاجلة. نضمن وصول المنتجات في أفضل حالة باستخدام تقنيات
                          تبريد متطورة.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">التكلفة:</span>
                            <PriceDisplay price={30} priceClassName="font-medium" />
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">وقت التوصيل:</span>
                            <span className="font-medium">خلال 24 ساعة</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">مجاني للطلبات فوق:</span>
                            <PriceDisplay price={350} priceClassName="font-medium" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="same-day" className="p-6 bg-white m-0">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-7 w-7 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">التوصيل في نفس اليوم</h3>
                        <p className="text-gray-600 mb-4">
                          يصل طلبك في نفس اليوم للطلبات قبل الساعة 12 ظهرًا. متاح فقط في المدن الرئيسية. الخيار الأمثل
                          للمناسبات العاجلة.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">التكلفة:</span>
                            <PriceDisplay price={50} priceClassName="font-medium" />
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600">وقت التوصيل:</span>
                            <span className="font-medium">نفس اليوم (للطلبات قبل الساعة 12 ظهرًا)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">مجاني للطلبات فوق:</span>
                            <PriceDisplay price={500} priceClassName="font-medium" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div id="delivery-areas" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">مناطق التوصيل</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  نغطي معظم مناطق المملكة العربية السعودية، مع خدمة توصيل سريعة في المدن الرئيسية. تختلف أوقات التوصيل
                  حسب المنطقة.
                </p>

                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-md p-4 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-4 w-4 text-red-600" />
                          </div>
                          <h3 className="font-semibold">المنطقة الوسطى</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mr-2">
                          <li>الرياض (توصيل في نفس اليوم متاح)</li>
                          <li>القصيم</li>
                          <li>حائل</li>
                          <li>الخرج</li>
                        </ul>
                      </div>
                      <div className="border rounded-md p-4 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-4 w-4 text-red-600" />
                          </div>
                          <h3 className="font-semibold">المنطقة الغربية</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mr-2">
                          <li>جدة (توصيل في نفس اليوم متاح)</li>
                          <li>مكة المكرمة</li>
                          <li>المدينة المنورة</li>
                          <li>الطائف</li>
                        </ul>
                      </div>
                      <div className="border rounded-md p-4 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-4 w-4 text-red-600" />
                          </div>
                          <h3 className="font-semibold">المنطقة الشرقية</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mr-2">
                          <li>الدمام (توصيل في نفس اليوم متاح)</li>
                          <li>الخبر</li>
                          <li>الظهران</li>
                          <li>الجبيل</li>
                        </ul>
                      </div>
                      <div className="border rounded-md p-4 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-4 w-4 text-red-600" />
                          </div>
                          <h3 className="font-semibold">المنطقة الجنوبية</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mr-2">
                          <li>أبها</li>
                          <li>خميس مشيط</li>
                          <li>نجران</li>
                          <li>جازان</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-red-700">ملاحظة:</span> قد تختلف أوقات التوصيل حسب المنطقة
                        والظروف الجوية. خدمة التوصيل في نفس اليوم متاحة فقط في المدن الرئيسية (الرياض، جدة، الدمام)
                        للطلبات المقدمة قبل الساعة 12 ظهرًا.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div id="shipping-policy" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-file-alt text-red-600"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">سياسة الشحن</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  نلتزم بتوفير خدمة شحن وتوصيل عالية الجودة لضمان وصول منتجاتنا البحرية الطازجة إلى عملائنا في أفضل
                  حالة. فيما يلي سياستنا المتعلقة بالشحن والتوصيل.
                </p>

                <Accordion type="single" collapsible className="border rounded-lg shadow-sm">
                  <AccordionItem value="item-1" className="border-b">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-box text-red-600"></i>
                        </div>
                        <span className="font-medium">كيف يتم تغليف المنتجات البحرية؟</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                      <div className="mr-10">
                        نستخدم تقنيات تغليف متطورة للحفاظ على برودة المنتجات البحرية وطزاجتها أثناء النقل. يتم تغليف كل
                        منتج بشكل منفصل في أكياس مخصصة ووضعها في صناديق عازلة مع ثلج جاف لضمان وصولها بأفضل حالة. جميع
                        مواد التغليف لدينا صديقة للبيئة وقابلة للتحلل.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-user-clock text-red-600"></i>
                        </div>
                        <span className="font-medium">ماذا لو لم أكن متواجدًا وقت التسليم؟</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                      <div className="mr-10">
                        سيحاول مندوب التوصيل الاتصال بك قبل الوصول. في حال عدم تواجدك، سيتم الاحتفاظ بالطلب في مركز
                        التوزيع وسنقوم بالتواصل معك لتحديد موعد توصيل آخر. نظرًا لطبيعة منتجاتنا القابلة للتلف، نوصي بشدة
                        بالتأكد من تواجدك وقت التسليم أو تحديد شخص آخر لاستلام الطلب نيابة عنك.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-map-marker-alt text-red-600"></i>
                        </div>
                        <span className="font-medium">هل يمكنني تغيير عنوان التوصيل بعد تقديم الطلب؟</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                      <div className="mr-10">
                        نعم، يمكنك تغيير عنوان التوصيل قبل شحن الطلب. يرجى التواصل مع خدمة العملاء في أقرب وقت ممكن
                        لتحديث العنوان. بعد شحن الطلب، لا يمكن تغيير العنوان. نحرص على تحديث حالة طلبك عبر الرسائل
                        النصية والبريد الإلكتروني لإبقائك على اطلاع بمراحل التوصيل.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 hover:no-underline">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-exchange-alt text-red-600"></i>
                        </div>
                        <span className="font-medium">ما هي سياسة الإرجاع للمنتجات البحرية؟</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                      <div className="mr-10">
                        نظرًا لطبيعة منتجاتنا القابلة للتلف، لا نقبل إرجاع المنتجات البحرية بعد استلامها. ومع ذلك، إذا
                        وصل المنتج في حالة غير مرضية أو تالفة، يرجى إبلاغنا خلال ساعتين من الاستلام مع صور توضيحية،
                        وسنقوم بتعويضك أو استبدال المنتج. نحن نضمن جودة منتجاتنا ونسعى دائمًا لرضا عملائنا.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="tracking" className="mb-12 scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-search-location text-red-600"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">تتبع الطلب</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  يمكنك تتبع طلبك بسهولة من خلال إدخال رقم الطلب أدناه. ستتمكن من معرفة حالة طلبك وموقعه الحالي ووقت
                  التسليم المتوقع.
                </p>

                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-info-circle text-red-600"></i>
                        <p className="text-red-700 text-sm">
                          بمجرد تأكيد طلبك، ستتلقى رسالة نصية وبريدًا إلكترونيًا يحتوي على رقم التتبع الخاص بطلبك.
                        </p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700 mb-1">
                        رقم الطلب
                      </label>
                      <div className="flex gap-2">
                        <Input
                          id="tracking-number"
                          placeholder="أدخل رقم الطلب"
                          className="flex-1 border-red-200 focus-visible:ring-red-500"
                        />
                        <Button className="bg-red-600 hover:bg-red-700">تتبع</Button>
                      </div>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <i className="fas fa-search text-gray-400 text-xl"></i>
                      </div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">لم يتم العثور على معلومات التتبع</h3>
                      <p className="text-gray-500 mb-0">أدخل رقم الطلب الصحيح للحصول على معلومات التتبع</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-xl text-white">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">هل أنت جاهز للطلب؟</h3>
                    <p className="mb-6 text-white/90">
                      استمتع بأفضل المأكولات البحرية الطازجة موصلة إلى باب منزلك. نضمن لك جودة عالية وتوصيل سريع وآمن.
                    </p>
                    <Link href="/">
                      <Button className="bg-white text-red-700 hover:bg-white/90">تسوق الآن</Button>
                    </Link>
                  </div>
                  <div className="md:w-1/3 relative h-40 w-full md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="أسماك طازجة"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Fish className="h-8 w-8 text-red-400" />
                <span className="text-2xl font-bold text-white">بحر الخيرات</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                نحن متخصصون في توفير أجود أنواع الأسماك والمأكولات البحرية الطازجة من مصادر مستدامة ومسؤولة، ونضمن
                وصولها إلى منزلك بأفضل حالة وبأسعار منافسة.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 hover:bg-red-600 h-10 w-10">
                  <i className="fab fa-facebook-f"></i>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 hover:bg-red-600 h-10 w-10">
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 hover:bg-red-600 h-10 w-10">
                  <i className="fab fa-instagram"></i>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 hover:bg-red-600 h-10 w-10">
                  <i className="fab fa-youtube"></i>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">روابط سريعة</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-red-400 transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-400 hover:text-red-400 transition-colors">
                    الشحن والتوصيل
                  </Link>
                </li>
                <li>
                  <Link href="/checkout" className="text-gray-400 hover:text-red-400 transition-colors">
                    الدفع
                  </Link>
                </li>
                <li>
                  <Link href="/invoice" className="text-gray-400 hover:text-red-400 transition-colors">
                    الفواتير
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">فئات المنتجات</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    الأسماك الطازجة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    المأكولات البحرية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    الأسماك المجمدة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    الكافيار والأطعمة الفاخرة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    التوابل والصلصات
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">تواصل معنا</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-red-400"></i>
                  </div>
                  <div>الرياض، حي النزهة، شارع الملك فهد، المملكة العربية السعودية</div>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-red-400"></i>
                  <span>هاتف: 966512345678+</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-envelope text-red-400"></i>
                  <span>البريد الإلكتروني: info@bahralkhayraat.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-clock text-red-400"></i>
                  <span>ساعات العمل: 9 صباحًا - 10 مساءً</span>
                </li>
              </ul>
            </div>
          </div>

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
              <div className="flex items-center gap-2">
                <div className="h-8 w-12 bg-gray-800 rounded"></div>
                <div className="h-8 w-12 bg-gray-800 rounded"></div>
                <div className="h-8 w-12 bg-gray-800 rounded"></div>
                <div className="h-8 w-12 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
