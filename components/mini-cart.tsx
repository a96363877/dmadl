"use client"

import { ShoppingCart, X } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { CartItemComponent } from "@/components/cart-item"
import { PriceDisplay } from "@/components/price-display"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function MiniCart() {
  const { items, itemCount, subtotal, isCartOpen, setIsCartOpen } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5 text-gray-600" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">{itemCount}</Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[350px] sm:w-[450px]">
        <SheetHeader className="text-right">
          <div className="flex items-center justify-between">
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              سلة التسوق ({itemCount})
            </SheetTitle>
          </div>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-10rem)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">سلة التسوق فارغة</h3>
              <p className="text-gray-500 mb-6">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
              <SheetClose asChild>
                <Link href="/">
                  <Button className="bg-teal-600 hover:bg-teal-700">تصفح المنتجات</Button>
                </Link>
              </SheetClose>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-1">
                <div className="space-y-1">
                  {items.map((item) => (
                    <CartItemComponent key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المجموع الفرعي:</span>
                    <PriceDisplay price={subtotal} />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الشحن:</span>
                    <span className="text-gray-600">يحدد عند الدفع</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>الإجمالي:</span>
                  <PriceDisplay price={subtotal} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <SheetClose asChild>
                    <Link href="/cart">
                      <Button variant="outline" className="w-full">
                        عرض السلة
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/checkout">
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">إتمام الشراء</Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
