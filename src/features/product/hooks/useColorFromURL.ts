import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useColorFromURL({
  colors,
  selectedColor,
  onSelect,
}: {
  colors: { name: string }[];
  selectedColor: string;
  onSelect: (colorName: string) => void;
}) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const colorFromURL = searchParams.get("color");
    const availableColorNames = colors.map((c) => c.name.toLowerCase());

    if (
      colorFromURL &&
      availableColorNames.includes(colorFromURL.toLowerCase()) &&
      colorFromURL !== selectedColor
    ) {
      onSelect(colorFromURL);
    }
  }, [searchParams, colors, onSelect, selectedColor]);
}
