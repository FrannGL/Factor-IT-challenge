import type { Product } from "@/features/product/interfaces/product";

export interface CartItem {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}
