import type { Purchase } from "./purchase.interface";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  isVip: boolean;
  purchases: Purchase[];
}
