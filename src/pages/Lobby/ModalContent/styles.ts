import styled, { css } from 'styled-components/native';

// Components
import { MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 60%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  align-items: center;
  justify-content: center;
`;

export const PasteGroup = {
  Container: styled.View`
    flex-direction: row;
    align-items: stretch;

    height: 36px;
    width: 80%;
    max-width: 300px;

    overflow: hidden;

    border: 1px solid ${({ theme }) => theme.secondary};
  `,
  Input: styled.TextInput`
    padding: 0 12px;
    flex: 1;
    ${({ theme }) => css`
      background-color: ${theme.primaryLowShade};
      color: ${theme.primaryContrast};
    `}
  `,
  Button: styled(RectButton)``,
  Icon: styled(MaterialIcons)``,
};
