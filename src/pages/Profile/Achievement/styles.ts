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
  background-color: ${({ theme }) => theme.primary};
  padding: 16px;
`;

export const Picture = styled(AchievementImage)<PictureProps>`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  margin-bottom: 8px;
  ${({ obtained }) =>
    !obtained &&
    css`
      opacity: 0.3;
    `}
`;

export const Name = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 8px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryShade};
  margin-bottom: 8px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.primaryContrast};
  text-align: center;
`;

export const RequestButton = styled(Button)`
  margin-top: 8px;
`;

export const BackButton = {
  Button: styled.TouchableOpacity`
    margin: 16px 0;
  `,
  Text: styled.Text`
    color: ${({ theme }) => theme.secondary};
  `,
};
