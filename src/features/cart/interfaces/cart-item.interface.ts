import type { Product } from "@/features/product/interfaces/product.interface";

export interface CartItem {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}
