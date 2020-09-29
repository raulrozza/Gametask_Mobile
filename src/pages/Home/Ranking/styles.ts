import styled from 'styled-components/native';

// Components
import { FontAwesome } from '@expo/vector-icons';

// Types
import { RankingTextIconProps } from './types';

const trophyColor = ['gold', 'silver', 'bronze'];

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
  padding: 8px;
  align-items: center;
`;

export const RankingItem = {
  Container: styled.View`
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
  Position: styled.Text`
    margin-right: 4px;
    font-weight: bold;
    font-size: 24px;
  `,
  Icon: styled(FontAwesome)<RankingTextIconProps>`
    margin-right: 4px;
    font-size: 24px;
    color: ${({ index }) => trophyColor[index]};
    text-shadow: 0px 0px 1px black;
  `,
  Name: styled.Text`
    color: ${({ theme }) => theme.secondaryIntense};
    font-weight: bold;
    flex-wrap: wrap;
    font-size: 16px;
  `,
  Bold: styled.Text`
    color: ${({ theme }) => theme.primaryContrast};
    font-weight: bold;
    font-size: 18px;
    margin-right: 4px;
  `,
  Empty: styled.Text`
    color: ${({ theme }) => theme.primaryContrast};
    margin: 8px 0;
    text-align: center;
  `,
};
