import styled from 'styled-components/native';
import UserImage from '../../../../components/UserImage';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Picture = styled(UserImage)`
  border-radius: 75px;
  border-width: 6px;
  border-color: ${({ theme }) => theme.primaryShade};
  width: 150px;
  height: 150px;
  margin-top: 12px;
`;

export const LevelInfo = {
  View: styled.View`
    min-width: 64px;
    max-width: 128px;
    margin-top: 16px;
    background-color: gold;
    border-width: 6px;
    border-top-color: darkgoldenrod;
    border-left-color: darkgoldenrod;
    border-bottom-color: goldenrod;
    border-right-color: goldenrod;
    padding: 4px;
    justify-content: center;
    align-items: center;
  `,
  Text: styled.Text`
    color: goldenrod;
    font-weight: bold;
    font-family: Roboto;
    font-size: 36px;
  `,
  Exp: styled.Text`
    text-align: center;
  `,
};

export const BarContainer = styled.View`
  margin-top: 16px;
  width: 80%;
`;

export const NextLevel = {
  Container: styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 12px;
    margin-bottom: 16px;
  `,
  Text: styled.Text`
    color: ${({ theme }) => theme.primaryContrast};
  `,
};
