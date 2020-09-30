// Constants
import { toastIds } from '../../config/errors/toastIds';
import { toastMessages } from '../../config/errors/toastMessages';

// Utils
import displayErrorMessage from '../displayErrorMessage';

export function handleUnknownError(): void {
  displayErrorMessage(toastMessages[toastIds.UNKNOWN], toastIds.UNKNOWN);
}
