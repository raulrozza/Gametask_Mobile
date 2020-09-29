import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import ActivityRegister from '../../pages/Register/ActivityRegister';
import ActivityInfo from '../../pages/Register/Activity';

const Stack = createStackNavigator();

const RegisterRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="activityRegister" component={ActivityRegister} />
      <Stack.Screen name="activity" component={ActivityInfo} />
    </Stack.Navigator>
  );
};

export default RegisterRoutes;
