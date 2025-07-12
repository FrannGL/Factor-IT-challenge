import { create } from "zustand";
import type { FiltersState } from "../interfaces/filter-state.interface";

export const useFilterStore = create<FiltersState>((set) => ({
  color: null,
  size: null,
  gender: null,
  priceRange: [10000, 100000],
  category: null,
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
  setGender: (gender) => set({ gender }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setCategory: (category) => set({ category }),
  clearFilters: () =>
    set({
      color: null,
      size: null,
      gender: null,
      priceRange: [10000, 100000],
      category: null,
    }),
}));
