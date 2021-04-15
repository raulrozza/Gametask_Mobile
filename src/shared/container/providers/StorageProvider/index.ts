import LocalStorageProvider from 'shared/container/providers/StorageProvider/implementations/LocalStorageProvider';
import IStorageProvider from 'shared/container/providers/StorageProvider/models/IStorageProvider';

export default function makeStorageProvider(): IStorageProvider {
  const storageProvider = new LocalStorageProvider();

  return storageProvider;
}
