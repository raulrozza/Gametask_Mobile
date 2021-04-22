import { useCallback, useMemo, useState } from 'react';
import IUserLoginDTO from 'modules/landing/dtos/IUserLoginDTO';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import makeLogUserService from 'modules/landing/services/factories/makeLogUserService';

interface UseLoginController {
  (): {
    loading: boolean;
    onSubmit: (values: IUserLoginDTO) => Promise<void>;
  };
}

const useLoginController: UseLoginController = () => {
  const [loading, setLoading] = useState(false);

  const loginService = useMemo(() => makeLogUserService(), []);
  const session = useSessionContext();
  const toast = useToastContext();

  const onSubmit = useCallback(
    async (values: IUserLoginDTO) => {
      setLoading(true);

      const { token, error } = await loginService.execute(values);

      if (error) {
        toast.showError(error);
        return setLoading(false);
      }

      if (token) return await session.login(token);
    },
    [loginService, session, toast],
  );

  return {
    loading,
    onSubmit,
  };
};

export default useLoginController;
