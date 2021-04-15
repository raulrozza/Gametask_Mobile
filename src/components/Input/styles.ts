import styled, { css } from 'styled-components/native';

// Types
import { StyledInputProps } from './types';

export const StyledInput = styled.TextInput<StyledInputProps>`
  width: 100%;
  ${({ theme, focused, multiline }) => css`
    border-radius: ${theme.layout.borderRadius.small};
    padding: ${theme.layout.spacing(0, 3)};

    background-color: ${theme.palette.primary.main};
    border: 1px solid
      ${focused ? theme.palette.secondary.main : theme.palette.primary.dark};
    color: ${theme.palette.primary.contrast};
    height: ${multiline ? '72px' : '36px '};
  `}
`;
