import makeGetGameService from 'modules/chooseGame/services/factories/makeGetGameService';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import IGame from 'shared/entities/IGame';

interface GameParams {
  gameId: string;
}

interface UseGetGameController {
  loading: boolean;
  game: IGame;
  getGame(id: string): Promise<void>;
}

export default function useGetGameController({
  gameId,
}: GameParams): UseGetGameController {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState<IGame>({} as IGame);

  const getGameService = useMemo(() => makeGetGameService(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const getGame = useCallback(
    async (id: string) => {
      setLoading(true);

      const response = await getGameService.execute(id);

      setLoading(false);

      if (response.shouldLogout) return session.logout();

      if (response.error) return toast.showError(response.error);

      if (response.game) setGame(response.game);
    },
    [getGameService, session, toast],
  );

  useEffect(() => {
    getGame(gameId);
  }, [getGame]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    loading,
    game,
    getGame,
  };
}
