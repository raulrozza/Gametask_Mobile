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
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const Title = {
  View: styled.View`
    background-color: ${({ theme }) => theme.palette.secondary.dark};
    padding: ${({ theme }) => theme.layout.spacing(2, 5)};
    border-radius: 15px;
    width: 300px;
  `,
  Text: styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.palette.secondary.contrast};
    font-family: OpenSans_700Bold;
    font-weight: bold;
    font-size: 24px;
  `,
};

export const FormContainer = styled.View`
  height: 80%;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 3px;
  flex: 1;
  margin: ${({ theme }) => theme.layout.spacing(0, 4, 4)};
`;

export const FormToggle = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
`;

export const ToggleButton = {
  Button: styled.TouchableOpacity<ActiveItemProps>`
    width: 50%;
    padding: ${({ theme }) => theme.layout.spacing(2)};
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, active }) =>
      active ? theme.palette.primary.main : theme.palette.secondary.main};
  `,
  Text: styled.Text<ActiveItemProps>`
    font-size: 20px;
    font-family: Roboto;
    font-weight: bold;
    color: ${({ theme, active }) =>
      active ? theme.palette.secondary.main : theme.palette.secondary.contrast};
  `,
};

export const Form = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}))<ActiveItemProps>`
  margin: ${({ theme }) => theme.layout.spacing(4, 0)};

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
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
`;

export const ConfirmText = styled.Text`
  color: ${({ theme }) => theme.palette.secondary.contrast};
  line-height: 24px;
  font-size: 16px;
`;
