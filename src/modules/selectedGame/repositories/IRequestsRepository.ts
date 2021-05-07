import IRequestAchievementDTO from 'modules/selectedGame/dtos/IRequestAchievementDTO';
import IRequestActivityDTO from 'modules/selectedGame/dtos/IRequestActivityDTO';

export default interface IRequestsRepository {
  achievement(payload: IRequestAchievementDTO): Promise<void>;
  activity(payload: IRequestActivityDTO): Promise<void>;
}
