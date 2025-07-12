import { useFilterStore } from "@/features/filters/store/useFilterStore";

export function PriceRangeFilter() {
  const { priceRange, setPriceRange } = useFilterStore();
  const [min, max] = priceRange;

  return (
    <div className="flex flex-col justify-center align-center gap-3 border-b pb-5">
      <p className="text-xs text-center text-gray-400">Filtrar por Rango de Precio</p>
      <div className="flex flex-col gap-1 w-52">
        <span className="text-xs font-medium">
          ${min.toLocaleString()} - ${max.toLocaleString()}
        </span>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={10000}
            max={100000}
            step={1000}
            value={min}
            onChange={(e) => setPriceRange([+e.target.value, max])}
            className="w-full"
          />
          <input
            type="range"
            min={10000}
            max={100000}
            step={1000}
            value={max}
            onChange={(e) => setPriceRange([min, +e.target.value])}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
