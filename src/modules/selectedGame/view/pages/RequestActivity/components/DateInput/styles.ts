import { Typography } from 'shared/view/components';
import styled, { css } from 'styled-components/native';

interface DateInputTextProps {
  date: boolean;
}

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
`;

export const Picker = styled.View`
  width: 100%;
  ${({ theme }) => css`
    border-radius: ${theme.layout.borderRadius.small};
    padding: ${theme.layout.spacing(3)};
    background-color: ${theme.palette.gray['0']};
    border: 1px solid ${theme.palette.primary.dark};
  `}
`;

export const Text = styled(Typography)<DateInputTextProps>`
  color: ${({ theme, date }) =>
    date ? theme.palette.primary.contrast : theme.palette.primary.dark};
`;

export const ErrorField = styled.View`
  background-color: 'rgb(253, 57, 57)';
  padding: ${({ theme }) => theme.layout.spacing(2, 1, 0.5)};
  margin: ${({ theme }) => theme.layout.spacing(-1, 0, 2)};
  border-radius: ${({ theme }) => theme.layout.borderRadius.small};
  z-index: -5;
`;

export const ErrorFieldText = styled.Text`
  color: #fff;

  font-family: ${({ theme }) => theme.typography.family.content.main};
`;
