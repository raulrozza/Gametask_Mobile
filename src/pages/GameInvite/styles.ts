import styled from 'styled-components/native';

// Components
import Button from '../../components/Button';
import GameImage from '../../components/GameImage';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.layout.spacing(4)};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const InviteTitle = {
  Text: styled.Text`
    color: ${({ theme }) => theme.palette.primary.contrast};
    text-align: center;
    font-size: 16px;
    line-height: 22px;

    margin-bottom: ${({ theme }) => theme.layout.spacing(4)};
  `,
  Inviter: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.main};
    text-transform: uppercase;
  `,
  Game: styled.Text`
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.contrast};
    font-size: 18px;
  `,
};

export const GameContainer = {
  Wrapper: styled.View`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-radius: ${({ theme }) => theme.layout.borderRadius.small};
    padding: ${({ theme }) => theme.layout.spacing(8, 4)};

    ${'elevation'}: 2;

    align-items: center;
  `,
  Image: styled(GameImage)`
    height: 96px;
    width: 96px;
    border-radius: 48px;

    margin-bottom: ${({ theme }) => theme.layout.spacing(4)};
  `,
  Description: styled.Text`
    margin-bottom: ${({ theme }) => theme.layout.spacing(8)};
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 16px;
    text-align: center;
  `,
  Button,
};
