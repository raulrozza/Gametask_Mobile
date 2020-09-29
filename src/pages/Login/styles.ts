import styled, { css } from 'styled-components/native';

// Types
import { ActiveItemProps } from './types';

export const HomePage = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))`
  background-color: ${({ theme }) => theme.primaryLowShade};
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const Title = {
  View: styled.View`
    background-color: ${({ theme }) => theme.secondaryLowShade};
    padding: 10px 20px;
    border-radius: 15px;
    width: 300px;
  `,
  Text: styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.secondaryContrast};
    font-family: OpenSans_700Bold;
    font-weight: bold;
    font-size: 24px;
  `,
};

export const FormContainer = styled.View`
  height: 80%;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 3px;
  flex: 1;
  margin: 0 16px 16px;
`;

export const FormToggle = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
`;

export const ToggleButton = {
  Button: styled.TouchableOpacity<ActiveItemProps>`
    width: 50%;
    padding: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, active }) =>
      active ? theme.primary : theme.secondary};
  `,
  Text: styled.Text<ActiveItemProps>`
    font-size: 20px;
    font-family: Roboto;
    font-weight: bold;
    color: ${({ theme, active }) =>
      active ? theme.secondary : theme.secondaryContrast};
  `,
};

export const Form = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}))<ActiveItemProps>`
  margin: 16px 0;

  ${({ active }) =>
    active
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;

export const InputGroup = styled.View`
  width: 80%;
  margin-bottom: 8px;
`;

export const ErrorField = {
  View: styled.View`
    background-color: 'rgb(253, 57, 57)';
    padding: 7px 5px 2px;
    margin: -5px 0 10px;
    border-radius: 5px;
    z-index: -5;
  `,
  Text: styled.Text`
    color: #fff;
  `,
};

export const ConfirmText = styled.Text`
  color: ${({ theme }) => theme.secondaryContrast};
  line-height: 24px;
  font-size: 16px;
`;
