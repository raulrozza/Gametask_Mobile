import { IAchievement } from '../../interfaces/api/Achievement';
import { IActivity } from '../../interfaces/api/Activity';
import { ILevelInfo } from '../../interfaces/api/LevelInfo';
import { IPlayer } from '../../interfaces/api/Player';
import { IRank } from '../../interfaces/api/Rank';

export interface IFeed {
  _id: string;
  player: IPlayer;
  type: 'achievement' | 'activity' | 'level' | 'rank';
  activity?: IActivity;
  achievement?: IAchievement;
  level?: ILevelInfo;
  rank?: IRank;
  date: Date;
}

export interface IRankingTextIcon {
  index: number;
}

export interface IFeedItem {
  item: IFeed;
}
