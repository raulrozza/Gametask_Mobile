// Constants
import { toastMessages } from '../../config/errors/toastMessages';
import { errorCodesToToastIds } from '../../config/errors/errorCodesToToastIds';

// Types
import { ErrorCode } from '../../interfaces/errors/ErrorCode';

// Utils
import { handleDefaultError } from './handleDefaultError';
import { showMessage } from 'react-native-flash-message';

export function handleRequestErrors(errorCode: ErrorCode): void {
  const messageCode = errorCodesToToastIds[errorCode];
  if (messageCode)
    showMessage({
      message: toastMessages[messageCode],
      type: 'danger',
    });

  handleDefaultError();
}
