import styled from 'styled-components/native';
import Button from '../../../components/Button';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  padding: 4px;
  text-align: center;
  text-transform: capitalize;
`;

export const Form = {
  Container: styled.View`
    width: 100%;
    padding: 16px;
  `,
  InputGroup: styled.View`
    margin-bottom: 8px;
  `,
};

export const Footer = {
  Container: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 8px;
  `,
  Back: styled(Button)`
    border-width: 1px;
    border-radius: 5px;
    width: 100px;
  `,
  Button: styled(Button)`
    border-radius: 5px;
    width: 100px;
    align-items: center;
  `,
};
