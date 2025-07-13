import type { Gender, Size } from "@/features/product/types";

export interface FiltersState {
  color: string | null;
  size: Size | null;
  gender: Gender | null;
  priceRange: [number, number];
  category: string | null;
  setColor: (color: string | null) => void;
  setSize: (size: Size | null) => void;
  setGender: (gender: Gender | null) => void;
  setPriceRange: (range: [number, number]) => void;
  setCategory: (category: string | null) => void;
  clearFilters: () => void;
}
