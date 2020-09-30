// Constants
import { toastIds } from '../../config/errors/toastIds';
import { toastMessages } from '../../config/errors/toastMessages';

// Utils
import displayErrorMessage from '../displayErrorMessage';

export function handleForbiddenStatus(signOut: () => void): void {
  displayErrorMessage(toastMessages[toastIds.FORBIDDEN], toastIds.FORBIDDEN);
  signOut();
}
