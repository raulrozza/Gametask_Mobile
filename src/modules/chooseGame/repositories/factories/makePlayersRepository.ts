import PlayersRepository from 'modules/chooseGame/infra/repositories/PlayersRepository';
import IPlayersRepository from 'modules/chooseGame/repositories/IPlayersRepository';

export default function makePlayersRepository(): IPlayersRepository {
  return new PlayersRepository();
}
