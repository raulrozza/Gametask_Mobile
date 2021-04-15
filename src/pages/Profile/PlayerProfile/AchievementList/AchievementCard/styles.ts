import styled, { css } from 'styled-components/native';

// Components
import AchievementImage from '../../../../../components/AchievementImage';

// Types
import { AchievementContainerProps } from './types';

export const Container = styled.View<AchievementContainerProps>`
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 8px;
  ${({ obtained }) =>
    !obtained &&
    css`
      opacity: 0.3;
    `}
`;

export const Image = styled(AchievementImage)`
  height: 96px;
  width: 96px;
  border-radius: 48px;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
