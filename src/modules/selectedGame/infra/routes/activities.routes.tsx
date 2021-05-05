import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Activities from 'modules/selectedGame/view/pages/Activities';

const Stack = createStackNavigator();

const ActivitiesRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="activityList" component={Activities} />
    {/* <Stack.Screen name="activityRegister" component={ActivityRegister} /> */}
  </Stack.Navigator>
);

export default ActivitiesRoutes;
