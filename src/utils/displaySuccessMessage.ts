import { showMessage } from 'react-native-flash-message';

export default function displaySuccessMessage(message: string): void {
  showMessage({
    message,
    type: 'success',
  });
}
