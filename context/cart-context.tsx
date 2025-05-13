"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useCountry } from "./country-context"

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  unit: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  isCartOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { country } = useCountry()

  // استرجاع السلة من التخزين المحلي عند تحميل الصفحة
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error)
        setItems([])
      }
    }
  }, [])

  // حفظ السلة في التخزين المحلي عند تغييرها
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(items))
    } else {
      localStorage.removeItem("cart")
    }
  }, [items])

  // إضافة منتج إلى السلة
  const addItem = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        // إذا كان المنتج موجود بالفعل، قم بزيادة الكمية
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i))
      } else {
        // إذا كان المنتج جديدًا، أضفه إلى السلة
        return [...prevItems, { ...item, quantity }]
      }
    })
    // فتح السلة المصغرة عند إضافة منتج
    setIsCartOpen(true)
  }

  // إزالة منتج من السلة
  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // تحديث كمية منتج في السلة
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  // تفريغ السلة
  const clearCart = () => {
    setItems([])
    localStorage.removeItem("cart")
  }

  // حساب إجمالي عدد العناصر في السلة
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  // حساب المجموع الفرعي للسلة
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
