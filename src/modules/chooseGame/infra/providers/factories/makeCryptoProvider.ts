import ICryptoProvider from 'modules/chooseGame/domain/providers/ICryptoProvider';
import CryptoJDCryptoProvider from 'modules/chooseGame/infra/providers/CryptoJSCryptoProvider';

export default function makeCryptoProvider(): ICryptoProvider {
  return new CryptoJDCryptoProvider();
}
