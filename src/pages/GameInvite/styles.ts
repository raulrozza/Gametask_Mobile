import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.primary};
`;

export const InviteTitle = {
  Text: styled.Text`
    color: ${({ theme }) => theme.primaryContrast};
    text-align: center;
    font-size: 16px;
    line-height: 22px;

    margin-bottom: 16px;
  `,
  Inviter: styled.Text`
    color: ${({ theme }) => theme.secondary};
    text-transform: uppercase;
  `,
  Game: styled.Text`
    font-weight: bold;
    color: ${({ theme }) => theme.primaryContrast};
    font-size: 18px;
  `,
};

export const GameContainer = {
  Wrapper: styled.View`
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.secondary};
    border-radius: 8px;
    padding: 32px 16px;

    ${'elevation'}: 2;

    align-items: center;
  `,
  Image: styled.Image`
    height: 96px;
    width: 96px;
    border-radius: 48px;

    margin-bottom: 16px;
  `,
  Description: styled.Text`
    margin-bottom: 32px;
    color: ${({ theme }) => theme.secondary};
    font-size: 16px;
    text-align: center;
  `,
  Button,
};
