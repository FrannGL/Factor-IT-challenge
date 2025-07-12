import type { Product } from "@/features/product/interfaces/product";

export interface Purchase {
  ticketNumber: string;
  purchaseDate: string;
  purchaseTime: string;
  products: Product[];
  total: number;
  cartType?: "COMUN" | "FECHA_ESPECIAL" | "VIP";
}
