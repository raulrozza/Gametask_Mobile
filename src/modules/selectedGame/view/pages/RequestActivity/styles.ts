import styled, { css } from 'styled-components/native';
import { Typography } from 'shared/view/components';

interface DateInputTextProps {
  date: boolean;
}

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

export const Paragraph = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  width: 100%;
  margin: ${({ theme }) => theme.layout.spacing(4, 0)};
  padding: ${({ theme }) => theme.layout.spacing(0, 4)};
`;

export const Info = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(0, 4)};
  font-style: italic;
`;

export const Form = {
  Container: styled.View`
    width: 100%;
    padding: ${({ theme }) => theme.layout.spacing(4)};
  `,
  InputGroup: styled.View`
    margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  `,
};

export const DateInput = {
  View: styled.View`
    width: 100%;
    border-radius: ${({ theme }) => theme.layout.borderRadius.small};
    padding: ${({ theme }) => theme.layout.spacing(3)};
    ${({ theme }) => css`
      background-color: ${theme.palette.primary.main};
      border: 1px solid ${theme.palette.primary.dark};
    `}
  `,
  Text: styled(Typography)<DateInputTextProps>`
    color: ${({ theme, date }) =>
      date ? theme.palette.primary.contrast : theme.palette.primary.dark};
  `,
};
