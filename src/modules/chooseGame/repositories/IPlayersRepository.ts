import IPlayer from 'shared/entities/IPlayer';

export default interface IPlayersRepository {
  create(gameId: string): Promise<void>;

  findAll(): Promise<IPlayer[]>;
}
