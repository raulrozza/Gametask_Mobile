import styled from 'styled-components/native';

// Components
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  height: 48px;

  padding: 8px 16px;

  background-color: ${({ theme }) => theme.primary};
`;

export const Button = {
  Wrapper: styled(RectButton)`
    flex-direction: row;
    align-items: center;
    padding: 4px;
  `,
  Icon: styled(FontAwesome)`
    color: ${({ theme }) => theme.secondaryShade};
    font-size: 24px;
    margin-right: 4px;
  `,
  Text: styled.Text`
    color: ${({ theme }) => theme.secondaryShade};
    font-size: 18px;
  `,
};
