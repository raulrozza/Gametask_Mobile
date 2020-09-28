import { createContext } from 'react';

// Types
import { IAuth } from '../interfaces/hooks/UseAuth';
import { IGameData } from '../interfaces/hooks/UseGameData';

export const AuthorizationContext = createContext<IAuth>({
  user: null,
  loading: true,
  logged: false,
  signIn: () => null,
  signOut: () => null,
});

export const GameContext = createContext<IGameData>({
  game: null,
  loading: true,
  player: null,
  switchGame: () => null,
});
