// Constants
import { showMessage } from 'react-native-flash-message';
import { toastIds } from '../../config/errors/toastIds';
import { toastMessages } from '../../config/errors/toastMessages';

export function handleUnknownError(): void {
  showMessage({
    message: toastMessages[toastIds.UNKNOWN],
    type: 'danger',
  });
}
