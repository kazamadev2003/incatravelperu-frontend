"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ShoppingCart, Trash2, Calendar, Users, Info } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import type { CartItem } from "@/types/cart"
import { useTranslation } from "@/lib/i18n/context"
import { PRIMARY_RESERVATION_PHONE_DISPLAY, PRIMARY_RESERVATION_WHATSAPP } from "@/lib/constants"

export function CartDrawer() {
  const [open, setOpen] = useState(false)
  const { locale, dictionary } = useTranslation()
  const translations = dictionary.checkout
  const { cart, isLoading, removeItem, clearCart, itemCount } = useCart()
  const router = useRouter()
  const whatsappHref = `https://wa.me/${PRIMARY_RESERVATION_WHATSAPP}?text=${encodeURIComponent(
    translations.touristIzipayTitle,
  )}`

  const formatDate = (date?: string) => {
    if (!date) return translations.dateNotSpecified
    return new Date(date).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getTotalPeople = (item: CartItem) => {
    const adults = item.adults || 0
    const children = item.children || 0
    const infants = item.infants || 0
    return adults + children + infants
  }

  const getProductDisplayName = (item: CartItem): string => {
    // If productId is an object with title, use it
    if (typeof item.productId === "object" && item.productId.title) {
      return item.productId.title
    }
    // Fallback to productTitle if exists (legacy)
    if (item.productTitle) return item.productTitle
    // Otherwise create a fallback name based on product type
    return item.productType === "Tour" ? "Tour" : translations.transport
  }

  const getProductImage = (item: CartItem): string => {
    // If productId is an object with images, use the first one
    if (typeof item.productId === "object" && item.productId.images && item.productId.images.length > 0) {
      return item.productId.images[0].url
    }
    // Fallback to productImage if exists (legacy)
    if (item.productImage) return item.productImage
    return "/placeholder.svg"
  }

  const getProductId = (item: CartItem): string => {
    if (typeof item.productId === "object") {
      return item.productId._id
    }
    return item.productId
  }

  const calculateCartTotal = () => {
    if (!cart?.items?.length) return 0
    if (cart.grandTotal && cart.grandTotal > 0) return cart.grandTotal
    return cart.items.reduce((sum, item) => sum + (item.totalPrice ?? 0), 0)
  }

  const calculateSubtotal = () => {
    if (!cart?.items?.length) return 0
    if (cart.subtotal && cart.subtotal > 0) return cart.subtotal
    return cart.items.reduce((sum, item) => sum + (item.totalPrice ?? 0), 0)
  }

  const handleProceedToCheckout = () => {
    setOpen(false)
    router.push(`/${locale}/checkout`)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:bg-accent rounded-full transition-colors">
          <ShoppingCart className="w-5 h-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-neon-orange text-black text-xs flex items-center justify-center rounded-full font-black">
              {itemCount}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:w-[500px] flex flex-col pt-0 z-[999]">
        <SheetHeader className="border-b pb-4 pt-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-black uppercase tracking-tighter">{translations.cartTitle}</SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex flex-col flex-1 overflow-hidden">
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-neon-orange border-t-transparent rounded-full" />
            </div>
          ) : !cart || cart.items?.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-black mb-2 uppercase tracking-tighter">{translations.emptyTitle}</h3>
              <p className="text-sm text-gray-600">{translations.cartEmptyDescription}</p>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {cart?.items?.map((item, index) => (
                    <div key={`${getProductId(item)}-${index}`} className="border rounded-lg p-4">
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 shrink-0 rounded overflow-hidden">
                          <Image
                            src={getProductImage(item) || "/placeholder.svg"}
                            alt={getProductDisplayName(item)}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-black text-sm line-clamp-2 uppercase tracking-tight">
                                {getProductDisplayName(item)}
                              </h4>
                              <span className="text-xs text-gray-600 capitalize font-medium">
                                {item.productType === "Tour" ? "Tour" : translations.transport}
                              </span>
                            </div>
                            <button
                              onClick={() => removeItem(getProductId(item))}
                              className="p-1 hover:bg-red-100 hover:text-red-600 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {item.travelDate && (
                            <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(item.travelDate)}</span>
                            </div>
                          )}

                          {item.productType === "Tour" && getTotalPeople(item) > 0 && (
                            <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
                              <Users className="w-3 h-3" />
                              <span>
                                {item.adults && `${item.adults} ${translations.adults}`}
                                {item.children && `, ${item.children} ${translations.children}`}
                                {item.infants && `, ${item.infants} ${translations.infants}`}
                              </span>
                            </div>
                          )}

                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-sm font-black">${(item.unitPrice ?? 0).toFixed(2)}</span>
                            <span className="text-sm font-black">${(item.totalPrice ?? 0).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>

                      {item.notes && (
                        <div className="mt-2 pt-2 border-t">
                          <p className="text-xs text-gray-600">{item.notes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="border-t p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-medium">{translations.subtotal}</span>
                    <span className="font-black">${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  {(cart?.discountTotal ?? 0) > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-medium">{translations.discount}</span>
                      <span className="text-green-600 font-black">-${cart?.discountTotal.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex items-center justify-between text-lg font-black uppercase tracking-tight">
                    <span>{translations.cartTotal}</span>
                    <span>${calculateCartTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2 border border-gray-200 bg-gray-50 p-3 text-left">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-neon-orange" />
                    <div className="space-y-2">
                      <p className="text-xs font-bold leading-5 text-gray-800">{translations.touristIzipayText}</p>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex text-xs font-black uppercase tracking-tight text-black underline decoration-neon-orange underline-offset-4"
                      >
                        {translations.touristIzipayAction} {PRIMARY_RESERVATION_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-black text-white hover:bg-neon-orange hover:text-black font-black uppercase"
                    size="lg"
                    onClick={handleProceedToCheckout}
                  >
                    {translations.proceedToPayment}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border border-black text-black hover:bg-black hover:text-white font-black uppercase"
                    size="sm"
                    onClick={clearCart}
                  >
                    {translations.clearCart}
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartDrawer
