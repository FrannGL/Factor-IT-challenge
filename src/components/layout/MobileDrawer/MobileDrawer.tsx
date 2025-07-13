import { useState } from "react";

import { Menu } from "lucide-react";
import { Icon } from "@iconify/react";
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

export function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

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
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <nav className="space-y-2">
            {links.map((link) => (
              <SheetClose key={link.label} asChild>
                <button className="flex items-center space-x-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors w-full text-left">
                  <Icon icon={link.icon} className="h-4 w-4" />
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
        </div>
      </SheetContent>
    </Sheet>
  );
}
