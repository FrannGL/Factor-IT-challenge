import { Icon } from "@iconify/react";
import { useFilterStore } from "@/features/filters/store/useFilterStore";

interface NavLinksProps {
  links: { label: string; icon: string }[];
}

export function NavLinks({ links }: NavLinksProps) {
  const [all, ...restLinks] = links;

  const category = useFilterStore((state) => state.category);
  const setCategory = useFilterStore((state) => state.setCategory);
  const clearFilters = useFilterStore((state) => state.clearFilters);

  const isInicioActive = category === "";
  const isCategoryActive = (label: string) => category === label.toLowerCase();

  return (
    <nav className="flex flex-row gap-2 items-center">
      <div className="flex flex-row gap-3 px-4">
        {restLinks.map(({ label }) => (
          <button
            key={label}
            type="button"
            onClick={() => {
              clearFilters();
              setCategory(label.toLowerCase());
            }}
            className={`cursor-pointer flex items-center gap-2 px-2 py-2 text-sm transition-all duration-200 border-b-2 ${
              isCategoryActive(label)
                ? "border-primary text-primary"
                : "border-transparent hover:border-primary hover:text-primary"
            }`}
          >
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="pl-4 border-l">
        <button
          type="button"
          onClick={() => {
            clearFilters();
            setCategory("");
          }}
          className={`cursor-pointer flex items-center gap-2 px-2 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
            isInicioActive
              ? "border-primary text-primary"
              : "border-transparent hover:border-primary hover:text-primary"
          }`}
        >
          <Icon icon={all.icon} width={18} height={18} />
          <span>{all.label}</span>
        </button>
      </div>
    </nav>
  );
}
