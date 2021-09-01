import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import IAchievement from 'modules/selectedGame/domain/entities/IAchievement';
import makeGetAchievementsService from 'modules/selectedGame/services/factories/makeGetAchievementsService';
import { useSessionContext } from 'shared/view/contexts';
import { useToastContext } from 'shared/view/contexts';

interface UseGetAchievementsController {
  loading: boolean;
  achievements: IAchievement[];
  getAchievements(): Promise<void>;
}

export default function useGetAchievementsController(): UseGetAchievementsController {
  const [loading, setLoading] = useState(true);
  const [achievements, setAchievements] = useState<IAchievement[]>([]);
  const mounted = useRef(false);

  const getAchievementsService = useMemo(
    () => makeGetAchievementsService(),
    [],
  );

  const session = useSessionContext();
  const toast = useToastContext();

  const getAchievements = useCallback(async () => {
    setLoading(true);

    const response = await getAchievementsService.execute();

    if (!mounted.current) return;
    setLoading(false);

    if (response.shouldLogout) return session.logout();

    if (response.error) return toast.showError(response.error);

    if (response.achievements) setAchievements(response.achievements);
  }, [getAchievementsService, session, toast]);

  useEffect(() => {
    mounted.current = true;
    getAchievements();

    return () => {
      mounted.current = false;
    };
  }, [getAchievements]);

  return {
    loading,
    achievements,
    getAchievements,
  };
}
