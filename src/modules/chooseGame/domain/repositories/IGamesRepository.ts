import IGame from 'shared/domain/entities/IGame';

export default interface IGamesRepository {
  findById(id: string): Promise<IGame>;
}
