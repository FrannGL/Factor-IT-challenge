import { useFilterStore } from "@/features/filters/store/useFilterStore";
import { COLORS } from "../constants/filters.constants";

export function ColorFilter() {
  const { color, setColor } = useFilterStore();

  return (
    <div className="flex flex-col justify-center align-center gap-3 border-b pb-5">
      <p className="text-xs text-center text-gray-400">Filtrar por Color</p>
      <div className="flex items-center gap-6.5">
        {COLORS.map((c) => (
          <button
            key={c}
            title={c}
            onClick={() => setColor(c === color ? null : c)}
            className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
              color === c ? "border-primary scale-120" : "border-gray-300"
            }`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
}
