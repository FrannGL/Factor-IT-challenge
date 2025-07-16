import { Icon } from "@iconify/react";

export function QuantitySelector({
  quantity,
  onDecrement,
  onIncrement,
  onChange,
}: {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className="flex items-center border rounded overflow-hidden max-w-[120px] 
                 bg-white text-gray-900 border-gray-300
                 dark:bg-black dark:text-white dark:border-gray-600"
    >
      <button
        type="button"
        onClick={onDecrement}
        className="px-2 py-1 border-r border-gray-300 text-gray-900 hover:bg-gray-100 transition
                   dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 cursor-pointer"
        aria-label="Disminuir cantidad"
      >
        <Icon icon="material-symbols:remove" width={20} height={20} />
      </button>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={onChange}
        name="quantity"
        className="w-10 text-center outline-none bg-white text-gray-900
             dark:bg-gray-900 dark:text-white"
        aria-label="Cantidad"
        style={{
          MozAppearance: "textfield",
          WebkitAppearance: "none",
          margin: 0,
        }}
      />
      <button
        type="button"
        onClick={onIncrement}
        className="px-2 py-1 border-l border-gray-300 text-gray-900 hover:bg-gray-100 transition
                   dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 cursor-pointer"
        aria-label="Aumentar cantidad"
      >
        <Icon icon="material-symbols:add" width={20} height={20} />
      </button>
    </div>
  );
}
