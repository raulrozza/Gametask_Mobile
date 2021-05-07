import { AchievementImage } from 'modules/selectedGame/view/components';
import { Button, Typography } from 'shared/view/components';
import styled, { css } from 'styled-components/native';

interface PictureProps {
  obtained: boolean;
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.layout.spacing(4)};
`;

export const Picture = styled(AchievementImage)<PictureProps>`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  ${({ obtained }) =>
    !obtained &&
    css`
      opacity: 0.3;
    `}
`;

export const Name = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  text-align: center;
`;

export const Title = styled(Typography)`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.dark};
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  text-align: center;
`;

export const Description = styled(Typography)`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.primary.contrast};
  text-align: center;
`;

export const RequestButton = styled(Button)`
  margin-top: ${({ theme }) => theme.layout.spacing(2)};
  width: 200px;
`;

export const BackButton = {
  Button: styled.TouchableOpacity`
    margin: ${({ theme }) => theme.layout.spacing(4, 0)};
  `,
  Text: styled(Typography)`
    color: ${({ theme }) => theme.palette.secondary.main};
  `,
};
