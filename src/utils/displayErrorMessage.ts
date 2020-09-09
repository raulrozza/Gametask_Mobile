import { showMessage } from 'react-native-flash-message';
import { DisplayErrorMessage } from './types';

const displayErrorMessage: DisplayErrorMessage = message => {
  showMessage({
    message,
    type: 'danger',
  });
};

export default displayErrorMessage;
