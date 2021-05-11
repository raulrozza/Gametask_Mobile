import React from 'react';
import useThemeContext from 'shared/container/contexts/ThemeContext/contexts/useThemeContext';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages
import SelectedGameGameRoutes from 'modules/selectedGame/infra/routes/game';

const Tab = createBottomTabNavigator();

export type IGameRouteScreen = typeof Tab.Screen;

const GameRoutes: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: theme.palette.gray['0'],
            borderTopColor: theme.palette.secondary.dark,
          },
          activeTintColor: theme.palette.secondary.dark,
          inactiveTintColor: theme.palette.primary.contrast,
        }}
      >
        {SelectedGameGameRoutes(Tab.Screen)}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default GameRoutes;
