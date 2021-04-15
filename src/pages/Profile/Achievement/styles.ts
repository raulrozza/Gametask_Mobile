import styled, { css } from 'styled-components/native';

// Components
import AchievementImage from '../../../components/AchievementImage';
import Button from '../../../components/Button';

// Types
import { PictureProps } from './types';

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

export const Name = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.dark};
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.primary.contrast};
  text-align: center;
`;

export const RequestButton = styled(Button)`
  margin-top: ${({ theme }) => theme.layout.spacing(2)};
`;

export const BackButton = {
  Button: styled.TouchableOpacity`
    margin: ${({ theme }) => theme.layout.spacing(4, 0)};
  `,
  Text: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.main};
  `,
};
