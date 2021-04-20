import decode from 'jwt-decode';
import { IJwtProvider } from 'shared/container/providers/JwtProvider/models/IJwtProvider';

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
