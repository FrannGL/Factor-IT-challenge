import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartState, DiscountBreakdown } from "../interfaces";
import { useUserStore } from "@/features/user/store/useUserStore";
import { formatDateKey } from "@/lib";
import { specialDates } from "@/data/special-dates";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      selectedDate: new Date(),
      cartType: "COMUN",

      setSelectedDate: (date) => {
        set({ selectedDate: date });
        get().updateCartType();
      },

      addItem: (newItem) =>
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) =>
              item.product.id === newItem.product.id &&
              item.color === newItem.color &&
              item.size === newItem.size
          );

          let updatedItems;
          if (existingIndex !== -1) {
            updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += newItem.quantity;
          } else {
            updatedItems = [...state.items, newItem];
          }

          return { items: updatedItems };
        }),

      removeItem: (productId, color, size) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.product.id === productId &&
                item.color === color &&
                item.size === size
              )
          ),
        })),

      updateQuantity: (productId, color, size, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId &&
            item.color === color &&
            item.size === size
              ? { ...item, quantity }
              : item
          ),
        })),

      clearCart: () =>
        set({ items: [], selectedDate: new Date(), cartType: "COMUN" }),

      getTotalItems: () => {
        const items = get().items;
        return items.reduce((acc, item) => acc + item.quantity, 0);
      },

      getSubtotal: () => {
        const items = get().items;
        return items.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
      },

      updateCartType: () => {
        const { selectedDate } = get();
        const user = useUserStore.getState().user;
        const isVip = user?.isVip ?? false;

        const dateStr = selectedDate ? formatDateKey(selectedDate) : null;
        const isSpecialDate = dateStr ? specialDates.includes(dateStr) : false;

        if (isSpecialDate) {
          set({ cartType: "FECHA_ESPECIAL" });
        } else if (isVip) {
          set({ cartType: "VIP" });
        } else {
          set({ cartType: "COMUN" });
        }
      },

      getDiscountBreakdown: () => {
        const { items, cartType } = get();
        const discounts: DiscountBreakdown[] = [];
        const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

        const originalTotal = items.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );

        if (totalItems === 4) {
          const discountAmount = originalTotal * 0.25;
          discounts.push({
            label: "25% descuento por 4 productos",
            amount: discountAmount,
          });
        }

        if (totalItems > 10) {
          discounts.push({
            label: "Descuento adicional +10 productos",
            amount: 100,
          });

          if (cartType === "FECHA_ESPECIAL") {
            discounts.push({
              label: "Descuento fecha especial",
              amount: 300,
            });
          }

          if (cartType === "VIP") {
            if (items.length > 0) {
              const cheapest = items.reduce((prev, curr) =>
                prev.product.price < curr.product.price ? prev : curr
              );
              discounts.push({
                label: "Producto más barato bonificado",
                amount: cheapest.product.price,
              });
            }

            discounts.push({
              label: "Descuento VIP",
              amount: 500,
            });
          }
        }

        return discounts;
      },

      getTotalWithDiscounts: () => {
        const { items, cartType } = get();
        const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

        let total = items.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );

        if (totalItems === 4) {
          total *= 0.75;
        }

        if (totalItems > 10) {
          total -= 100;

          if (cartType === "FECHA_ESPECIAL") {
            total -= 300;
          }

          if (cartType === "VIP") {
            if (items.length > 0) {
              const cheapest = items.reduce((prev, curr) =>
                prev.product.price < curr.product.price ? prev : curr
              );
              total -= cheapest.product.price;
            }

            total -= 500;
          }
        }

        return Math.max(total, 0);
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        items: state.items,
        selectedDate: state.selectedDate,
        cartType: state.cartType,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.selectedDate) {
          state.selectedDate = new Date(state.selectedDate);
        }
      },
    }
  )
);
