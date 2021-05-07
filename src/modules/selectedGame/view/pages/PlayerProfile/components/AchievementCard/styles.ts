import { AchievementImage } from 'modules/selectedGame/view/components';
import { Typography } from 'shared/view/components';
import styled, { css } from 'styled-components/native';

interface AchievementContainerProps {
  obtained: boolean;
}

export const Container = styled.View<AchievementContainerProps>`
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: ${({ theme }) => theme.layout.spacing(2)};
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
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
`;

export const Text = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
