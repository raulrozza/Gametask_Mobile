import GamesRepository from 'modules/chooseGame/infra/repositories/GamesRepository';
import IGamesRepository from 'modules/chooseGame/repositories/IGamesRepository';

export default function makeGamesRepository(): IGamesRepository {
  return new GamesRepository();
}
