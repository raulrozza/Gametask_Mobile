import React from 'react';

import {
  SessionContext,
  ThemeContext,
  ToastContext,
} from 'shared/view/contexts';

const AppContainer: React.FC = ({ children }) => {
  return (
    <ToastContext>
      <ThemeContext>
        <SessionContext>{children}</SessionContext>
      </ThemeContext>
    </ToastContext>
  );
};

export default AppContainer;
