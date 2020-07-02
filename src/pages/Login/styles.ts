import Constants from 'expo-constants';
import styled, { css } from 'styled-components/native';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
}

interface ActiveProps {
  active: boolean;
}

interface ToggleProps extends Props, ActiveProps {}

interface ConfirmProps extends Props {
  disabled: boolean;
}

export const HomePage = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
}))<Props>`
  background-color: ${({ theme }) => theme.primaryLowShade};
  height: 100%;
`;

export const Title = styled.View<Props>`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.secondaryLowShade};
  padding: 10px 20px;
  border-radius: 15px;
  width: 300px;
`;

export const TitleText = styled.Text<Props>`
  text-align: center;
  color: ${({ theme }) => theme.secondaryContrast};
  font-family: OpenSans_700Bold;
  font-weight: bold;
  font-size: 24px;
`;

export const Container = styled.View<Props>`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 3px;
  min-width: 300px;
  margin: 0 16px;
`;

export const FormToggle = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ToggleButton = styled.TouchableOpacity<ToggleProps>`
  width: 50%;
  padding: 8px;
  background-color: ${({ theme, active }) =>
    active ? theme.primary : theme.secondary};
`;

export const ToggleButtonText = styled.Text<ToggleProps>`
  font-size: 16px;
  font-family: Roboto;
  color: ${({ theme, active }) =>
    active ? theme.secondary : theme.secondaryContrast};
`;

export const Form = styled.View<ActiveProps>`
  justify-content: flex-start;
  align-items: center;

  ${({ active }) =>
    active
      ? css`
          height: auto;
          overflow: visible;
          margin: 12px 0;
        `
      : css`
          height: 0px;
          overflow: hidden;
          margin: 0px;
        `}
`;

export const InputGroup = styled.View`
  width: 200px;
  margin-bottom: 5px;
`;

export const ErrorField = styled.View`
  background-color: 'rgb(253, 57, 57)';
  padding: 7px 5px 2px;
  margin: -5px 0 10px;
  border-radius: 5px;
  z-index: -5;
`;

export const ErrorFieldText = styled.Text`
  color: #fff;
`;

export const ConfirmButton = styled.TouchableOpacity<ConfirmProps>`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 2px;
  padding: 8px 12px;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.9;
    `}
`;

export const ConfirmButtonText = styled.Text<Props>`
  color: ${({ theme }) => theme.secondaryContrast};
  line-height: 24px;
  font-size: 16px;
`;
