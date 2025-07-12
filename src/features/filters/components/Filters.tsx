import { ColorFilter } from "./ColorFilter";
import { GenderFilter } from "./GenderFilter";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { SizeFilter } from "./SizeFilter";

export function Filters() {
  return (
    <div className="flex flex-wrap gap-6 items-center px-4 py-2">
      <ColorFilter />
      <SizeFilter />
      <GenderFilter />
      <PriceRangeFilter />
    </div>
  );
}
