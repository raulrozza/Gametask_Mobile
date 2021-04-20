// Constants
import { showMessage } from 'react-native-flash-message';
import { toastIds } from '../../config/errors/toastIds';
import { toastMessages } from '../../config/errors/toastMessages';

export function handleErrorWithoutResponse(): void {
  showMessage({
    message: toastMessages[toastIds.NO_DATA_RESPONSE],
    type: 'danger',
  });
}
