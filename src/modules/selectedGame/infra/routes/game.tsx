import React from 'react';
import { IGameRouteScreen } from 'shared/infra/routes/game';

// Icons
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// Pages
import Profile from '../../../../routes/game/profile.routes';
import ActivitiesRoutes from './activities.routes';
import SelectedGameHome from './home.routes';

const SelectedGameGameRoutes = (
  Screen: IGameRouteScreen,
): React.ReactNode[] => [
  <Screen
    key="selected-game-home"
    options={{
      title: 'Principal',
      tabBarIcon: props => <Feather name="list" {...props} />,
    }}
    name="Home"
    component={SelectedGameHome}
  />,
  <Screen
    key="selected-game-activities"
    options={{
      title: 'Atividades',
      tabBarIcon: props => (
        <MaterialCommunityIcons name="trophy-award" {...props} />
      ),
    }}
    name="Activities"
    component={ActivitiesRoutes}
  /> /*
  <Screen
    key="selected-game-profile"
    options={{
      title: 'Perfil',
      tabBarIcon: props => <FontAwesome name="user-circle-o" {...props} />,
    }}
    name="Profile"
    component={Profile}
  />, */,
];

export default SelectedGameGameRoutes;
