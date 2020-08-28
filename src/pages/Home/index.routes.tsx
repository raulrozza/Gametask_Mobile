import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Pages
import Feed from './Feed';
import Ranking from './Ranking';

// Styles
import { withTheme } from 'styled-components';

// Types
import { IThemedComponent } from 'theme';
import { themeProps } from '../../modules/PropTypes';

const Tab = createMaterialTopTabNavigator();

const Home: React.FC<IThemedComponent> = ({ theme }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.secondary,
        inactiveTintColor: theme.primaryShade,
        pressColor: theme.primaryLowShade,
        indicatorContainerStyle: {
          backgroundColor: theme.primary,
        },
        indicatorStyle: {
          backgroundColor: theme.secondary,
        },
      }}
    >
      <Tab.Screen name="Atividades Recentes" component={Feed} />
      <Tab.Screen name="Ranking" component={Ranking} />
    </Tab.Navigator>
  );
};

Home.propTypes = {
  theme: themeProps.isRequired,
};

export default withTheme(Home);