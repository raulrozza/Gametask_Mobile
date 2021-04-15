import styled from 'styled-components/native';

// Components
import GameImage from '../../../components/GameImage';
import DefaultButton from '../../../components/Button';

// Styles
import DefaultTitle from '../../../styles/Title';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.primary.main};

  padding: 8px;
  margin-bottom: 8px;

  border-radius: 4px;
`;

export const Image = styled(GameImage)`
  height: 92px;
  width: 92px;
  border-radius: 46px;

  margin-right: 8px;
`;

export const Info = styled.View`
  flex: 1;
  height: 100%;
`;
export const Title = styled(DefaultTitle)`
  color: ${({ theme }) => theme.secondaryLowShade};
  text-align: left;
  font-size: 18px;
`;

export const Description = {
  Container: styled.ScrollView``,
  Text: styled.Text`
    font-size: 12px;
  `,
};

export const Button = styled(DefaultButton)`
  width: 80px;
  margin-top: 4px;
`;
