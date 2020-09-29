import React from 'react';

// Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Pages
import Feed from './Feed';
import Ranking from './Ranking';

// Styles
import { withTheme } from 'styled-components';

// Types
import { IThemedComponent } from '../../interfaces/theme/ThemedComponent';

const Tab = createMaterialTopTabNavigator();

const Home: React.FC<IThemedComponent> = ({ theme }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.secondary,
        inactiveTintColor: theme.primaryShade,
        pressColor: theme.primaryLowShade,
        indicatorContainerStyle: {
          backgroundColor: theme.primary,
        },
        indicatorStyle: {
          backgroundColor: theme.secondary,
        },
      }}
    >
      <Tab.Screen name="Atividades Recentes" component={Feed} />
      <Tab.Screen name="Ranking" component={Ranking} />
    </Tab.Navigator>
  );
};

export default withTheme(Home);
