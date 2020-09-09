import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AsyncStorage } from 'react-native';

// Contexts
import { useAuth } from './Authorization';
import { useTheme } from './Theme';

// Services
import api, { removeApiHeader, addApiHeader } from '../services/api';

// Types
import { IGameHook, IPlayer } from 'game';

// Utils
import handleApiErrors from '../utils/handleApiErrors';
import isEqual from '../utils/isEqual';

const GameContext = createContext({});

const Game: React.FC = ({ children }) => {
  const [player, setPlayer] = useState<IPlayer | null>(null);
  const [verifiedGameAuthenticity, setVerifiedGameAuthenticity] = useState(
    false,
  );
  const [loading, setLoading] = useState(true);
  const { signOut } = useAuth();
  const { changeTheme } = useTheme();

  const resetGame = useCallback(async () => {
    await AsyncStorage.removeItem('storedPlayer');
    setPlayer(null);
    changeTheme({});
    removeApiHeader('X-Game-ID');
  }, [changeTheme]);

  const getGameInfo = useCallback(
    async (playerId: string) => {
      try {
        const { data: player } = await api.get(`/gameplay/${playerId}`);

        await AsyncStorage.setItem('storedPlayer', JSON.stringify(player));

        setVerifiedGameAuthenticity(true);
        setPlayer(player);
        changeTheme(player.game.theme);
      } catch (error) {
        handleApiErrors(error, signOut);
      }
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
      value={{ game: player?.game, player, loading, switchGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame: () => IGameHook = () => {
  const game = useContext(GameContext) as IGameHook;

  return game;
};

export default Game;
