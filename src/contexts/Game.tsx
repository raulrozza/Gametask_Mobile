import React, { useCallback, useEffect, useState } from 'react';

// Contexts
import { GameContext } from './rawContexts';

// Hooks
import { useTheme } from '../hooks/contexts/useTheme';
import { useApiGet } from '../hooks/api/useApiGet';

// Recoil
import { useSetRecoilState } from 'recoil';
import playerTitle from '../atoms/playerTitle';

// Services
import { removeApiHeader, addApiHeader } from '../services/api';
import { getData, removeData, saveData } from '../services/storage';

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

  const { changeTheme } = useTheme();
  const setTitle = useSetRecoilState(playerTitle);
  const apiGet = useApiGet<IPlayer>();

  const resetGame = useCallback(async () => {
    await removeData('storedPlayer');
    setTitle(null);
    setPlayer(null);
    changeTheme({});
    removeApiHeader('X-Game-ID');
  }, [changeTheme]);

  const getGameInfo = useCallback(
    async (playerId: string) => {
      const player = await apiGet(`/gameplay/${playerId}`);

      if (!player) return;

      await saveData('storedPlayer', player);

      setVerifiedGameAuthenticity(true);
      setTitle(player.currentTitle || null);
      setPlayer(player);
      changeTheme(player.game.theme);
    },
    [changeTheme],
  );

  useEffect(() => {
    (async () => {
      // Get the local storage info
      const storedPlayer = await getData<IPlayer>('storedPlayer');

      if (!storedPlayer || !storedPlayer.game) resetGame();
      else {
        // Check if the game in state is equal to the one stored in the local storage.
        // If they are, DO NOT CHANGE THE STATE because it causes infinite re-renderings
        addApiHeader('X-Game-ID', storedPlayer.game._id);

        if (!isEqual(player, storedPlayer)) {
          setTitle(storedPlayer.currentTitle || null);
          setPlayer(storedPlayer);
          changeTheme(storedPlayer.game.theme);
        }

        if (!verifiedGameAuthenticity) getGameInfo(storedPlayer._id);
      }

      setLoading(false);
    })();
  }, [changeTheme, resetGame, getGameInfo, verifiedGameAuthenticity, player]);

  const switchGame = useCallback(
    async (player?: IPlayer) => {
      setLoading(true);

      if (player) {
        await saveData('storedPlayer', player);

        addApiHeader('X-Game-ID', player.game._id);

        setTitle(player.currentTitle || null);
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
