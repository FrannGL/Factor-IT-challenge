import { Icon } from "@iconify/react";

export function AddToCartButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white border border-gray-300 text-gray-900 px-5 py-1 rounded hover:bg-gray-100 transition flex items-center space-x-2
                 dark:bg-gray-900 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 cursor-pointer"
      aria-label="Agregar al carrito"
    >
      <Icon icon="material-symbols:add-shopping-cart" width={18} height={18} />
      <span>Agregar</span>
    </button>
  );
}
