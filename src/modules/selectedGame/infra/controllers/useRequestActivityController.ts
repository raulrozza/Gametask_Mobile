import { useCallback, useMemo, useState } from 'react';

import IRequestActivityDTO from 'modules/selectedGame/domain/dtos/IRequestActivityDTO';
import makeRequestActivityService from 'modules/selectedGame/services/factories/makeRequestActivityService';
import { useSessionContext, useToastContext } from 'shared/view/contexts';

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
