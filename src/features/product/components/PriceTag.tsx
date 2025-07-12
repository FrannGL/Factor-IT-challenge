import { formatNumberWithThousands } from "@/lib";

export function PriceTag({ price }: { price: number }) {
  return (
    <div className="font-bold text-primary">
      ${formatNumberWithThousands(price)} ARS
    </div>
  );
}
