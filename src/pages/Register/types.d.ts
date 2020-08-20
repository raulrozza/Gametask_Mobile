import { RouteProp } from '@react-navigation/native';
import { IActivity } from 'game';

type ParamList = {
  activity: { activity: IActivity };
};

export type ActivityRouteProp = RouteProp<ParamList, 'activity'>;

export interface IFooterConfirm {
  disabled: boolean;
}

export interface IDateInputText {
  date: boolean;
}
