import { users } from "@/data/users";
import { useUserStore } from "@/features/user/store/useUserStore";

export function UserSelector() {
  const userKeys = Object.keys(users) as (keyof typeof users)[];
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const selectedKey = Object.entries(users).find(([, u]) => u === user)?.[0];

  return (
    <select
      id="user-select"
      className="w-full p-2 border rounded cursor-pointer bg-white text-black dark:bg-gray-800 dark:text-white"
      value={selectedKey}
      onChange={(e) => setUser(e.target.value as keyof typeof users)}
    >
      {userKeys.map((key) => (
        <option
          key={key}
          value={key}
          className="bg-white text-black dark:bg-gray-800 dark:text-white"
        >
          {users[key].firstName} {users[key].lastName}
        </option>
      ))}
    </select>
  );
}
