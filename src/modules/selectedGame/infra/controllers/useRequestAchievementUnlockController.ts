import { useCallback, useMemo, useState } from 'react';

import IRequestAchievementDTO from 'modules/selectedGame/dtos/IRequestAchievementDTO';
import makeRequestAchievementUnlockService from 'modules/selectedGame/services/factories/makeRequestAchievementUnlockService';
import { useSessionContext } from 'shared/view/contexts';
import { useToastContext } from 'shared/view/contexts';

interface UseRequestAchievementUnlockController {
  loading: boolean;
  requestAchievement(values: IRequestAchievementDTO): Promise<boolean>;
}

export default function useRequestAchievementUnlockController(): UseRequestAchievementUnlockController {
  const [loading, setLoading] = useState(false);

  const requestAchievementServoce = useMemo(
    () => makeRequestAchievementUnlockService(),
    [],
  );

  const session = useSessionContext();
  const toast = useToastContext();

  const requestAchievement = useCallback(
    async (values: IRequestAchievementDTO) => {
      setLoading(true);

      const response = await requestAchievementServoce.execute(values);

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
    [requestAchievementServoce, session, toast],
  );

  return {
    loading,
    requestAchievement,
  };
}
