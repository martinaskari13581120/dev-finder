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
  try {
    const response = await axios.get(
      'http://10.0.2.2:3000/users'
    );

    console.log('RESPONSE:', response.data);

    setUsers(response.data);
  } catch (error) {
    console.log('API ERROR:', error);
  }
};

  const addUser = async (user: any) => {
  try {
    const response = await axios.post(
      'http://10.0.2.2:3000/users',
      user
    );

    setUsers((prev) => [...prev, response.data]);
  } catch (error) {
    console.log('ADD USER ERROR:', error);
  }
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