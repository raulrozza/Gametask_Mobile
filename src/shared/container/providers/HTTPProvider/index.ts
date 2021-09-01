import IHTTPProvider from 'shared/domain/providers/IHTTPProvider';
import AxiosHTTPProvider from 'shared/container/providers/HTTPProvider/implementations/AxiosHTTPProvider';

export default function makeHttpProvider(): IHTTPProvider {
  const httpProvider = new AxiosHTTPProvider();

  return httpProvider;
}
