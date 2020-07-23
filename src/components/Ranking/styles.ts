import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
}

interface IconProps {
  index: number;
}

interface RankProps {
  background: string;
  text: string;
}

const trophyColor = ['gold', 'silver', 'bronze'];

export const Container = styled.SafeAreaView<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
  padding: 8px;
  align-items: center;
`;

export const RankingItem = {
  Container: styled.View<Props>`
    width: 100%;
    padding: 8px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.primaryLowShade};
    border-radius: 12px;
    flex-direction: row;
    margin-bottom: 4px;
    align-items: center;
  `,
  Image: styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin-right: 8px;
  `,
};

export const RankingText = {
  Rank: styled.Text<RankProps>`
    padding: 4px;
    border-radius: 8px;
    ${({ background, text }) => css`
      background-color: ${background};
      color: ${text};
    `}
    margin-right: 4px;
    font-weight: bold;
  `,
  Position: styled.Text`
    margin-right: 4px;
    font-weight: bold;
    font-size: 24px;
  `,
  Icon: styled(FontAwesome)<IconProps>`
    margin-right: 4px;
    font-size: 24px;
    color: ${({ index }) => trophyColor[index]};
    text-shadow: 0px 0px 1px black;
  `,
  Name: styled.Text<Props>`
    color: ${({ theme }) => theme.secondaryIntense};
    font-weight: bold;
    flex-wrap: wrap;
    font-size: 16px;
  `,
  Bold: styled.Text<Props>`
    color: ${({ theme }) => theme.primaryContrast};
    font-weight: bold;
    font-size: 18px;
    margin-right: 4px;
  `,
};
