import { IJwtProvider } from 'shared/container/providers/JwtProvider/models/IJwtProvider';
import JwtDecodeJwtProvider from './implementations/JwtDecodeJwtProvider';

export default function makeJwtProvider(): IJwtProvider {
  const jwtProvider = new JwtDecodeJwtProvider();

  return jwtProvider;
}
