/* eslint-disable camelcase */
import 'react-native-gesture-handler';
import React from 'react';

// Contexts
import Authorization from './src/contexts/Authorization';
import Theme from './src/contexts/Theme';

// Routes
import Routes from './src/routes/index.routes';
import AppView from 'shared/view';

const App: React.FC = () => {
  return (
    <AppView>
      <Theme>
        <Authorization>
          <Routes />
        </Authorization>
      </Theme>
    </AppView>
  );
};

export default App;
