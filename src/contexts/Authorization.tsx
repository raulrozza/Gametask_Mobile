import React, { useCallback, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

// Contexts
import { AuthorizationContext } from './rawContexts';

// Hooks
import { useTheme } from '../hooks/contexts/useTheme';

// Services
import { addApiHeader } from '../services/api';

// Types
import { IUser } from '../interfaces/api/User';

const Authorization: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const { changeTheme } = useTheme();

  useEffect(() => {
    (async () => {
      const storedUser = await AsyncStorage.getItem('loggedUser');
      if (!storedUser) setLogged(false);
      else {
        const parsedUser = JSON.parse(storedUser);
        addApiHeader('Authorization', `Bearer ${parsedUser.token}`);
        setUser(parsedUser);
        setLogged(true);
      }
      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(async (user: IUser) => {
    await AsyncStorage.setItem('loggedUser', JSON.stringify(user));
    addApiHeader('Authorization', `Bearer ${user.token}`);
    setUser(user);
    setLogged(true);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.clear();
    setUser(null);
    setLogged(false);
    changeTheme({});
  }, []);

  return (
    <AuthorizationContext.Provider
      value={{ user, logged, loading, signIn, signOut }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export default Authorization;
