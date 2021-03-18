import React, {createContext, useContext, useState} from 'react';

import {getUser} from '@services/user';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const login = async (u, p) => {
    setIsLoading(true);
    const rawUser = await getUser();
    const user = rawUser.find(e => e.email === u);
    // console.log({user, u, p});
    if (user !== undefined) {
      setIsLogin(true);
      setUser(user);
    } else {
      setIsLogin(false);
      setUser({});
    }
    setIsLoading(false);
  };

  const value = {
    login,
    data: {
      user,
      isLoading,
      isLogin,
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export {useUser, UserContext};
export default UserProvider;
