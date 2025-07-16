import { useCartStore } from "@/features/cart/store/useCartStore";
import { Icon } from "@iconify/react";

interface Props {
  onClick?: () => void;
}

export function CartButton({ onClick }: Props) {
  const { items } = useCartStore();

  return (
    <button
      onClick={onClick}
      className="relative hover:scale-110 transition-transform pt-1 cursor-pointer"
      aria-label="Carrito"
      data-testid="open-cart-button"
    >
      <Icon
        icon="mdi:cart"
        width={22}
        height={22}
        className="text-muted-foreground"
      />
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
        {items.length}
      </span>
    </button>
  );
}
