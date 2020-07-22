import styled, { css } from 'styled-components/native';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
}

interface RankProps {
  background: string;
  text: string;
}

export const Container = styled.SafeAreaView<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.primaryShade};
`;

export const FeedItem = {
  Container: styled.View<Props>`
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
  `,
  Content: styled.View`
    flex-direction: row;
  `,
  Image: styled.Image`
    height: 48px;
    width: 48px;
    border-radius: 24px;
    margin-right: 8px;
  `,
  Info: styled.View``,
  Row: styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  `,
  Meta: styled.View`
    width: 100%;
    margin-top: 4px;
    flex-direction: row;
    justify-content: flex-end;
  `,
  MetaText: styled.Text<Props>`
    color: ${({ theme }) => theme.primaryShade};
    font-style: italic;
  `,
};

export const FeedText = {
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
  Name: styled.Text<Props>`
    color: ${({ theme }) => theme.secondaryLowShade};
    font-weight: bold;
  `,
  Activity: styled.Text<Props>`
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    text-transform: uppercase;
  `,
  Text: styled.Text<Props>`
    color: ${({ theme }) => theme.primaryContrast};
  `,
  Bold: styled.Text<Props>`
    color: ${({ theme }) => theme.primaryContrast};
    font-weight: bold;
  `,
};
