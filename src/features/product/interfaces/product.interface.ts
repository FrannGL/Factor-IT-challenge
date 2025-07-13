import type { ProductColorVariant } from "@/features/product/interfaces";
import type { Gender, Size } from "../types";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity?: number;
  sizes: Size[];
  gender: Gender;
  colors: ProductColorVariant[];
}
