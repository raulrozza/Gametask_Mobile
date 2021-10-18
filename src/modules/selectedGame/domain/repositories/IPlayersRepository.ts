import IPlayer from 'shared/domain/entities/IPlayer';

export default interface IPlayersRepository {
  updateCurrentTitle(id: string, titleId?: string): Promise<void>;

  findById(id: string): Promise<IPlayer>;
}
