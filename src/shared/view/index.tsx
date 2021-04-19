import 'react-native-gesture-handler';
import React from 'react';
import FontLoader from 'shared/view/global/FontLoader';
import { RecoilRoot } from 'recoil';
import AppContainer from 'shared/container/contexts';

const AppView: React.FC = ({ children }) => (
  <RecoilRoot>
    <FontLoader>
      <AppContainer>{children}</AppContainer>
    </FontLoader>
  </RecoilRoot>
);

export default AppView;
