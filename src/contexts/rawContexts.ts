import { createContext } from 'react';

// Types
import { IGameData } from '../interfaces/hooks/UseGameData';
import { ITheme } from '../interfaces/hooks/UseTheme';

export const GameContext = createContext<IGameData>({
  game: null,
  loading: true,
  player: null,
  switchGame: () => null,
});

export const ThemeContext = createContext<ITheme>({
  changeTheme: () => null,
});
