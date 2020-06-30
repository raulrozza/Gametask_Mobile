import React, { createContext, useContext, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { AuthorizationProps, User, Auth } from 'authorization';

// Services
import api from '../services/api';

// Utils
import setTheme, { appTheme } from '../utils/setTheme';

const AuthorizationContext = createContext({});

const Authorization = ({ children }: AuthorizationProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const storedUser = await AsyncStorage.getItem('loggedUser');
      if (!storedUser) setLogged(false);
      else {
        const parsedUser = JSON.parse(storedUser);
        api.defaults.headers.Authorization = 'Bearer ' + parsedUser.token;
        setUser(parsedUser);
        setLogged(true);
      }
      setLoading(false);
    })();
  }, []);

  const signIn = async (user: User) => {
    await AsyncStorage.setItem('loggedUser', JSON.stringify(user));
    api.defaults.headers.Authorization = 'Bearer ' + user.token;
    setUser(user);
    setLogged(true);
  };

  const signOut = () => {
    localStorage.clear();
    setUser(null);
    setTheme();
    setLogged(false);
  };

  return (
    <AuthorizationContext.Provider
      value={{ user, logged, loading, signIn, signOut, appTheme }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthorizationContext) as Auth;

  return auth;
};

export default Authorization;
