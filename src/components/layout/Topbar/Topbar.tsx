import { links } from "./links";
import { useUserStore } from "@/features/user/store/useUserStore";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "@/components/custom";
import { CartSheet } from "@/features/cart/components";
import { UserProfile } from "@/features/user/components/UserProfile";

export function Topbar() {
  const user = useUserStore((state) => state.user);

  return (
    <header className="flex items-center px-6 py-3 border-b bg-background justify-end gap-6">
      <div className="flex flex-1 items-start justify-start">
        <NavLinks links={links} />
      </div>

      <div className="flex items-center gap-7">
        <ThemeToggle />
        <CartSheet />
        <UserProfile user={user} />
      </div>
    </header>
  );
}
