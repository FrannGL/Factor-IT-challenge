import { useFilterStore } from "@/features/filters/store/useFilterStore";
import { GENDERS } from "../constants/filters.constants";

export function GenderFilter() {
  const { gender, setGender } = useFilterStore();

  return (
    <div className="flex flex-col justify-center align-center gap-3 border-b pb-5">
      <p className="text-xs text-center text-gray-400">Filtrar por Género</p>
      <div className="flex items-center gap-9">
        {GENDERS.map((g) => (
          <button
            key={g}
            onClick={() => setGender(g === gender ? null : g)}
            className={`text-xs px-2 py-1 border rounded capitalize cursor-pointer transition-colors
            ${
              g === gender
                ? "bg-gray-300 text-black border-primary hover:bg-gray-400 dark:bg-gray-200 dark:hover:bg-gray-300"
                : "border-gray-300 text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
            }
            `}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  );
}
