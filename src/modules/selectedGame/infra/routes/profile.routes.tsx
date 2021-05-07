import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import AchievementDetails from 'modules/selectedGame/view/pages/AchievementDetails';
import PlayerProfile from 'modules/selectedGame/view/pages/PlayerProfile';

const Stack = createStackNavigator();

const ProfileRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="playerProfile" component={PlayerProfile} />
      <Stack.Screen name="achievementDetails" component={AchievementDetails} />
      {/* <Stack.Screen
        name="achievementRegister"
        component={AchievementRegister}
      /> */}
    </Stack.Navigator>
  );
};

export default ProfileRoutes;
