import { RouteProp } from '@react-navigation/native';
import { IActivity } from '../../interfaces/api/Activity';

type ParamList = {
  activity: { activity: IActivity };
};

export type ActivityParams = RouteProp<ParamList, 'activity'>;

export interface FooterConfirmProps {
  disabled: boolean;
}

export interface DateInputTextProps {
  date: boolean;
}
