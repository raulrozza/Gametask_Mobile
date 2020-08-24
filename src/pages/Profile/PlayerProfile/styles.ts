import styled, { css } from 'styled-components/native';

// Icons
import { Feather } from '@expo/vector-icons';
import { IAchievementStyle, IBottomOptions } from '../types';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  background-color: ${({ theme }) => theme.primaryIntense};
  min-height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  border-style: solid;
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }) => theme.primaryShade};
`;

export const Title = styled.Text`
  width: 100%;
  padding: 15px;
  color: ${({ theme }) => theme.primaryContrast};
  font-weight: bold;
  font-size: 24px;
`;

export const UserImage = styled.Image`
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
    margin-bottom: 8px;
  `,
  Text: styled.Text`
    color: ${({ theme }) => theme.primaryContrast};
  `,
};

export const AchievementsList = {
  Container: styled.View`
    width: 80%;
    border-radius: 5px;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: ${({ theme }) => theme.primary};
    flex-direction: row;
    flex-wrap: wrap;
  `,
  Text: styled.Text`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.primaryContrast};
    font-weight: bold;
    font-size: 36px;
    margin: 8px 0;
  `,
};

export const Achievement = {
  Container: styled.View<IAchievementStyle>`
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 8px;
    ${({ obtained }) =>
      !obtained &&
      css`
        opacity: 0.3;
      `}
  `,
  Image: styled.Image`
    height: 96px;
    width: 96px;
    border-radius: 48px;
    margin-bottom: 8px;
  `,
  Text: styled.Text`
    font-weight: bold;
    color: ${({ theme }) => theme.secondary};
  `,
};

export const BottomOption = {
  Button: styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${({ theme }) => css`
      background-color: ${theme.primaryLowShade};
      border-top-width: 1px;
      border-color: ${theme.primaryShade};
    `}
  `,
  Icon: styled(Feather)`
    color: ${({ theme }) => theme.secondaryIntense};
    font-size: 24px;
    font-weight: bold;
  `,
  Text: styled.Text<IBottomOptions>`
    ${({ theme, thin = false }) => css`
      color: ${theme.secondaryIntense};
      font-size: ${thin ? '18px' : '24px'};
      ${!thin &&
      css`
        font-weight: bold;
      `}
    `}
  `,
};
