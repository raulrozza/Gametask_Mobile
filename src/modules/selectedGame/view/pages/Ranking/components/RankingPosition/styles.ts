import styled from 'styled-components/native';

// Components
import { FontAwesome } from '@expo/vector-icons';
import { UserImage } from 'modules/selectedGame/view/components';

interface IconProps {
  index: number;
}

const trophyColor = [
  '#d4af37', // gold
  '#C0C0C0', // silver
  '#b08d57', // bronze
];

export const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(2)};
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.primary.dark};
  border-radius: 12px;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.layout.spacing(1)};
  align-items: center;
`;
export const Image = styled(UserImage)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: ${({ theme }) => theme.layout.spacing(2)};
`;

export const Text = {
  Position: styled.Text`
    margin-right: ${({ theme }) => theme.layout.spacing(1)};
    font-weight: bold;
    font-size: 24px;
  `,
  Name: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.light};
    font-weight: bold;
    flex-wrap: wrap;
    font-size: 16px;
  `,
  Bold: styled.Text`
    color: ${({ theme }) => theme.palette.primary.contrast};
    font-weight: bold;
    font-size: 18px;
    margin-right: ${({ theme }) => theme.layout.spacing(1)};
  `,
};

export const Icon = styled(FontAwesome)<IconProps>`
  margin-right: ${({ theme }) => theme.layout.spacing(1)};
  font-size: 24px;
  color: ${({ index }) => trophyColor[index]};
  text-shadow: 0px 0px 1px black;
`;
