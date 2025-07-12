import { Icon } from "@iconify/react";
import { useFilterStore } from "@/features/filters/store/useFilterStore";

export function ActiveFilters() {
  const {
    color,
    size,
    gender,
    category,
    priceRange,
    setColor,
    setSize,
    setGender,
    setPriceRange,
    setCategory,
    clearFilters,
  } = useFilterStore();

  const filters: { label: string; onRemove: () => void }[] = [];

  if (color)
    filters.push({
      label: color.toUpperCase(),
      onRemove: () => setColor(null),
    });

  if (size)
    filters.push({
      label: size.toUpperCase(),
      onRemove: () => setSize(null),
    });

  if (gender)
    filters.push({
      label: gender.toUpperCase(),
      onRemove: () => setGender(null),
    });

  if (category && category !== "all")
    filters.push({
      label: category.toUpperCase(),
      onRemove: () => setCategory("all"),
    });

  if (priceRange[0] !== 10000 || priceRange[1] !== 100000)
    filters.push({
      label: `$${priceRange[0].toLocaleString()} - $${priceRange[1].toLocaleString()}`,
      onRemove: () => setPriceRange([10000, 100000]),
    });

  if (filters.length === 0) return null;

  return (
    <div className="px-4 mt-4 flex flex-wrap gap-2 items-center">
      {filters.map((filter, index) => (
        <span
          key={index}
          className="h-6 flex items-center gap-1 text-xs bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded"
        >
          {filter.label}
          <button
            onClick={filter.onRemove}
            aria-label="Quitar filtro"
            className="cursor-pointer hover:text-red-600"
          >
            <Icon icon="mdi:close" width={14} height={14} />
          </button>
        </span>
      ))}

      <button
        onClick={clearFilters}
        className="h-6 flex items-center cursor-pointer gap-1 text-xs px-2 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <Icon icon="mdi:broom" width={14} height={14} />
        Limpiar
      </button>
    </div>
  );
}
