import React from 'react';
import { AppLoading } from 'expo';
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Contexts
import { useGame } from '../contexts/Game';

// Pages
import Home from '../pages/Home/index.routes';
import Lobby from '../pages/Lobby';
import Profile from '../pages/Profile';
import Register from '../pages/Register/index.routes';

// Styles
import { withTheme } from 'styled-components';

// Types
import { IThemedComponent } from 'theme';
import { themeProps } from '../modules/PropTypes';

const Tab = createBottomTabNavigator();

const GameRoutes: React.FC<IThemedComponent> = ({ theme }) => {
  const { game, loading } = useGame();

  if (loading) return <AppLoading />;

  if (game)
    return (
      <>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              style: {
                backgroundColor: theme.primary,
                borderTopColor: theme.secondaryLowShade,
              },
              activeTintColor: theme.secondaryShade,
              inactiveTintColor: theme.primaryContrast,
            }}
          >
            <Tab.Screen
              options={{
                title: 'Principal',
                tabBarIcon: props => <Feather name="list" {...props} />,
              }}
              name="Home"
              component={Home}
            />

            <Tab.Screen
              options={{
                title: 'Atividades',
                tabBarIcon: props => (
                  <MaterialCommunityIcons name="trophy-award" {...props} />
                ),
              }}
              name="Register"
              component={Register}
            />

            <Tab.Screen
              options={{
                title: 'Perfil',
                tabBarIcon: props => (
                  <FontAwesome name="user-circle-o" {...props} />
                ),
              }}
              name="Profile"
              component={Profile}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );

  return <Lobby />;
};

GameRoutes.propTypes = {
  theme: themeProps.isRequired,
};

export default withTheme(GameRoutes);
