import { formatNumberWithThousands } from "@/lib";

export function PriceTag({ price }: { price: number }) {
  return (
    <div className="font-bold text-primary" data-testid="product-price">
      ${formatNumberWithThousands(price)} ARS
    </div>
  );
}
