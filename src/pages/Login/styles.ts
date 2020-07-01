import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { appTheme } from '../../utils/setTheme';

export default StyleSheet.create({
  homePage: {
    backgroundColor: appTheme.primaryLowShade,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },

  title: {
    marginBottom: 20,
    backgroundColor: appTheme.secondaryLowShade,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    width: 300,
  },
  titleText: {
    textAlign: 'center',
    color: appTheme.secondaryContrast,
    fontFamily: 'OpenSans_700Bold',
    fontWeight: 'bold',
    fontSize: 24,
  },

  container: {
    backgroundColor: appTheme.primary,
    borderRadius: 3,
    minWidth: 300,
    marginHorizontal: 16,
  },
  formToggle: {
    width: '100%',
    flexDirection: 'row',
  },

  toggleButton: {
    width: '50%',
    padding: 8,
    fontFamily: 'Roboto_500Regular',
    backgroundColor: appTheme.secondary,
  },
  toggleButtonActive: {
    backgroundColor: appTheme.primary,
  },
  toggleButtonText: {
    color: appTheme.secondaryContrast,
    fontSize: 16,
  },
  toggleButtonTextActive: {
    color: appTheme.secondary,
  },
  form: {
    height: 0,
    overflow: 'hidden',
    marginVertical: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formActive: {
    height: 'auto',
    overflow: 'visible',
    margin: 0,
  },
  inputGroup: {
    width: 200,
    marginBottom: 5,
  },
  errorField: {
    backgroundColor: 'rgb(253, 57, 57)',
    paddingTop: 7,
    paddingBottom: 2,
    paddingHorizontal: 5,
    marginTop: -5,
    marginBottom: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    zIndex: -5,
  },
  errorFieldText: {
    color: '#FFF',
  },
  confirmButton: {
    backgroundColor: appTheme.secondary,
    borderRadius: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  confirmButtonText: {
    color: appTheme.secondaryContrast,
    lineHeight: 24,
    fontSize: 16,
  },
  confirmButtonDisabled: {
    opacity: 0.6,
  },
});
