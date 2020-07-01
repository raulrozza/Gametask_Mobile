import { StyleSheet } from 'react-native';
import { appTheme } from '../../utils/setTheme';

export default StyleSheet.create({
  input: {
    width: '100%',
    height: 36,
    backgroundColor: appTheme.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: appTheme.primaryShade,
  },
  focused: {
    borderColor: appTheme.secondary,
  },
});
