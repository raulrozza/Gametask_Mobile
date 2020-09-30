import React, { useCallback, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

// Contexts
import { GameContext } from './rawContexts';

// Hooks
import { useAuth } from '../hooks/contexts/useAuth';
import { useTheme } from '../hooks/contexts/useTheme';
import { useApiGet } from '../hooks/api/useApiGet';

// Services
import { removeApiHeader, addApiHeader } from '../services/api';

// Types
import { IPlayer } from '../interfaces/api/Player';

// Utils
import isEqual from '../utils/isEqual';

const Game: React.FC = ({ children }) => {
  const [player, setPlayer] = useState<IPlayer | null>(null);
  const [verifiedGameAuthenticity, setVerifiedGameAuthenticity] = useState(
    false,
  );
  const [loading, setLoading] = useState(true);

  const { signOut } = useAuth();
  const { changeTheme } = useTheme();
  const apiGet = useApiGet<IPlayer>();

  const resetGame = useCallback(async () => {
    await AsyncStorage.removeItem('storedPlayer');
    setPlayer(null);
    changeTheme({});
    removeApiHeader('X-Game-ID');
  }, [changeTheme]);

  const getGameInfo = useCallback(
    async (playerId: string) => {
      const player = await apiGet(`/gameplay/${playerId}`);

      if (!player) return;

      await AsyncStorage.setItem('storedPlayer', JSON.stringify(player));

      setVerifiedGameAuthenticity(true);
      setPlayer(player);
      changeTheme(player.game.theme);
    },
    [signOut, changeTheme],
  );

  useEffect(() => {
    (async () => {
      // Get the local storage info
      const storedPlayer = await AsyncStorage.getItem('storedPlayer');

      if (!storedPlayer) resetGame();
      else {
        const parsedPlayer = JSON.parse(storedPlayer);

        if (!parsedPlayer || !parsedPlayer.game) resetGame();
        else {
          // Check if the game in state is equal to the one stored in the local storage.
          // If they are, DO NOT CHANGE THE STATE because it causes infinite re-renderings
          addApiHeader('X-Game-ID', parsedPlayer.game._id);

          if (!isEqual(player, parsedPlayer)) {
            setPlayer(parsedPlayer);
            changeTheme(parsedPlayer.game.theme);
          }

          if (!verifiedGameAuthenticity) getGameInfo(parsedPlayer._id);
        }
      }

      setLoading(false);
    })();
  }, [changeTheme, resetGame, getGameInfo, verifiedGameAuthenticity, player]);

  const switchGame = useCallback(
    async (player?: IPlayer) => {
      setLoading(true);

      if (player) {
        await AsyncStorage.setItem('storedPlayer', JSON.stringify(player));

        addApiHeader('X-Game-ID', player.game._id);

        setPlayer(player);
        changeTheme(player.game.theme);
      } else resetGame();

      setVerifiedGameAuthenticity(false);
      setLoading(false);
    },
    [changeTheme],
  );

  return (
    <GameContext.Provider
      value={{ game: player?.game || null, player, loading, switchGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default Game;
