import type { Purchase } from "./purchase";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  isVip: boolean;
  purchases: Purchase[];
}
