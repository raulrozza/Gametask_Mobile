import styled from 'styled-components/native';

// Components
import { FontAwesome } from '@expo/vector-icons';
import UserImage from '../../../../components/UserImage';

// Types
import { IconProps } from './types';

const trophyColor = ['gold', 'silver', 'bronze'];

export const Container = styled.View`
  width: 100%;
  padding: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.primaryLowShade};
  border-radius: 12px;
  flex-direction: row;
  margin-bottom: 4px;
  align-items: center;
`;
export const Image = styled(UserImage)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

export const Text = {
  Position: styled.Text`
    margin-right: 4px;
    font-weight: bold;
    font-size: 24px;
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
};

export const Icon = styled(FontAwesome)<IconProps>`
  margin-right: 4px;
  font-size: 24px;
  color: ${({ index }) => trophyColor[index]};
  text-shadow: 0px 0px 1px black;
`;
