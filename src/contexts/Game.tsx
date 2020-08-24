import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import assert from 'assert';

// Contexts
import { useAuth } from './Authorization';
import { useTheme } from './Theme';

// Services
import api from '../services/api';

// Types
import { IGameHook, IAchievement, IPlayer, UnknownObject } from 'game';

function isEqual(object1: UnknownObject | null, object2: UnknownObject | null) {
  try {
    assert.deepStrictEqual(object1, object2);
  } catch (error) {
    return false;
  }

  return true;
}

const GameContext = createContext({});

const Game: React.FC = ({ children }) => {
  const [player, setPlayer] = useState<IPlayer | null>(null);
  const [achievements, setAchievements] = useState<IAchievement[]>(
    [] as IAchievement[],
  );
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
  }, [changeTheme]);

  const getGameInfo = useCallback(
    async (playerId: string) => {
      try {
        const { data: player } = await api.get(`/gameplay/${playerId}`);

        await AsyncStorage.setItem('storedPlayer', JSON.stringify(player));

        const { data } = await api.get('/achievement');

        setAchievements(data);

        setVerifiedGameAuthenticity(true);
        setPlayer(player);
        changeTheme(player.game.theme);
      } catch (error) {
        console.error('Error getting player info', error);
        if (!error.response) return;
        const {
          response: { data },
        } = error;

        if (data.error === 'TokenExpiredError: jwt expired') {
          signOut();
        }
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
          api.defaults.headers['X-Game-ID'] = parsedPlayer.game._id;

          if (!isEqual(player, parsedPlayer)) {
            setPlayer(parsedPlayer);
            changeTheme(parsedPlayer.game.theme);
          }

          if (!verifiedGameAuthenticity) getGameInfo(parsedPlayer._id);
        }
      }

      setLoading(false);

      return async () => {
        await AsyncStorage.removeItem('storedPlayer');
      };
    })();
  }, [changeTheme, resetGame, getGameInfo, verifiedGameAuthenticity, player]);

  const switchGame = async (player?: IPlayer) => {
    setLoading(true);

    if (player) {
      await AsyncStorage.setItem('storedPlayer', JSON.stringify(player));

      setPlayer(player);
      changeTheme(player.game.theme);
    } else resetGame();

    setLoading(false);
  };

  return (
    <GameContext.Provider
      value={{ game: player?.game, player, loading, achievements, switchGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame: () => IGameHook = () => {
  const game = useContext(GameContext) as IGameHook;

  return game;
};

Game.propTypes = {
  children: PropTypes.node,
};

export default Game;
