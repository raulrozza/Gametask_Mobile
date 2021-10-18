import IGamesRepository from 'modules/chooseGame/domain/repositories/IGamesRepository';
import GamesRepository from 'modules/chooseGame/infra/repositories/GamesRepository';

export default function makeGamesRepository(): IGamesRepository {
  return new GamesRepository();
}
