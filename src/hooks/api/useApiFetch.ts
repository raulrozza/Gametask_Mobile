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
  const [errors, setErrors] = useState(false);

  const fetchFromApi = useCallback(async () => {
    setLoading(true);
    setErrors(false);

    try {
      const response = await api.get<T>(URL);

      setData(response.data);
    } catch (error) {
      handleApiErrors(error);
      setErrors(true);
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
    errors,
    fetch: fetchFromApi,
  };
}
