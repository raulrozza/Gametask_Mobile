import React, { useCallback, useEffect, useState } from 'react';

// Contexts
import { AuthorizationContext } from './rawContexts';

// Hooks
import { useTheme } from '../hooks/contexts/useTheme';

// Services
import { addApiHeader } from '../services/api';
import { clearData, getData, saveData } from '../services/storage';

// Types
import { IUser } from '../interfaces/api/User';
import { UpdatedUser } from '../interfaces/hooks/UseAuth';

const Authorization: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const { changeTheme } = useTheme();

  useEffect(() => {
    (async () => {
      const storedUser = await getData<IUser>('loggedUser');
      if (!storedUser) setLogged(false);
      else {
        addApiHeader('Authorization', `Bearer ${storedUser.token}`);
        setUser(storedUser);
        setLogged(true);
      }
      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(async (user: IUser) => {
    await saveData('loggedUser', user);
    addApiHeader('Authorization', `Bearer ${user.token}`);
    setUser(user);
    setLogged(true);
  }, []);

  const signOut = useCallback(async () => {
    await clearData();
    setUser(null);
    setLogged(false);
    changeTheme({});
  }, []);

  const updateUser = useCallback((updatedUser: UpdatedUser) => {
    setUser(oldUser => {
      if (!oldUser) return null;

      return {
        ...oldUser,
        ...updatedUser,
        profile_url: updatedUser.image || '',
      };
    });
  }, []);

  return (
    <AuthorizationContext.Provider
      value={{ user, logged, loading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export default Authorization;
