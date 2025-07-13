import { links } from "./links";
import { useUserStore } from "@/features/user/store/useUserStore";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "@/components/custom";
import { CartSheet } from "@/features/cart/components";
import { UserProfile } from "@/features/user/components/UserProfile";
import { MobileDrawer } from "../MobileDrawer";

export function Topbar() {
  const user = useUserStore((state) => state.user);

  const TopbarActions = () => (
    <div className="flex items-center gap-7">
      <ThemeToggle />
      <CartSheet />
      <UserProfile user={user} />
    </div>
  );

  return (
    <header className="flex items-center px-4 sm:px-6 py-3 border-b bg-background">
      <div className="flex md:hidden items-center justify-between w-full">
        <MobileDrawer />
        <TopbarActions />
      </div>

      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex flex-1 items-start justify-start">
          <NavLinks links={links} />
        </div>
        <TopbarActions />
      </div>
    </header>
  );
}
