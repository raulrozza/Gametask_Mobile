import styled from 'styled-components/native';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
}

export const Container = styled.View<Props>`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
  padding: 16px;
`;

export const Picture = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  margin-bottom: 8px;
`;

export const Name = styled.Text<Props>`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 8px;
  text-align: center;
`;

export const Title = styled.Text<Props>`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryShade};
  margin-bottom: 8px;
  text-align: center;
`;

export const Description = styled.Text<Props>`
  font-size: 18px;
  color: ${({ theme }) => theme.primaryContrast};
  text-align: center;
`;

export const BackButton = {
  Button: styled.TouchableOpacity`
    margin: 16px 0;
  `,
  Text: styled.Text<Props>`
    color: ${({ theme }) => theme.secondary};
  `,
};
