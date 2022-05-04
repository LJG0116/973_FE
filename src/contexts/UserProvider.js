import { useState, createContext, useContext } from 'react';

const UserContext = createContext();
export const useUsers = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const addUser = (token) => {
    sessionStorage.setItem('authorization', token);
    setUser(token);
  };

  const removeUser = (id) => {
    sessionStorage.removeItem('authorization');
  };

  return (
    <UserContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
