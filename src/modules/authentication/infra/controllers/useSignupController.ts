import { useCallback, useMemo, useState } from 'react';

import IUserSignupDTO from 'modules/authentication/domain/dtos/IUserSignupDTO';
import makeSignUserService from 'modules/authentication/services/factories/makeSignUserService';
import { useToastContext } from 'shared/view/contexts';

interface Helpers {
  resetForm: () => void;
}

interface UseSignupController {
  (): {
    loading: boolean;
    onSubmit: (values: IUserSignupDTO, helpers: Helpers) => Promise<void>;
  };
}

const useSignupController: UseSignupController = () => {
  const [loading, setLoading] = useState(false);

  const signUserService = useMemo(() => makeSignUserService(), []);
  const toast = useToastContext();

  const onSubmit = useCallback(
    async (values: IUserSignupDTO, helpers: Helpers) => {
      setLoading(true);

      const { user: signupSuccessful, error } = await signUserService.execute(
        values,
      );

      if (error) toast.showError(error);

      if (signupSuccessful) {
        toast.showSuccess('Usuário criado com sucesso!');
        helpers.resetForm();
      }

      setLoading(false);
    },
    [signUserService, toast],
  );

  return {
    loading,
    onSubmit,
  };
};

export default useSignupController;
