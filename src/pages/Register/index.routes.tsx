import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import ActivityRegister from './ActivityRegister';
import Activity from './Activity';

const Stack = createStackNavigator();

const Profile: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="activityRegister" component={ActivityRegister} />
      <Stack.Screen name="activity" component={Activity} />
    </Stack.Navigator>
  );
};

export default Profile;
