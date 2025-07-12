import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFilterStore } from "@/features/filters/store/useFilterStore";
import type { Gender, Size } from "@/features/product/types";

export function useSyncFiltersWithURL() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    color,
    size,
    gender,
    category,
    priceRange,
    setColor,
    setSize,
    setGender,
    setCategory,
    setPriceRange,
  } = useFilterStore();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const qColor = params.get("color");
    const qSize = params.get("size") as Size;
    const qGender = params.get("gender") as Gender;
    const qCategory = params.get("category");
    const qPriceFrom = params.get("priceFrom");
    const qPriceTo = params.get("priceTo");

    if (qColor) setColor(qColor);
    if (qSize) setSize(qSize);
    if (qGender) setGender(qGender);
    if (qCategory) setCategory(qCategory);

    if (qPriceFrom && qPriceTo) {
      const from = Number(qPriceFrom);
      const to = Number(qPriceTo);
      if (!isNaN(from) && !isNaN(to)) {
        setPriceRange([from, to]);
      }
    }
  }, [
    location.search,
    setCategory,
    setColor,
    setGender,
    setPriceRange,
    setSize,
  ]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (color) params.set("color", color);
    if (size) params.set("size", size ?? "");
    if (gender) params.set("gender", gender ?? "");
    if (category && category !== "all") params.set("category", category);
    if (priceRange[0] !== 10000 || priceRange[1] !== 100000) {
      params.set("priceFrom", priceRange[0].toString());
      params.set("priceTo", priceRange[1].toString());
    }

    const newSearch = params.toString();

    if (newSearch !== location.search.substring(1)) {
      navigate(
        { pathname: location.pathname, search: `?${newSearch}` },
        { replace: true }
      );
    }
  }, [
    color,
    size,
    gender,
    category,
    priceRange,
    navigate,
    location.pathname,
    location.search,
  ]);
}
