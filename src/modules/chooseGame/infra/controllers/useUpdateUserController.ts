import makeUpdateUserService from 'modules/chooseGame/services/factories/makeUpdateUserService';
import { useCallback, useMemo, useState } from 'react';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

interface IUpdateValues {
  firstname: string;
  lastname?: string;
  image?: string;
}

interface UseUpdateUserController {
  loading: boolean;
  updateUser(values: IUpdateValues): Promise<boolean>;
}

export default function useUpdateUserController(): UseUpdateUserController {
  const [loading, setLoading] = useState(false);

  const updateUserService = useMemo(() => makeUpdateUserService(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const updateUser = useCallback<UseUpdateUserController['updateUser']>(
    async values => {
      setLoading(true);

      const response = await updateUserService.execute(values);

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
    [updateUserService, session, toast],
  );

  return {
    loading,
    updateUser,
  };
}
