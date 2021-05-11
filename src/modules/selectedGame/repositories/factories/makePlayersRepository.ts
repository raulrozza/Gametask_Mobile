import PlayersRepository from 'modules/selectedGame/infra/repositories/PlayersRepository';
import IPlayersRepository from 'modules/selectedGame/repositories/IPlayersRepository';

export default function makePlayersRepository(): IPlayersRepository {
  return new PlayersRepository();
}
