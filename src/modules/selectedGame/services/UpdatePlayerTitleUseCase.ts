import IUpdateTitleDTO from 'modules/selectedGame/domain/dtos/IUpdateTitleDTO';
import IPlayersRepository from 'modules/selectedGame/domain/repositories/IPlayersRepository';

interface IExecute {
  shouldLogout?: boolean;
  error?: string;
}

export default class UpdatePlayerTitleUseCase {
  constructor(private playersRepository: IPlayersRepository) {}

  public async execute({
    titleId,
    playerId,
  }: IUpdateTitleDTO): Promise<IExecute> {
    try {
      await this.playersRepository.updateCurrentTitle(playerId, titleId);

      return {};
    } catch (error) {
      return {
        error: (error as any).message,
        shouldLogout: (error as any).shouldLogout,
      };
    }
  }
}
