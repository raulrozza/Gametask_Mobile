import IRequestActivityDTO from 'modules/selectedGame/dtos/IRequestActivityDTO';
import makeRequestActivityService from 'modules/selectedGame/services/factories/makeRequestActivityService';
import { useCallback, useMemo, useState } from 'react';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

interface UseRequestActivityController {
  loading: boolean;
  requestActivity(values: IRequestActivityDTO): Promise<boolean>;
}

export default function useRequestActivityController(): UseRequestActivityController {
  const [loading, setLoading] = useState(false);

  const requestActivityService = useMemo(
    () => makeRequestActivityService(),
    [],
  );

  const session = useSessionContext();
  const toast = useToastContext();

  const requestActivity = useCallback(
    async (values: IRequestActivityDTO) => {
      setLoading(true);

      const response = await requestActivityService.execute(values);

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
    [requestActivityService, session, toast],
  );

  return {
    loading,
    requestActivity,
  };
}
