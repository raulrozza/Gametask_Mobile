import crypto from 'react-native-crypto-js';

export function decrypt<T = unknown>(
  encryptedString: string,
  secret?: string,
): T | null {
  try {
    const decryptedCode = crypto.AES.decrypt(encryptedString, secret || '');

    const result: T = JSON.parse(decryptedCode.toString(crypto.enc.Utf8));

    return result;
  } catch (error) {
    return null;
  }
}
