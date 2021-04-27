import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import GameInvite from 'modules/chooseGame/view/pages/GameInvite';
import Lobby from 'modules/chooseGame/view/pages/Lobby';
import UserProfile from '../../../../pages/UserProfile';

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
