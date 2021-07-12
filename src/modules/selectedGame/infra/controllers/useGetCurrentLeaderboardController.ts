import ILeaderboard from 'modules/selectedGame/entities/ILeaderboard';
import makeGetCurrentLeaderboard from 'modules/selectedGame/services/factories/makeGetCurrentLeaderboard';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

interface UseGetCurrentLeaderboardController {
  loading: boolean;
  leaderboard: ILeaderboard | null;
  getLeaderboard(): Promise<void>;
}

export default function useGetCurrentLeaderboardController(): UseGetCurrentLeaderboardController {
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<ILeaderboard | null>(null);
  const mounted = useRef(false);

  const getCurrentLeaderboard = useMemo(() => makeGetCurrentLeaderboard(), []);
  const session = useSessionContext();
  const toast = useToastContext();

  const fetchLeaderboard = useCallback(async () => {
    setLoading(true);

    const {
      leaderboard,
      error,
      shouldLogout,
    } = await getCurrentLeaderboard.execute();

    if (!mounted.current) return;
    setLoading(false);

    if (error) {
      toast.showError(error);

      if (shouldLogout) await session.logout();

      return;
    }

    if (leaderboard) setLeaderboard(leaderboard);
  }, [getCurrentLeaderboard, session, toast]);

  useEffect(() => {
    mounted.current = true;
    fetchLeaderboard();

    return () => {
      mounted.current = false;
    };
  }, [fetchLeaderboard]);

  return {
    loading,
    leaderboard,
    getLeaderboard: fetchLeaderboard,
  };
}
