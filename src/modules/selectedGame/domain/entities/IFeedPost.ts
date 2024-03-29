import IAchievement from 'modules/selectedGame/domain/entities/IAchievement';
import IActivity from 'modules/selectedGame/domain/entities/IActivity';
import IPlayer from 'shared/domain/entities/IPlayer';
import IRank from 'shared/domain/entities/IRank';

interface IFeedPost {
  id: string;
  player: IPlayer;
  type: 'achievement' | 'activity' | 'level' | 'rank';
  activity?: IActivity;
  achievement?: IAchievement;
  level: {
    level: number;
    requiredExperience: number;
    title?: string;
  };
  rank: IRank;
  date: string;
}

export default IFeedPost;
