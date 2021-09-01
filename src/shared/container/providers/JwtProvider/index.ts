import { IJwtProvider } from 'shared/domain/providers/IJwtProvider';
import JwtDecodeJwtProvider from './implementations/JwtDecodeJwtProvider';

export default function makeJwtProvider(): IJwtProvider {
  const jwtProvider = new JwtDecodeJwtProvider();

  return jwtProvider;
}
