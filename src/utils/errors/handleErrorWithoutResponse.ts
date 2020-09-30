// Constants
import { toastIds } from '../../config/errors/toastIds';
import { toastMessages } from '../../config/errors/toastMessages';

// Utils
import displayErrorMessage from '../displayErrorMessage';

export function handleErrorWithoutResponse(): void {
  displayErrorMessage(
    toastMessages[toastIds.NO_DATA_RESPONSE],
    toastIds.NO_DATA_RESPONSE,
  );
}
