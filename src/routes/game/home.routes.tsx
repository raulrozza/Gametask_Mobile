import React from 'react';

// Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Pages
import Feed from '../../pages/Home/Feed';
import Ranking from '../../pages/Home/Ranking';

// Styles
import { withTheme } from 'styled-components';

// Types
import { IThemedComponent } from '../../interfaces/theme/ThemedComponent';

const Tab = createMaterialTopTabNavigator();

const Home: React.FC<IThemedComponent> = ({ theme }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.palette.secondary.main,
        inactiveTintColor: theme.palette.primary.dark,
        pressColor: theme.palette.primary.dark,
        indicatorContainerStyle: {
          backgroundColor: theme.palette.primary.main,
        },
        indicatorStyle: {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
    >
      <Tab.Screen name="Atividades Recentes" component={Feed} />
      <Tab.Screen name="Ranking" component={Ranking} />
    </Tab.Navigator>
  );
};

export default withTheme(Home);
