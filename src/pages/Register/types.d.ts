import { RouteProp } from '@react-navigation/native';
import { IActivity } from 'game';

type ParamList = {
  activity: { activity: IActivity };
};

export type ActivityRouteProps = RouteProp<ParamList, 'activity'>;

export interface ButtonProps {
  disabled: boolean;
}

export interface DateText {
  date: boolean;
}
