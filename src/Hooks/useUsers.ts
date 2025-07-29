import { useEffect, useState } from "react";
import { dataUsers } from "src/server/getData";
import type { User } from "src/types";

export const useUser = () => {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const resultUser = await dataUsers();
      setUser(resultUser);
    };
    fetchUser();
  }, []);
  return { user };
};
