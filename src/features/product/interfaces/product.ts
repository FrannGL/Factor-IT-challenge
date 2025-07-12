import type { ProductColorVariant } from "@/features/product/interfaces";
import type { Gender, Size } from "@/features/product/types";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: Size[];
  gender: Gender;
  colors: ProductColorVariant[];
}
