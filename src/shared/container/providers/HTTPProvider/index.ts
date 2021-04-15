import IHTTPProvider from 'shared/container/providers/HTTPProvider/models/IHTTPProvider';
import AxiosHTTPProvider from 'shared/container/providers/HTTPProvider/implementations/AxiosHTTPProvider';

export default function makeHttpProvider(): IHTTPProvider {
  const httpProvider = new AxiosHTTPProvider();

  return httpProvider;
}
