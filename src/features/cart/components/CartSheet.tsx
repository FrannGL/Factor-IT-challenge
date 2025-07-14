import { useState } from "react";

import type { Purchase } from "@/features/user/interfaces/purchase";
import { toast } from "sonner";
import { format } from "date-fns";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUserStore } from "@/features/user/store/useUserStore";
import { formatNumberWithThousands } from "@/lib";
import { CartButton } from "./CartButton";
import { CartProduct } from "./CartProduct";

export function CartSheet() {
  const [open, setOpen] = useState(false);

  const {
    items,
    clearCart,
    getTotalWithDiscounts,
    getSubtotal,
    getDiscountBreakdown,
    cartType,
  } = useCartStore();

  const addPurchase = useUserStore((state) => state.addPurchase);

  const subtotal = getSubtotal();
  const total = getTotalWithDiscounts();
  const discountBreakdown = getDiscountBreakdown();

  const handleFinalizePurchase = () => {
    if (items.length === 0) {
      toast.error("El carrito está vacío.");
      return;
    }

    const now = new Date();

    const products = items.map((item) => ({
      ...item.product,
      color: item.color,
      size: item.size,
      quantity: item.quantity,
    }));

    const purchase: Purchase = {
      ticketNumber: "#0000087H",
      purchaseDate: format(now, "dd-MM-yyyy"),
      purchaseTime: format(now, "HH:mm"),
      products,
      total,
      cartType,
    };

    addPurchase(purchase);

    clearCart();
    setOpen(false);
    toast.success("Compra finalizada con éxito!");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <CartButton />
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[400px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Tu carrito</SheetTitle>
          <SheetDescription>
            Aquí puedes ver los productos agregados a tu carrito.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center items-center px-4">
            No hay productos en el carrito.
          </div>
        ) : (
          <ScrollArea className="h-[calc(100vh-160px)] pr-2 mt-4">
            <div className="space-y-6 px-4">
              {items.map((item) => (
                <CartProduct
                  key={`${item.product.id}-${item.color}-${item.size}`}
                  item={item}
                />
              ))}
            </div>
          </ScrollArea>
        )}

        {items.length > 0 && (
          <SheetFooter className="mt-6 flex flex-col gap-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Tipo de carrito:</span>
              <span>{cartType}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>Subtotal:</span>
              <span className="flex flex-col items-end">
                <span>${formatNumberWithThousands(subtotal)} ARS</span>
              </span>
            </div>

            {discountBreakdown.length > 0 && (
              <div className="space-y-1">
                {discountBreakdown.map((discount, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm text-green-600"
                  >
                    <span>{discount.label}:</span>
                    <span>
                      - ${formatNumberWithThousands(discount.amount)} ARS
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${formatNumberWithThousands(total)} ARS</span>
            </div>
            <Button
              className="w-full cursor-pointer"
              disabled={items.length === 0}
              onClick={handleFinalizePurchase}
            >
              Finalizar compra
            </Button>
            <Button
              variant="ghost"
              className="w-full cursor-pointer"
              onClick={clearCart}
              disabled={items.length === 0}
            >
              Vaciar carrito
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
