import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Types
import { GameHook, Achievement } from 'game';

// Contexts
import { useAuth } from './Authorization';
import { useTheme } from './Theme';

import api from '../services/api';

const GameContext = createContext({});

const Game: React.FC = ({ children }) => {
  const [game, setGame] = useState(null);
  const [achievements, setAchievements] = useState<Achievement[]>(
    [] as Achievement[],
  );
  const [loading, setLoading] = useState(true);
  const { signOut } = useAuth();
  const { changeTheme } = useTheme();

  useEffect(() => {
    (async () => {
      try {
        const { data: game } = await api.get('/game/5ebc0a1e1da3fa28f4a455a7');

        setGame(game);
        changeTheme(game.theme);
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
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/achievements');

        setAchievements(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [game]);

  return (
    <GameContext.Provider value={{ game, loading, achievements }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const game = useContext(GameContext) as GameHook;

  return game;
};

Game.propTypes = {
  children: PropTypes.node,
};

export default Game;
