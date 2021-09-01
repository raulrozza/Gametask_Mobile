import React from 'react';

// Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Pages
import Feed from 'modules/selectedGame/view/pages/Feed';
import Ranking from 'modules/selectedGame/view/pages/Ranking';
import { useThemeContext } from 'shared/view/contexts';

const Tab = createMaterialTopTabNavigator();

const SelectedGameHome: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.palette.secondary.main,
        inactiveTintColor: theme.palette.primary.contrast,
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

export default SelectedGameHome;
