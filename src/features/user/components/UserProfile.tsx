import { useState } from "react";

import type { User } from "../interfaces";
import { useClickOutside } from "@/hooks/useClickOutside";
import { UserDropdown } from "./UserDropdown";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";

export function UserProfile({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  return (
    <div className="relative pt-1" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        className="relative cursor-pointer rounded-full hover:scale-105 transition-transform"
      >
        <Avatar>
          <AvatarImage src={user.avatarUrl} />
        </Avatar>

        {user.isVip && (
          <div className="absolute -bottom-1 -left-1 bg-background rounded-full p-0.5 shadow-md">
            <Icon icon="mdi:crown" className="text-yellow-400 w-4 h-4" />
          </div>
        )}
      </button>

      <UserDropdown user={user} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
