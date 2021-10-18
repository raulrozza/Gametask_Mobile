import 'react-native-gesture-handler';
import React from 'react';

import { RecoilRoot } from 'recoil';

import Routes from 'shared/infra/routes';
import FontLoader from 'shared/view/global/FontLoader';

import AppContainer from './AppContainer';

const AppView: React.FC = () => (
  <RecoilRoot>
    <FontLoader>
      <AppContainer>
        <Routes />
      </AppContainer>
    </FontLoader>
  </RecoilRoot>
);

export default AppView;
