import makePlayersRepository from 'modules/chooseGame/repositories/factories/makePlayersRepository';
import CreatePlayerService from 'modules/chooseGame/services/CreatePlayerService';

export default function makeCreatePlayerService(): CreatePlayerService {
  const repository = makePlayersRepository();

  return new CreatePlayerService(repository);
}
