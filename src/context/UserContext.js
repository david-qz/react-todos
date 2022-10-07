import { createContext, useState } from 'react';
import { getUser } from '../services/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>;
};
