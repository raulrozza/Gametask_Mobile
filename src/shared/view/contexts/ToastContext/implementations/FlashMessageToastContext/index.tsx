import React, { useCallback } from 'react';

import FlashMessage, { showMessage } from 'react-native-flash-message';

import IToastContext from 'shared/domain/providers/IToastContext';
import { ToastContextProvider } from 'shared/view/contexts/ToastContext/hooks/useToastContext';

const FlashMessageToastContext: React.FC = ({ children }) => {
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

export default FlashMessageToastContext;
