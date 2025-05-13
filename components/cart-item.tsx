"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, type CartItem } from "@/context/cart-context"
import { PriceDisplay } from "@/components/price-display"

interface CartItemProps {
  item: CartItem
  showControls?: boolean
}

export function CartItemComponent({ item, showControls = true }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    } else {
      removeItem(item.id)
    }
  }

  const handleRemove = () => {
    removeItem(item.id)
  }

  return (
    <div className="flex gap-4 py-4 border-b last:border-b-0">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-md" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{item.name}</h4>
        <div className="flex justify-between mt-1 text-sm text-gray-600">
          <span>
            السعر / {item.unit}: <PriceDisplay price={item.price} priceClassName="text-sm" />
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <PriceDisplay price={item.price * item.quantity} priceClassName="font-medium" />

          {showControls && (
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded-md">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-r-none"
                  onClick={handleDecrement}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-l-none"
                  onClick={handleIncrement}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-500 hover:text-red-500"
                onClick={handleRemove}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
