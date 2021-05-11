import IPlayer from 'shared/entities/IPlayer';

export default interface IPlayersRepository {
  findById(id: string): Promise<IPlayer>;
}
