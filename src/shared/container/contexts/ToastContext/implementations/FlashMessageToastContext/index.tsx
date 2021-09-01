import React, { useCallback } from 'react';

import FlashMessage, { showMessage } from 'react-native-flash-message';

import { ToastContextProvider } from 'shared/container/contexts/ToastContext/contexts/useToastContext';
import IToastContext from 'shared/domain/providers/IToastContext';

const ReactToastifyToastContext: React.FC = ({ children }) => {
  const showError = useCallback<IToastContext['showError']>(
    message =>
      showMessage({
        message,
        type: 'danger',
      }),
    [],
  );

  const showInfo = useCallback<IToastContext['showInfo']>(
    message =>
      showMessage({
        message,
        type: 'info',
      }),
    [],
  );

  const showSuccess = useCallback<IToastContext['showSuccess']>(
    message =>
      showMessage({
        message,
        type: 'success',
      }),
    [],
  );

  return (
    <ToastContextProvider.Provider value={{ showError, showInfo, showSuccess }}>
      {children}

      <FlashMessage position="bottom" />
    </ToastContextProvider.Provider>
  );
};

export default ReactToastifyToastContext;
