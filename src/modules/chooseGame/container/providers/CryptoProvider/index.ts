import CryptoJDCryptoProvider from 'modules/chooseGame/container/providers/CryptoProvider/implementations/CryptoJSCryptoProvider';
import ICryptoProvider from 'modules/chooseGame/container/providers/CryptoProvider/models/ICryptoProvider';

export default function makeCryptoProvider(): ICryptoProvider {
  return new CryptoJDCryptoProvider();
}
