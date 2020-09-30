export type ApiPost<T> = (URL: string, body: unknown) => Promise<T | null>;
