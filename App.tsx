/* eslint-disable camelcase */
import 'react-native-gesture-handler';
import React from 'react';
import { AppLoading } from 'expo';

// Fonts
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans';

// Libs
import FlashMessage from 'react-native-flash-message';
import { RecoilRoot } from 'recoil';

// Contexts
import Authorization from './src/contexts/Authorization';
import Theme from './src/contexts/Theme';

// Routes
import Routes from './src/routes/index.routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RecoilRoot>
      <Theme>
        <Authorization>
          <Routes />
        </Authorization>
        <FlashMessage position="bottom" />
      </Theme>
    </RecoilRoot>
  );
};

export default App;
