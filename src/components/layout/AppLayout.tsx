import { AppRoutes } from "@/routes/AppRoutes";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { useSyncFiltersWithURL } from "@/hooks/useSyncFilterWithURL";

export function AppLayout() {
  useSyncFiltersWithURL();

  return (
    <div className="flex h-screen dark:bg-background dark:text-foreground">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <main className="flex-1 flex flex-col bg-background text-foreground">
        <Topbar />
        <div className="flex-1 overflow-auto">
          <AppRoutes />
        </div>
      </main>
    </div>
  );
}
