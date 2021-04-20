// Constants
import { showMessage } from 'react-native-flash-message';
import { toastIds } from '../../config/errors/toastIds';
import { toastMessages } from '../../config/errors/toastMessages';

export function handleDefaultError(): void {
  showMessage({
    message: toastMessages[toastIds.DEFAULT_TOAST],
    type: 'danger',
  });
}
