// Constants
import { toastIds } from '../../config/errors/toastIds';
import { toastMessages } from '../../config/errors/toastMessages';

// Utils
import displayErrorMessage from '../displayErrorMessage';

export function handleDefaultError(): void {
  displayErrorMessage(
    toastMessages[toastIds.DEFAULT_TOAST],
    toastIds.DEFAULT_TOAST,
  );
}
