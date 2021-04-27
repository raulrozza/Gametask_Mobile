import crypto from 'react-native-crypto-js';
import ICryptoProvider from 'modules/chooseGame/container/providers/CryptoProvider/models/ICryptoProvider';

const SECRET = process.env.REACT_NATIVE_SECRET || '';

export default class CryptoJDCryptoProvider implements ICryptoProvider {
  public decrypt<T = unknown>(encrypted: string): T | undefined {
    try {
      const decryptedCode = crypto.AES.decrypt(encrypted, SECRET);

      return JSON.parse(decryptedCode.toString(crypto.enc.Utf8));
    } catch {
      return undefined;
    }
  }
}
