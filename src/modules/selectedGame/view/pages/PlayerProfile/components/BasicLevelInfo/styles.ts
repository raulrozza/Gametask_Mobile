import { UserImage } from 'modules/selectedGame/view/components';
import { Typography } from 'shared/view/components';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Picture = styled(UserImage)`
  border-radius: 75px;
  border-width: 6px;
  border-color: ${({ theme }) => theme.palette.primary.dark};
  width: 150px;
  height: 150px;
  margin-top: ${({ theme }) => theme.layout.spacing(3)};
`;

export const LevelInfo = {
  View: styled.View`
    min-width: 64px;
    max-width: 128px;
    margin-top: ${({ theme }) => theme.layout.spacing(4)};
    background-color: gold;
    border-width: 6px;
    border-top-color: darkgoldenrod;
    border-left-color: darkgoldenrod;
    border-bottom-color: goldenrod;
    border-right-color: goldenrod;
    padding: ${({ theme }) => theme.layout.spacing(1)};
    justify-content: center;
    align-items: center;
  `,
  Text: styled(Typography)`
    color: goldenrod;
    font-weight: bold;
    font-size: 36px;
  `,
  Exp: styled(Typography)`
    text-align: center;
  `,
};

export const BarContainer = styled.View`
  margin-top: ${({ theme }) => theme.layout.spacing(4)};
  width: 80%;
`;

export const NextLevel = {
  Container: styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: flex-end;
    padding: ${({ theme }) => theme.layout.spacing(0, 3)};
    margin-bottom: ${({ theme }) => theme.layout.spacing(4)};
  `,
  Text: styled(Typography)`
    color: ${({ theme }) => theme.palette.primary.contrast};
  `,
};
