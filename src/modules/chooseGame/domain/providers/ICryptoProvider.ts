export default interface ICryptoProvider {
  decrypt<T = unknown>(encrypted: string): T | undefined;
}
