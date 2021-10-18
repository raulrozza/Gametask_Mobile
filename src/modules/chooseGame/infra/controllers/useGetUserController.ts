import makeGetUserService from 'modules/chooseGame/services/factories/makeGetUserService';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSessionContext } from 'shared/view/contexts';
import { useToastContext } from 'shared/view/contexts';
import IUser from 'shared/domain/entities/IUser';

interface UserParams {
  userId: string;
}

interface UseGetUserController {
  loading: boolean;
  user: IUser;
  getUser(id: string): Promise<void>;
}

export default function useGetUserController({
  userId,
}: UserParams): UseGetUserController {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);

  const getUserService = useMemo(() => makeGetUserService(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const getUser = useCallback(
    async (id: string) => {
      setLoading(true);

      const response = await getUserService.execute(id);

      setLoading(false);

      if (response.shouldLogout) return session.logout();

      if (response.error) return toast.showError(response.error);

      if (response.user) setUser(response.user);
    },
    [getUserService, session, toast],
  );

  useEffect(() => {
    getUser(userId);
  }, [getUser]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    loading,
    user,
    getUser,
  };
}
