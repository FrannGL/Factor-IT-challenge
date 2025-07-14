import type { Product } from "@/features/product/interfaces/product.interface";

export interface Purchase {
  ticketNumber: string;
  purchaseDate: string;
  purchaseTime: string;
  products: Product[];
  total: number;
  cartType?: "COMUN" | "FECHA_ESPECIAL" | "VIP";
}
