import React, { useCallback, useEffect, useMemo, useState } from 'react';

import ISessionContext from 'shared/domain/providers/ISessionContext';
import makeHttpProvider from 'shared/infra/providers/factories/makeHttpProvider';
import makeJwtProvider from 'shared/infra/providers/factories/makeJwtProvider';
import makeStorageProvider from 'shared/infra/providers/factories/makeStorageProvider';
import { SessionContextProvider } from 'shared/view/contexts/SessionContext/hooks/useSessionContext';
import { useThemeContext } from 'shared/view/contexts/ThemeContext';

const USER_STORAGE_KEY = '@GameTask/token';
const GAME_STORAGE_KEY = '@GameTask/game';
const PLAYER_ID_STORAGE_KEY = '@GameTask/playerId';

const USER_HEADER_KEY = 'Authorization';
const GAME_HEADER_KEY = 'x-game-id';

interface IUserData {
  id: string;
  name: string;
  profile_url?: string;
}

const DefaultSessionContext: React.FC = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  const [playerId, setPlayerId] = useState('');
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const theme = useThemeContext();

  const storage = useMemo(() => makeStorageProvider(), []);
  const http = useMemo(() => makeHttpProvider(), []);
  const jwt = useMemo(() => makeJwtProvider(), []);

  const addAuthenticationHeader = useCallback(
    (token: string) => http.addHeader(USER_HEADER_KEY, `Bearer ${token}`),
    [http],
  );

  const decodeToken = useCallback(
    (token: string) => jwt.decode<IUserData>(token),
    [jwt],
  );

  useEffect(() => {
    Promise.all([
      storage.get<string>(USER_STORAGE_KEY),
      storage.get<string>(GAME_STORAGE_KEY),
      storage.get<string>(PLAYER_ID_STORAGE_KEY),
    ]).then(async ([token, game, playerId]) => {
      const userData = await decodeToken(String(token));
      if (userData) setUserData(userData);

      setUserToken(token);
      setSelectedGame(game);
      setPlayerId(String(playerId));
      if (token) addAuthenticationHeader(token);
      if (game) http.addHeader(GAME_HEADER_KEY, game);
      setLoading(false);
    });
  }, [addAuthenticationHeader, decodeToken, http, storage]);

  const login = useCallback<ISessionContext['login']>(
    async token => {
      const userData = await decodeToken(String(token));
      if (userData) setUserData(userData);

      addAuthenticationHeader(token);
      setUserToken(token);

      await storage.store(USER_STORAGE_KEY, token);
    },
    [addAuthenticationHeader, decodeToken, storage],
  );

  const logout = useCallback<ISessionContext['logout']>(async () => {
    await theme.switchTheme();

    setUserToken(null);
    setSelectedGame(null);
    setPlayerId('');
    http.removeHeader(USER_HEADER_KEY);
    http.removeHeader(GAME_HEADER_KEY);

    await storage.delete(USER_STORAGE_KEY);
    await storage.delete(GAME_STORAGE_KEY);
  }, [http, storage, theme]);

  const switchGame = useCallback<ISessionContext['switchGame']>(
    async params => {
      if (params) {
        const { gameId, theme: newTheme, playerId } = params;

        http.addHeader(GAME_HEADER_KEY, gameId);

        setSelectedGame(gameId);
        setPlayerId(playerId);

        if (newTheme) await theme.switchTheme(newTheme);
        await storage.store(GAME_STORAGE_KEY, gameId);

        setPlayerId(String(playerId));
        await storage.store(PLAYER_ID_STORAGE_KEY, playerId);

        return;
      }

      await theme.switchTheme();
      setSelectedGame(null);
      setPlayerId('');
      http.removeHeader(GAME_HEADER_KEY);
      await storage.delete(GAME_STORAGE_KEY);
      await storage.delete(PLAYER_ID_STORAGE_KEY);
    },
    [http, storage, theme],
  );

  return (
    <SessionContextProvider.Provider
      value={{
        playerId,
        userToken,
        userData,
        selectedGame,
        loading,
        login,
        logout,
        switchGame,
      }}
    >
      {children}
    </SessionContextProvider.Provider>
  );
};

export default DefaultSessionContext;
