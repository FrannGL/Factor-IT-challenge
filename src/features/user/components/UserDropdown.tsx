import { useState } from "react";

import type { User } from "../interfaces";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UserPurchasesDialog } from "./UserPurchasesDialog";

interface UserDropdownProps {
  user: User;
  open: boolean;
  onClose: () => void;
}

export function UserDropdown({ user, open, onClose }: UserDropdownProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 bg-background border border-muted-foreground rounded-md shadow-lg p-4 z-50 text-sm"
          >
            <p className="font-semibold">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-muted-foreground truncate">{user.email}</p>
            <p className="mt-2 text-xs uppercase font-medium text-primary">
              {user.isVip ? "VIP" : "Usuario"}
            </p>

            <Button
              variant="outline"
              size="sm"
              className="mt-3 w-full cursor-pointer"
              onClick={openDialog}
            >
              Mis Compras
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <UserPurchasesDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        user={user}
      />
    </>
  );
}
