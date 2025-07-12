import { useFilterStore } from "@/features/filters/store/useFilterStore";
import { SIZES } from "../constants/filters.constants";

export function SizeFilter() {
  const { size, setSize } = useFilterStore();

  return (
    <div className="flex flex-col justify-center align-center gap-3 border-b pb-5">
      <p className="text-xs text-center text-gray-400">Filtrar por Talle</p>
      <div className="flex items-center gap-2">
        {SIZES.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s === size ? null : s)}
            className={`text-xs px-2 py-1 border rounded cursor-pointer transition-colors
            ${
              s === size
                ? "bg-gray-300 text-black border-primary hover:bg-gray-400 dark:bg-gray-200 dark:hover:bg-gray-300"
                : "border-gray-300 text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
            }
        `}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
