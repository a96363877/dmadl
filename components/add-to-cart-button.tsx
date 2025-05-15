"use client"

import { useState } from "react"
import { ShoppingCart, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

interface AddToCartButtonProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    unit: string
  }
  className?: string
  showIcon?: boolean
}

export function AddToCartButton({ product, className = "", showIcon = true }: any) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)

    // إعادة تعيين حالة الزر بعد ثانيتين
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <Button onClick={handleAddToCart} className={`bg-red-600 hover:bg-red-700 ${className}`} disabled={isAdded}>
      {isAdded ? (
        <>
          {showIcon && <Check className="h-4 w-4 mr-2" />}
          تمت الإضافة
        </>
      ) : (
        <>
          {showIcon && <ShoppingCart className="h-4 w-4 mr-2" />}
          إضافة للسلة
        </>
      )}
    </Button>
  )
}
