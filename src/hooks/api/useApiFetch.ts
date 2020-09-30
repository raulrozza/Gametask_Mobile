import { useCallback, useEffect, useState } from 'react';

// Hooks
import { useApiGet } from './useApiGet';

// Types
import { IFetchReturn } from '../../interfaces/hooks/UseApiFetch';

export function useApiFetch<T = unknown>(URL: string): IFetchReturn<T> {
  const apiGet = useApiGet<T>();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const fetchFromApi = useCallback(async () => {
    setLoading(true);
    setErrors(false);

    const result = await apiGet(URL);
    if (!result) setErrors(true);

    setData(result);
    setLoading(false);
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
