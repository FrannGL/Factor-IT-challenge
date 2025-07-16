import { useColorFromURL } from "../hooks/useColorFromURL";

export function ColorSelector({
  colors,
  selectedColor,
  onSelect,
}: {
  colors: { name: string }[];
  selectedColor: string;
  onSelect: (colorName: string) => void;
}) {
  useColorFromURL({ colors, selectedColor, onSelect });

  return (
    <div className="flex space-x-2 mb-3">
      {colors.map(({ name }) => (
        <button
          key={name}
          type="button"
          title={name}
          onClick={() => onSelect(name)}
          className={`cursor-pointer w-6 h-6 rounded-full border transition ${
            selectedColor === name
              ? "border-2 border-primary scale-110"
              : "border-gray-300"
          }`}
          style={{ backgroundColor: name }}
          aria-label={`Seleccionar color ${name}`}
          data-testid={`color-${name}`}
        />
      ))}
    </div>
  );
}
