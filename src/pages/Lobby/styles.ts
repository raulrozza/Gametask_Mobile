import styled from 'styled-components/native';

// Components
import Button from '../../components/Button';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

// Styles
import DefaultTitle from '../../styles/Title';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.primaryLowShade};
`;

export const Title = styled(DefaultTitle)`
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  margin-bottom: 16px;
`;

export const Game = {
  Container: styled.View`
    width: 100%;
    height: 120px;
    flex-direction: row;
    align-items: center;

    background-color: ${({ theme }) => theme.primary};

    padding: 8px;
    margin-bottom: 8px;

    border-radius: 4px;
  `,
  Image: styled.Image`
    height: 92px;
    width: 92px;
    border-radius: 46px;

    margin-right: 8px;
  `,
  Info: styled.View`
    flex: 1;
    height: 100%;
  `,
  Title: styled(DefaultTitle)`
    color: ${({ theme }) => theme.secondaryLowShade};
    text-align: left;
    font-size: 18px;
  `,
  Description: styled.Text`
    font-size: 12px;
  `,
  Button: styled(Button)`
    width: 80px;
    margin-top: 4px;
  `,
};

export const Footer = {
  Row: styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 48px;

    padding: 8px 16px;

    background-color: ${({ theme }) => theme.primary};
  `,
  Button: styled(RectButton)`
    flex-direction: row;
    align-items: center;
    padding: 4px;
  `,
  ButtonIcon: styled(FontAwesome)`
    color: ${({ theme }) => theme.secondaryShade};
    font-size: 24px;
    margin-right: 4px;
  `,
  ButtonText: styled.Text`
    color: ${({ theme }) => theme.secondaryShade};
    font-size: 18px;
  `,
};
