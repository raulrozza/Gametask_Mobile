import { useCallback, useMemo, useState } from 'react';

import IUpdateTitleDTO from 'modules/selectedGame/domain/dtos/IUpdateTitleDTO';
import makeUpdatePlayerTitleUseCase from 'modules/selectedGame/services/factories/makeUpdatePlayerTitleUseCase';
import { useSessionContext, useToastContext } from 'shared/view/contexts';

interface UseUpdateTitleController {
  loading: boolean;
  updateTitle(params: IUpdateTitleDTO): Promise<void>;
}

export default function useUpdateTitleController(): UseUpdateTitleController {
  const [loading, setLoading] = useState(true);

  const updateTitleService = useMemo(() => makeUpdatePlayerTitleUseCase(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const updateTitle = useCallback<UseUpdateTitleController['updateTitle']>(
    async params => {
      setLoading(true);

      const response = await updateTitleService.execute(params);

      setLoading(false);

      if (response.shouldLogout) return session.logout();

      if (response.error) return toast.showError(response.error);
    },
    [updateTitleService, session, toast],
  );

  return {
    loading,
    updateTitle,
  };
}
