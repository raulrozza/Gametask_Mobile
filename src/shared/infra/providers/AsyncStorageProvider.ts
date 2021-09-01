import AsyncStorage from '@react-native-community/async-storage';

import IStorageProvider from 'shared/domain/providers/IStorageProvider';

export default class AsyncStorageProvider implements IStorageProvider {
  public async clear(): Promise<void> {
    return AsyncStorage.clear();
  }

  public async delete(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  public async get<T = unknown>(key: string): Promise<T | null> {
    const stringifiedData = await AsyncStorage.getItem(key);

    if (!stringifiedData) return null;

    return JSON.parse(stringifiedData);
  }

  public async store(key: string, data: unknown): Promise<void> {
    const stringifiedData = JSON.stringify(data);

    return AsyncStorage.setItem(key, stringifiedData);
  }
}
