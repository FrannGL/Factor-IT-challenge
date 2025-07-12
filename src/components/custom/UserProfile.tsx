import { useState, useEffect, useRef } from "react";


import type { User } from "@/features/user/interfaces";
import { Icon } from "@iconify/react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserDropdown } from "@/features/user/components/UserDropdown";

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
