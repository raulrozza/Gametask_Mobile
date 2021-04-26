import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import GameInvite from '../../../../pages/GameInvite';
import UserProfile from '../../../../pages/UserProfile';
import Lobby from '../../../../pages/Lobby';

const Stack = createStackNavigator();

const ChooseGameLoggedRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Lobby" component={Lobby} />
        <Stack.Screen name="GameInvite" component={GameInvite} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ChooseGameLoggedRoutes;
