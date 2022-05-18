import { useState, createContext, useContext } from 'react';

const UserContext = createContext();
export const useUsers = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const isAuthorized = sessionStorage.getItem('authorization');
  const [user, setUser] = useState({
    isAuthorized: isAuthorized,
    userId: 0,
    email: '',
    nickname: '',
  });

  const addUser = ({ accessToken, userId, email, nickname }) => {
    sessionStorage.setItem('authorization', accessToken);
    setUser({
      isAuthorized: true,
      userId,
      email,
      nickname,
    });
  };

  const removeUser = (id) => {
    sessionStorage.removeItem('authorization');
    setUser({});
  };

  return (
    <UserContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
