import { beforeEach, describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";

import type { User } from "@/features/user/interfaces";
import type { Product } from "@/features/product/interfaces";
import { useCartStore } from "./useCartStore";
import { useUserStore } from "@/features/user/store/useUserStore";
import { specialDates } from "@/data/special-dates";

// -----------------------------------------------------------

const getMockUser = (overrides?: Partial<User>): User => ({
  firstName: "Test",
  lastName: "User",
  email: "test@example.com",
  avatarUrl: "",
  isVip: false,
  purchases: [],
  ...overrides,
});

const mockProduct = (id: string, price: number): Product => ({
  id,
  price,
  name: `Product ${id}`,
  description: "",
  category: "Ropa",
  sizes: ["M"],
  gender: "unisex",
  colors: [
    {
      name: "black",
      images: [],
    },
  ],
});

// -----------------------------------------------------------

beforeEach(() => {
  useCartStore.getState().clearCart();
  useUserStore.setState({ user: getMockUser() });
});

// -----------------------------------------------------------

describe("Cart Store", () => {
  it("agrega items correctamente", () => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.addItem({
        product: mockProduct("1", 1000),
        color: "red",
        size: "M",
        quantity: 2,
      });
    });
    expect(result.current.items).toHaveLength(1);
    expect(result.current.getTotalItems()).toBe(2);
  });

  it("aumenta cantidad si se agrega el mismo producto", () => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.addItem({
        product: mockProduct("1", 1000),
        color: "blue",
        size: "M",
        quantity: 1,
      });
      result.current.addItem({
        product: mockProduct("1", 1000),
        color: "blue",
        size: "M",
        quantity: 3,
      });
    });
    expect(result.current.items).toHaveLength(1);
    expect(result.current.getTotalItems()).toBe(4);
  });

  it("remueve items correctamente", () => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.addItem({
        product: mockProduct("1", 1000),
        color: "black",
        size: "L",
        quantity: 1,
      });
      result.current.removeItem("1", "black", "L");
    });
    expect(result.current.items).toHaveLength(0);
  });

  it("actualiza la cantidad correctamente", () => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.addItem({
        product: mockProduct("2", 1500),
        color: "green",
        size: "S",
        quantity: 1,
      });
      result.current.updateQuantity("2", "green", "S", 5);
    });
    expect(result.current.items[0].quantity).toBe(5);
  });

  it("calcula correctamente el subtotal", () => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.addItem({
        product: mockProduct("3", 2000),
        color: "gray",
        size: "M",
        quantity: 2,
      });
    });
    expect(result.current.getSubtotal()).toBe(4000);
  });

  it("aplica descuento del 25% si hay 4 productos", () => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.addItem({
        product: mockProduct("1", 1000),
        color: "red",
        size: "M",
        quantity: 4,
      });
    });
    expect(result.current.getDiscountBreakdown()[0]).toEqual(
      expect.objectContaining({
        label: expect.stringContaining("25%"),
      })
    );
    expect(result.current.getTotalWithDiscounts()).toBe(3000);
  });

  it("aplica descuentos por más de 10 productos, VIP y bonifica el más barato", () => {
    const { result } = renderHook(() => useCartStore());

    useUserStore.setState({
      user: getMockUser({
        isVip: true,
        lastName: "VIP",
        email: "vip@example.com",
      }),
    });

    act(() => {
      for (let i = 0; i < 11; i++) {
        result.current.addItem({
          product: mockProduct(String(i), 1000 + i * 10),
          color: "red",
          size: "M",
          quantity: 1,
        });
      }
      result.current.updateCartType();
    });

    const breakdown = result.current.getDiscountBreakdown();

    expect(breakdown).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          label: expect.stringContaining("Descuento VIP"),
        }),
        expect.objectContaining({
          label: expect.stringContaining("bonificado"),
        }),
        expect.objectContaining({
          label: expect.stringContaining("+10 productos"),
        }),
      ])
    );

    const cheapest = 1000;
    const totalDescuentos = 100 + 500 + cheapest;
    const totalOriginal = result.current.getSubtotal();

    expect(result.current.getTotalWithDiscounts()).toBe(
      totalOriginal - totalDescuentos
    );
  });

  it("aplica descuento adicional en fechas especiales", () => {
    const { result } = renderHook(() => useCartStore());

    useUserStore.setState({ user: getMockUser() });

    act(() => {
      result.current.setSelectedDate(new Date(specialDates[0]));

      for (let i = 0; i < 11; i++) {
        result.current.addItem({
          product: mockProduct(String(i), 1000),
          color: "black",
          size: "L",
          quantity: 1,
        });
      }

      result.current.updateCartType();
    });

    const breakdown = result.current.getDiscountBreakdown();

    expect(breakdown).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          label: expect.stringContaining("fecha especial"),
        }),
      ])
    );

    expect(result.current.cartType).toBe("FECHA_ESPECIAL");
  });
});
