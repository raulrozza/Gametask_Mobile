export default interface IStorageProvider {
  clear(): Promise<void>;
  delete(key: string): Promise<void>;
  get<T = unknown>(key: string): Promise<T | null>;
  store(key: string, data: unknown): Promise<void>;
}
