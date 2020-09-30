import { useCallback } from 'react';

// Hooks
import { useAuth } from '../contexts/useAuth';

// Types
import { HandleApiErrors } from '../../interfaces/hooks/UseErrorHandling';

// Utils
import { handleDefaultError } from '../../utils/errors/handleDefaultError';
import { handleErrorWithoutResponse } from '../../utils/errors/handleErrorWithoutResponse';
import { handleForbiddenStatus } from '../../utils/errors/handleForbiddenStatus';
import { handleInternalErrorStatus } from '../../utils/errors/handleInternalErrorStatus';
import { handleRequestErrors } from '../../utils/errors/handleRequestErrors';
import { handleUnknownError } from '../../utils/errors/handleUnkownError';
import { isAxiosError } from '../../utils/errors/isAxiosError';

export function useErrorHandling(): HandleApiErrors {
  const { signOut } = useAuth();

  const handleApiErrors: HandleApiErrors = useCallback(error => {
    if (isAxiosError(error)) {
      const response = error.response;

      if (!response) return handleErrorWithoutResponse();

      switch (response.status) {
        case 403:
          return handleForbiddenStatus(signOut);

        case 500:
          return handleInternalErrorStatus();

        case 400:
          return handleRequestErrors(response.data.code);

        default:
          return handleDefaultError();
      }
    } else handleUnknownError();
  }, []);

  return handleApiErrors;
}
