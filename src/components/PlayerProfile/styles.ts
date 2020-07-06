import React from 'react';
import styled from 'styled-components/native';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
}

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))<Props>`
  background-color: ${({ theme }) => theme.primaryIntense};
  min-height: 100%;
`;

export const Header = styled.View<Props>`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  border-style: solid;
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }) => theme.primaryShade};
`;

export const Title = styled.Text<Props>`
  width: 100%;
  padding: 15px;
  color: ${({ theme }) => theme.primaryContrast};
  font-weight: bold;
  font-size: 24px;
`;

export const UserImage = styled.Image<Props>`
  border-radius: 75px;
  border-width: 6px;
  border-color: ${({ theme }) => theme.primaryShade};
  width: 150px;
  height: 150px;
  margin-top: 12px;
`;

export const LevelInfo = styled.View`
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
`;

export const LevelInfoText = styled.Text`
  color: goldenrod;
  font-weight: bold;
  font-family: Roboto;
  font-size: 36px;
`;

export const LevelInfoExp = styled.Text`
  text-align: center;
`;

export const BarContainer = styled.View`
  margin-top: 16px;
  width: 80%;
`;

export const NextLevelContainer = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 12px;
`;

export const NextLevelText = styled.Text<Props>`
  color: ${({ theme }) => theme.primaryContrast};
`;

export const AchievementsContainer = styled.View<Props>`
  width: 80%;
  border-radius: 5px;
  padding: 8px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.primary};
  background-color: blue;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Achievement = {
  Container: styled.View``,
  Image: styled.Image`
    height: 96px;
    width: 96px;
  `,
};
