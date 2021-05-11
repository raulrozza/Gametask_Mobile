import AsyncStorageProvider from 'shared/container/providers/StorageProvider/implementations/AsyncStorageProvider';
import IStorageProvider from 'shared/container/providers/StorageProvider/models/IStorageProvider';

export default function makeStorageProvider(): IStorageProvider {
  const storageProvider = new AsyncStorageProvider();

  return storageProvider;
}
