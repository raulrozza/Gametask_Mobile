import IStorageProvider from 'shared/domain/providers/IStorageProvider';
import AsyncStorageProvider from 'shared/infra/providers/AsyncStorageProvider';

export default function makeStorageProvider(): IStorageProvider {
  const storageProvider = new AsyncStorageProvider();

  return storageProvider;
}
