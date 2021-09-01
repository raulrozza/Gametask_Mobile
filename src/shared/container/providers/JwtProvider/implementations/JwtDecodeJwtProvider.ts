import decode from 'jwt-decode';
import { IJwtProvider } from 'shared/domain/providers/IJwtProvider';

export default class JsonwebtokenJwtProvider implements IJwtProvider {
  public async decode<T = unknown>(token: string): Promise<T | null> {
    try {
      const decoded = decode(token);

      if (!decoded) return null;

      return decoded as T;
    } catch (error) {
      return null;
    }
  }
}
