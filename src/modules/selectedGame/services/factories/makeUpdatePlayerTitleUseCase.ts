import makePlayersRepository from 'modules/selectedGame/infra/repositories/factories/makePlayersRepository';
import UpdatePlayerTitleUseCase from 'modules/selectedGame/services/UpdatePlayerTitleUseCase';

export default function makeUpdatePlayerTitleUseCase(): UpdatePlayerTitleUseCase {
  const repository = makePlayersRepository();

  return new UpdatePlayerTitleUseCase(repository);
}
