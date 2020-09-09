import { IActivity, IAchievement, ILevelInfo, IRank, IPlayer } from 'game';

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
