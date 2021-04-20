import 'react-native-gesture-handler';
import React from 'react';
import FontLoader from 'shared/view/global/FontLoader';
import { RecoilRoot } from 'recoil';
import AppContainer from 'shared/container/contexts';
import Routes from 'shared/infra/routes';

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
