export interface IFetchReturn<T> {
  data: T | null;
  loading: boolean;
  errors: boolean;
  fetch: () => Promise<void>;
}
