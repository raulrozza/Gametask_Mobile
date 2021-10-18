import makePlayersRepository from 'modules/chooseGame/infra/repositories/factories/makePlayersRepository';
import FetchPlayersService from 'modules/chooseGame/services/FetchPlayersService';

export default function makeFetchPlayersService(): FetchPlayersService {
  const repository = makePlayersRepository();

  return new FetchPlayersService(repository);
}
