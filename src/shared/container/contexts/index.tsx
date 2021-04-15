import React from 'react';
import DefaultSessionContext from 'shared/container/contexts/SessionContext/implementations/DefaultSessionContext';
import FlashMessageToastContext from 'shared/container/contexts/ToastContext/implementations/FlashMessageToastContext';
import StyledComponentsThemeContext from 'shared/container/contexts/ThemeContext/implementations/StyledComponentsThemeContext';

const AppContainer: React.FC = ({ children }) => {
  return (
    <FlashMessageToastContext>
      <StyledComponentsThemeContext>
        <DefaultSessionContext>{children}</DefaultSessionContext>
      </StyledComponentsThemeContext>
    </FlashMessageToastContext>
  );
};

export default AppContainer;
