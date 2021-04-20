// Constants
import { showMessage } from 'react-native-flash-message';
import { toastIds } from '../../config/errors/toastIds';
import { toastMessages } from '../../config/errors/toastMessages';

export function handleForbiddenStatus(signOut: () => void): void {
  showMessage({
    message: toastMessages[toastIds.FORBIDDEN],
    type: 'danger',
  });
  signOut();
}
