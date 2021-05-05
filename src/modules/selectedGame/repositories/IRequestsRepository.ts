import IRequestActivityDTO from 'modules/selectedGame/dtos/IRequestActivityDTO';

export default interface IRequestsRepository {
  activity(payload: IRequestActivityDTO): Promise<void>;
}
