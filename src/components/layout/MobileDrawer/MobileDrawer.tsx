import { useState } from "react";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { links } from "../Topbar/links";
import { Filters, ActiveFilters } from "@/features/filters/components";
import { useFilterStore } from "@/features/filters/store/useFilterStore";
import { DatePicker } from "@/components/custom";
import { UserSelector } from "@/features/user/components/UserSelector";
import { Logo } from "../Sidebar/Logo";

export function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const category = useFilterStore((state) => state.category);
  const setCategory = useFilterStore((state) => state.setCategory);
  const clearFilters = useFilterStore((state) => state.clearFilters);

  const isCategoryActive = (label: string) => category === label.toLowerCase();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 overflow-y-auto">
        <SheetHeader className="text-left">
          <Logo />
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          <nav className="space-y-1">
            {links.map((link) => (
              <SheetClose key={link.label} asChild>
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    if (link.label === "Ver Todos") {
                      clearFilters();
                    } else {
                      setCategory(link.label.toLowerCase());
                    }
                  }}
                  className={`cursor-pointer flex items-center gap-2 px-2 py-2 text-sm transition-all duration-200 border-b-2 ${
                    isCategoryActive(link.label)
                      ? "border-primary text-primary"
                      : "border-transparent hover:border-primary hover:text-primary"
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              </SheetClose>
            ))}
          </nav>

          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold px-3 mb-2">Filtros</h3>
            <Filters />
            <ActiveFilters />
          </div>

          <div className="flex flex-col gap-2 p-4 border-t">
            <DatePicker />
            <UserSelector />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
