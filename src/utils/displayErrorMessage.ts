import { showMessage } from 'react-native-flash-message';

export default function displayErrorMessage(message: string): void {
  showMessage({
    message,
    type: 'danger',
  });
}
