import IPlayer from 'shared/domain/entities/IPlayer';

export default interface IPlayersRepository {
  findById(id: string): Promise<IPlayer>;
}
