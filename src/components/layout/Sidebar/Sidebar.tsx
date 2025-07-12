import { Logo } from "./Logo";
import { ActiveFilters, Filters } from "@/features/filters/components";
import { DatePicker } from "@/components/custom";
import { UserSelector } from "@/features/user/components/UserSelector";

export function Sidebar() {
  return (
    <aside className="text-muted-foreground border border-r w-65 h-screen hidden md:flex flex-col justify-between">
      <div>
        <Logo />
        <Filters />
        <ActiveFilters />
      </div>

      <div className="flex flex-col gap-2 p-4 border-t">
        <DatePicker />
        <UserSelector />
      </div>
    </aside>
  );
}
