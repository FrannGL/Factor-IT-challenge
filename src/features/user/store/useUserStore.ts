import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { User, Purchase } from "../interfaces/";
import { users, type UserKey } from "@/data/users";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { getInitialUser } from "../utils/getInitialUser";

type UserStore = {
  user: User;
  setUser: (key: UserKey) => void;
  addPurchase: (purchase: Purchase) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: getInitialUser(),

      setUser: (key) => {
        useCartStore.getState().clearCart();
        set({ user: users[key] });
      },

      addPurchase: (purchase) =>
        set((state) => ({
          user: {
            ...state.user,
            purchases: [...state.user.purchases, purchase],
          },
        })),
    }),
    {
      name: "user-storage",
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);
