import IPlayersRepository from 'modules/selectedGame/domain/repositories/IPlayersRepository';
import PlayersRepository from 'modules/selectedGame/infra/repositories/PlayersRepository';

export default function makePlayersRepository(): IPlayersRepository {
  return new PlayersRepository();
}
