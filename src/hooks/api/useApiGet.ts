import { useCallback } from 'react';

// Hooks
import { useErrorHandling } from './useErrorHandling';

// Services
import api from '../../services/api';

// Types
import { ApiGet } from '../../interfaces/hooks/UseApiGet';

export function useApiGet<T = unknown>(): ApiGet<T> {
  const handleApiErrors = useErrorHandling();

  const apiGet = useCallback(async (URL: string) => {
    try {
      const response = await api.get<T>(URL);

      return response.data;
    } catch (error) {
      handleApiErrors(error);
      return null;
    }
  }, []);

  return apiGet;
}
