import makeFetchPlayersService from 'modules/chooseGame/services/factories/makeFetchPlayersService';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import IPlayer from 'shared/domain/entities/IPlayer';

interface UseFetchPlayersController {
  loading: boolean;
  players: IPlayer[];
  fetchPlayers(): Promise<void>;
}

export default function useFetchPlayersController(
  deps?: string,
): UseFetchPlayersController {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState<IPlayer[]>([]);

  const fetchPlayersService = useMemo(() => makeFetchPlayersService(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const fetchPlayers = useCallback(async () => {
    setLoading(true);

    const response = await fetchPlayersService.execute();

    setLoading(false);

    if (response.shouldLogout) return session.logout();

    if (response.error) return toast.showError(response.error);

    if (response.players) setPlayers(response.players);
  }, [fetchPlayersService, session, toast]);

  useEffect(() => {
    fetchPlayers();
  }, [deps, fetchPlayers]);

  return {
    loading,
    players,
    fetchPlayers,
  };
}
