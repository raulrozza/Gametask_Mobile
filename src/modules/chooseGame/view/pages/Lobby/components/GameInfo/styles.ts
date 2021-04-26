import styled from 'styled-components/native';

// Components
import GameImage from '../../../../../../../components/GameImage';
import DefaultButton from '../../../../../../../components/Button';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.primary.main};

  padding: ${({ theme }) => theme.layout.spacing(2)};
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};

  border-radius: ${({ theme }) => theme.layout.borderRadius.small};
`;

export const Image = styled(GameImage)`
  height: 92px;
  width: 92px;
  border-radius: 46px;

  margin-right: ${({ theme }) => theme.layout.spacing(2)};
`;

export const Info = styled.View`
  flex: 1;
  height: 100%;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.palette.secondary.dark};
  text-align: left;
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.family.title.bold};
  font-size: 24px;
`;

export const Description = {
  Container: styled.ScrollView``,
  Text: styled.Text`
    font-size: 12px;
  `,
};

export const Button = styled(DefaultButton)`
  width: 80px;
  margin-top: ${({ theme }) => theme.layout.spacing(1)};
`;
