import IRequestAchievementDTO from 'modules/selectedGame/domain/dtos/IRequestAchievementDTO';
import IRequestActivityDTO from 'modules/selectedGame/domain/dtos/IRequestActivityDTO';

export default interface IRequestsRepository {
  achievement(payload: IRequestAchievementDTO): Promise<void>;
  activity(payload: IRequestActivityDTO): Promise<void>;
}
