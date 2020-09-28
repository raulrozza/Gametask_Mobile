import { createContext } from 'react';

// Types
import { IAuth } from '../interfaces/hooks/UseAuth';

export const AuthorizationContext = createContext<IAuth>({
  user: null,
  loading: true,
  logged: false,
  signIn: () => null,
  signOut: () => null,
});
