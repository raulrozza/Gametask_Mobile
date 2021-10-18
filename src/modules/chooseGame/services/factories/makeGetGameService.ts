import makeGamesRepository from 'modules/chooseGame/infra/repositories/factories/makeGamesRepository';
import GetGameService from 'modules/chooseGame/services/GetGameService';

export default function makeGetGameService(): GetGameService {
  const repository = makeGamesRepository();

  return new GetGameService(repository);
}
