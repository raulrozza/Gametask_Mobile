import makePlayersRepository from 'modules/selectedGame/repositories/factories/makePlayersRepository';
import FindPlayerService from 'modules/selectedGame/services/FindPlayerService';

export default function makeFindPlayerService(): FindPlayerService {
  const repository = makePlayersRepository();

  return new FindPlayerService(repository);
}
