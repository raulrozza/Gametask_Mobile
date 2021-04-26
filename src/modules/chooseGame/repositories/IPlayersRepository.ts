import IPlayer from 'shared/entities/IPlayer';

export default interface IPlayersRepository {
  findAll(): Promise<IPlayer[]>;
}
