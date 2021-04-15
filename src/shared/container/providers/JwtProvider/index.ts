import { IJwtProvider } from 'shared/container/providers/JwtProvider/models/IJwtProvider';
import JsonwebtokenJwtProvider from './implementations/JsonwebtokenJwtProvider';

export default function makeJwtProvider(): IJwtProvider {
  const jwtProvider = new JsonwebtokenJwtProvider();

  return jwtProvider;
}
