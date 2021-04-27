import IGame from 'shared/entities/IGame';

export default interface IGamesRepository {
  findById(id: string): Promise<IGame>;
}
