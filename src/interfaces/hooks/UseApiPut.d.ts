export type ApiPut<T> = (URL: string, body: unknown) => Promise<T | null>;
