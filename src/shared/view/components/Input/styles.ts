import { darken } from 'polished';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  fullWidth: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '80%')};
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
`;

interface StyledInputProps {
  focused: boolean;
  multiline?: boolean;
}

export const StyledInput = styled.TextInput<StyledInputProps>`
  width: 100%;
  ${({ theme, focused, multiline }) => css`
    border-radius: ${theme.layout.borderRadius.small};
    padding: ${theme.layout.spacing(0, 3)};

    font-family: ${theme.typography.family.content.main};

    background-color: ${theme.palette.gray['0']};
    border: 1px solid
      ${focused
        ? theme.palette.secondary.main
        : darken(0.1, theme.palette.primary.dark)};
    color: ${theme.palette.primary.contrast};
    height: ${multiline ? '72px' : '36px '};
  `}
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
