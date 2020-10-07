export type ApiPut<T> = (
  URL: string,
  body: unknown,
  headers?: unknown,
) => Promise<T | null>;
