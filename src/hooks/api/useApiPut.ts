import { useCallback } from 'react';

// Hooks
import { useErrorHandling } from './useErrorHandling';

// Services
import api from '../../services/api';

// Types
import { ApiPut } from '../../interfaces/hooks/UseApiPut';

export function useApiPut<T = unknown>(): ApiPut<T> {
  const handleApiErrors = useErrorHandling();

  const apiPut = useCallback(
    async (URL: string, body: unknown, headers: unknown = {}) => {
      try {
        const response = await api.put<T>(URL, body, {
          headers,
        });

        return response.data;
      } catch (error) {
        handleApiErrors(error);
        return null;
      }
    },
    [],
  );

  return apiPut;
}
