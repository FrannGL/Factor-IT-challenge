import type { CartType } from "../types/cart-type.type.ts";
import type { CartItem } from "./cart-item.interface";
import type { DiscountBreakdown } from "./discount-breakdown.interface.ts";

export interface CartState {
  items: CartItem[];
  selectedDate: Date | null;
  cartType: CartType;
  setSelectedDate: (date: Date) => void;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, color: string, size: string) => void;
  updateQuantity: (
    productId: string,
    color: string,
    size: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getTotalWithDiscounts: () => number;
  getDiscountBreakdown: () => DiscountBreakdown[];
  updateCartType: () => void;
}
