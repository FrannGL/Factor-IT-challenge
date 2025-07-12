import type { CartItem } from "../interfaces/cart-item.interface";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { formatNumberWithThousands } from "@/lib";

interface CartProductProps {
  item: CartItem;
}

export function CartProduct({ item }: CartProductProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const colorVariant = item.product.colors.find((c) => c.name === item.color);
  const imageSrc = colorVariant?.images[0] ?? "/placeholder.png";

  return (
    <div key={`${item.product.id}-${item.color}-${item.size}`}>
      <div className="flex gap-4 items-center">
        <img
          src={imageSrc}
          alt={`${item.product.name} - ${item.color}`}
          className="w-16 h-16 rounded object-cover"
        />
        <div className="flex-1">
          <div className="font-medium">{item.product.name}</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>Color:</span>
            <span
              className="inline-block w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: item.color }}
            />
            <span>Talle: {item.size}</span>
          </div>

          <div className="flex items-center mt-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                updateQuantity(
                  item.product.id,
                  item.color,
                  item.size,
                  Math.max(item.quantity - 1, 1)
                )
              }
            >
              -
            </Button>
            <span className="text-sm w-6 text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                updateQuantity(
                  item.product.id,
                  item.color,
                  item.size,
                  item.quantity + 1
                )
              }
            >
              +
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeItem(item.product.id, item.color, item.size)}
            >
              Quitar
            </Button>
          </div>
        </div>
        <div className="text-sm font-medium">
          ${formatNumberWithThousands(item.product.price * item.quantity)}
        </div>
      </div>
      <Separator className="mt-4" />
    </div>
  );
}
