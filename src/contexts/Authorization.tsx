import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import { IUser, Auth } from 'authorization';

// Contexts
import { useTheme } from './Theme';

// Services
import api from '../services/api';

const AuthorizationContext = createContext({});

const Authorization: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const { changeTheme } = useTheme();

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

  const signIn = async (user: IUser) => {
    await AsyncStorage.setItem('loggedUser', JSON.stringify(user));
    api.defaults.headers.Authorization = 'Bearer ' + user.token;
    setUser(user);
    setLogged(true);
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser({} as IUser);
    setLogged(false);
  };

  return (
    <AuthorizationContext.Provider
      value={{ user, logged, loading, signIn, signOut }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthorizationContext) as Auth;

  return auth;
};

Authorization.propTypes = {
  children: PropTypes.node,
};

export default Authorization;
