import IAchievement from 'modules/selectedGame/entities/IAchievement';
import IActivity from 'modules/selectedGame/entities/IActivity';
import IPlayer from 'shared/entities/IPlayer';
import IRank from 'shared/entities/IRank';

interface IFeedPost {
  id: string;
  player: IPlayer;
  type: 'achievement' | 'activity' | 'level' | 'rank';
  activity?: IActivity;
  achievement?: IAchievement;
  level: {
    level: number;
    requiredExperience: number;
  };
  rank: IRank;
  date: string;
}

export default IFeedPost;
