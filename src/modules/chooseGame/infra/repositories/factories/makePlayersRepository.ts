import IPlayersRepository from 'modules/chooseGame/domain/repositories/IPlayersRepository';
import PlayersRepository from 'modules/chooseGame/infra/repositories/PlayersRepository';

export default function makePlayersRepository(): IPlayersRepository {
  return new PlayersRepository();
}
