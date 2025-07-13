import { users } from "@/data/users";
import type { User } from "../interfaces";

export const getInitialUser = (): User => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("user-storage");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.state?.user) {
          return parsed.state.user;
        }
      }
    } catch (error) {
      console.warn("Error al leer user-storage:", error);
    }
  }
  return users["user1"];
};
