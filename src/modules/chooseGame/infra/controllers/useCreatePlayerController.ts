import makeCreatePlayerService from 'modules/chooseGame/services/factories/makeCreatePlayerService';
import { useCallback, useMemo, useState } from 'react';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

interface UseCreatePlayerController {
  loading: boolean;
  createPlayer(gameId: string): Promise<boolean>;
}

export default function useCreatePlayerController(): UseCreatePlayerController {
  const [loading, setLoading] = useState(false);

  const createPlayerService = useMemo(() => makeCreatePlayerService(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const createPlayer = useCallback(
    async (gameId: string) => {
      setLoading(true);

      const response = await createPlayerService.execute(gameId);

      setLoading(false);

      if (response.shouldLogout) {
        session.logout();

        return false;
      }

      if (response.error) {
        toast.showError(response.error);
        return false;
      }

      return true;
    },
    [createPlayerService, session, toast],
  );

  return {
    loading,
    createPlayer,
  };
}
