import { IJwtProvider } from 'shared/domain/providers/IJwtProvider';
import JwtDecodeJwtProvider from 'shared/infra/providers/JwtDecodeJwtProvider';

export default function makeJwtProvider(): IJwtProvider {
  const jwtProvider = new JwtDecodeJwtProvider();

  return jwtProvider;
}
