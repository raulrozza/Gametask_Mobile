import { Button, SubmitButton, Typography } from 'shared/view/components';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(1)};
  text-align: center;
  text-transform: capitalize;
`;

export const Form = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(4)};
`;

export const Footer = {
  Container: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: ${({ theme }) => theme.layout.spacing(2)};
  `,
  Back: styled(Button)`
    border-width: 1px;
    border-radius: 5px;
    width: 100px;
  `,
  Button: styled(SubmitButton)`
    border-radius: 5px;
    width: 100px;
    align-items: center;
  `,
};
