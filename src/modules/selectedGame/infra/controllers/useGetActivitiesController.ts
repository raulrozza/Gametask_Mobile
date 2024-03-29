import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import IActivity from 'modules/selectedGame/domain/entities/IActivity';
import makeGetActivitiesService from 'modules/selectedGame/services/factories/makeGetActivitiesService';
import { useSessionContext, useToastContext } from 'shared/view/contexts';

interface UseGetActivitiesController {
  loading: boolean;
  activities: IActivity[];
  getActivities(): Promise<void>;
}

export default function useGetActivitiesController(): UseGetActivitiesController {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const mounted = useRef(false);

  const getActivitiesService = useMemo(() => makeGetActivitiesService(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const getActivities = useCallback(async () => {
    setLoading(true);

    const response = await getActivitiesService.execute();

    if (!mounted.current) return;
    setLoading(false);

    if (response.shouldLogout) return session.logout();

    if (response.error) return toast.showError(response.error);

    if (response.activities) setActivities(response.activities);
  }, [getActivitiesService, session, toast]);

  useEffect(() => {
    mounted.current = true;
    getActivities();

    return () => {
      mounted.current = false;
    };
  }, [getActivities]);

  return {
    loading,
    activities,
    getActivities,
  };
}
