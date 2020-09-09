import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AsyncStorage } from 'react-native';

// Contexts
import { useTheme } from './Theme';

// Services
import { addApiHeader } from '../services/api';

// Types
import { IUser, IAuth } from 'authorization';

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
    setUser({} as IUser);
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

export const useAuth: () => IAuth = () => {
  const auth = useContext(AuthorizationContext) as IAuth;

  return auth;
};

export default Authorization;
