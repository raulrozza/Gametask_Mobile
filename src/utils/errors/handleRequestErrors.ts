// Constants
import { toastMessages } from '../../config/errors/toastMessages';
import { errorCodesToToastIds } from '../../config/errors/errorCodesToToastIds';

// Types
import { ErrorCode } from '../../interfaces/errors/ErrorCode';

// Utils
import displayErrorMessage from '../displayErrorMessage';
import { handleDefaultError } from './handleDefaultError';

export function handleRequestErrors(errorCode: ErrorCode): void {
  const messageCode = errorCodesToToastIds[errorCode];
  if (messageCode)
    return displayErrorMessage(toastMessages[messageCode], messageCode);

  handleDefaultError();
}
