import AsyncStorage from '@react-native-community/async-storage';

export async function clearData(): Promise<void> {
  return AsyncStorage.clear();
}

export async function getData<T = unknown>(key: string): Promise<T | null> {
  const jsonData = await AsyncStorage.getItem(key);

  if (!jsonData) return null;

  try {
    const parsedData: T = JSON.parse(jsonData);

    return parsedData;
  } catch (error) {
    return null;
  }
}

export async function removeData(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}

export async function saveData(key: string, data: unknown): Promise<void> {
  const stringfiedData = JSON.stringify(data);

  await AsyncStorage.setItem(key, stringfiedData);
}
