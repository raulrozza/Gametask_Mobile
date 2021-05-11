import makeFindPlayerService from 'modules/selectedGame/services/factories/makeFindPlayerService';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import IPlayer from 'shared/entities/IPlayer';

interface UseFindPlayerController {
  loading: boolean;
  player: IPlayer;
  getPlayer(id: string): Promise<void>;
}

export default function useFindPlayerController(): UseFindPlayerController {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState<IPlayer>({} as IPlayer);
  const mounted = useRef(false);

  const findPlayersService = useMemo(() => makeFindPlayerService(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const getPlayer = useCallback(
    async (id: string) => {
      setLoading(true);

      const response = await findPlayersService.execute(id);

      if (!mounted.current) return;
      setLoading(false);

      if (response.shouldLogout) return session.logout();

      if (response.error) return toast.showError(response.error);

      if (response.player) setPlayer(response.player);
    },
    [findPlayersService, session, toast],
  );

  useEffect(() => {
    mounted.current = true;
    getPlayer(session.playerId);

    return () => {
      mounted.current = false;
    };
  }, [getPlayer, session.playerId]);

  return {
    loading,
    player,
    getPlayer,
  };
}
