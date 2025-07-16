interface SizeListProps {
  sizes: string[];
  selectedSize: string | null;
  onSelect: (size: string) => void;
}

export function SizeList({ sizes, selectedSize, onSelect }: SizeListProps) {
  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size === selectedSize ? "" : size)}
          className={`text-xs px-2 py-1 h-7 border rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 ${
            size === selectedSize
              ? "bg-gray-300 text-black border-primary hover:bg-gray-400 dark:bg-gray-200 dark:hover:bg-white"
              : "border-gray-300 text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
          }`}
          data-testid={`size-button`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
