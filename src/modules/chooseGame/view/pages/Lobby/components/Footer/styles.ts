import styled from 'styled-components/native';

// Components
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { Typography } from 'shared/view/components';

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  height: 48px;

  padding: ${({ theme }) => theme.layout.spacing(2, 4)};

  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Button = {
  Wrapper: styled(RectButton)`
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.layout.spacing(1)};
  `,
  Icon: styled(FontAwesome)`
    color: ${({ theme }) => theme.palette.secondary.dark};
    font-size: 24px;
    margin-right: ${({ theme }) => theme.layout.spacing(1)};
  `,
  Text: styled(Typography)`
    color: ${({ theme }) => theme.palette.secondary.dark};
    font-size: 18px;
  `,
};
