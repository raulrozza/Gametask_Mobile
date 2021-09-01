import React from 'react';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Pages
import SelectedGameGameRoutes from 'modules/selectedGame/infra/routes/game';
import { useThemeContext } from 'shared/view/contexts';

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
