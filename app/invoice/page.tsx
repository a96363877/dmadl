import Link from "next/link"
import { Fish, Download, Printer, ArrowLeft, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MiniCart } from "@/components/mini-cart"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function InvoicePage() {
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
            <Link href="/" className="text-gray-600 hover:text-red-600">
              الرئيسية
            </Link>
            <Link href="/shipping" className="text-gray-600 hover:text-red-600">
              الشحن
            </Link>
            <Link href="/checkout" className="text-gray-600 hover:text-red-600">
              الدفع
            </Link>
            <Link href="/invoice" className="text-red-600 hover:text-red-800">
              الفواتير
            </Link>
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            <MiniCart />
          </nav>
          <Button className="hidden md:flex bg-red-600 hover:bg-red-700">تسجيل الدخول</Button>
        </div>
      </header>

      {/* Order Confirmation */}
      <section className="bg-red-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">تم تأكيد طلبك!</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            شكرًا لطلبك من بحر الخيرات. تم إرسال تفاصيل الطلب إلى بريدك الإلكتروني.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700">
              <Printer className="mr-2 h-4 w-4" />
              طباعة الفاتورة
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              تحميل PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Invoice */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader className="border-b">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">فاتورة</CardTitle>
                  <p className="text-gray-500 mt-1">رقم الطلب: #INV-12345</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Fish className="h-8 w-8 text-red-600" />
                  <span className="text-xl font-bold text-red-600">بحر الخيرات</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">معلومات العميل</h3>
                  <div className="text-sm">
                    <p>محمد أحمد</p>
                    <p>الرياض، حي النزهة</p>
                    <p>شارع الملك فهد</p>
                    <p>الرمز البريدي: 12345</p>
                    <p>هاتف: 966512345678+</p>
                    <p>البريد الإلكتروني: mohammed@example.com</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">معلومات الفاتورة</h3>
                  <div className="text-sm">
                    <p>تاريخ الطلب: 15 مايو 2025</p>
                    <p>تاريخ التسليم المتوقع: 17 مايو 2025</p>
                    <p>طريقة الدفع: بطاقة ائتمان</p>
                    <p>حالة الطلب: تم التأكيد</p>
                  </div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">الرقم</TableHead>
                    <TableHead>المنتج</TableHead>
                    <TableHead className="text-right">السعر</TableHead>
                    <TableHead className="text-right">الكمية</TableHead>
                    <TableHead className="text-right">المجموع</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>سمك السلمون</TableCell>
                    <TableCell className="text-right">75.99 ر.س</TableCell>
                    <TableCell className="text-right">2</TableCell>
                    <TableCell className="text-right">151.98 ر.س</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>جمبري كبير</TableCell>
                    <TableCell className="text-right">120.50 ر.س</TableCell>
                    <TableCell className="text-right">1</TableCell>
                    <TableCell className="text-right">120.50 ر.س</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>سمك السيباس</TableCell>
                    <TableCell className="text-right">65.75 ر.س</TableCell>
                    <TableCell className="text-right">1</TableCell>
                    <TableCell className="text-right">65.75 ر.س</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-8 flex justify-end">
                <div className="w-full max-w-xs">
                  <div className="flex justify-between py-2">
                    <span>المجموع الفرعي:</span>
                    <span>338.23 ر.س</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>الشحن:</span>
                    <span>15.00 ر.س</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>الضريبة (15%):</span>
                    <span>50.73 ر.س</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between py-2 font-bold">
                    <span>الإجمالي:</span>
                    <span>403.96 ر.س</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t">
              <div className="w-full py-4">
                <h3 className="font-semibold mb-2">ملاحظات</h3>
                <p className="text-sm text-gray-600">
                  شكرًا لاختيارك بحر الخيرات. نتمنى أن تستمتع بمنتجاتنا البحرية الطازجة. إذا كان لديك أي استفسار، يرجى
                  التواصل مع خدمة العملاء على الرقم 966512345678+
                </p>
              </div>
              <Link href="/">
                <Button variant="outline" className="mt-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  العودة للتسوق
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">بحر الخيرات</h3>
              <p className="text-gray-400">أفضل متجر لبيع الأسماك الطازجة والمأكولات البحرية في المملكة</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-400 hover:text-white">
                    الشحن
                  </Link>
                </li>
                <li>
                  <Link href="/checkout" className="text-gray-400 hover:text-white">
                    الدفع
                  </Link>
                </li>
                <li>
                  <Link href="/invoice" className="text-gray-400 hover:text-white">
                    الفواتير
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li>الرياض، المملكة العربية السعودية</li>
                <li>هاتف: 966512345678+</li>
                <li>البريد الإلكتروني: info@bahralkhayraat.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">النشرة البريدية</h3>
              <p className="text-gray-400 mb-2">اشترك للحصول على أحدث العروض والمنتجات</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                />
                <Button className="rounded-r-md rounded-l-none bg-red-600 hover:bg-red-700">اشتراك</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 بحر الخيرات. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
