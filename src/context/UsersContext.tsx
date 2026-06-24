import React, {
  createContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

export const UsersContext = createContext<any>(null);

export default function UsersProvider({
  children,
}: any) {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setUsers([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]);
  };

  const addUser = async (user: any) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        loadUsers,
        addUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}