import IStorageProvider from 'shared/container/providers/StorageProvider/models/IStorageProvider';

export default class LocalStorageProvider implements IStorageProvider {
  public async clear(): Promise<void> {
    localStorage.clear();
  }

  public async delete(key: string): Promise<void> {
    localStorage.removeItem(key);
  }

  public async get<T = unknown>(key: string): Promise<T | null> {
    const stringifiedData = localStorage.getItem(key);

    if (!stringifiedData) return null;

    return JSON.parse(stringifiedData);
  }

  public async store(key: string, data: unknown): Promise<void> {
    const stringifiedData = JSON.stringify(data);

    localStorage.setItem(key, stringifiedData);
  }
}
