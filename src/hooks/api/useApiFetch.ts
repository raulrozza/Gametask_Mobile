import { useCallback, useEffect, useState } from 'react';

// Services
import api from '../../services/api';

// Types
import { IFetchReturn } from '../../interfaces/hooks/UseApiFetch';

// Utils
import handleApiErrors from '../../utils/handleApiErrors';

export function useApiFetch<T = unknown>(URL: string): IFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchFromApi = useCallback(async () => {
    try {
      const response = await api.get<T>(URL);

      setData(response.data);
    } catch (error) {
      handleApiErrors(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFromApi();
  }, []);

  return {
    data,
    loading,
  };
}
