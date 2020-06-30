import React, { createContext, useContext, useEffect, useState } from 'react';

// Types
import { GameProps, GameHook } from 'game';

// Contexts
import { useAuth } from './Authorization';

import api from '../services/api';
import setTheme from '../utils/setTheme';

const GameContext = createContext({});

const Game = ({ children }: GameProps) => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const { signOut } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const { data: game } = await api.get('/game/5ebc0a1e1da3fa28f4a455a7');

        setGame(game);
        setTheme(game.theme);
        setLoading(false);
      } catch (error) {
        console.error(error);
        if (!error.response) return;

        const {
          response: { data },
        } = error;

        if (data.error === 'TokenExpiredError: jwt expired') {
          signOut();
        }
      }
    })();
  }, [signOut]);

  return (
    <GameContext.Provider value={{ game, loading }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const game = useContext(GameContext) as GameHook;

  return game;
};

export default Game;
