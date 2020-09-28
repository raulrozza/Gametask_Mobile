import styled, { css } from 'styled-components/native';

// Types
import { StyledInputProps } from './types';

export const StyledInput = styled.TextInput<StyledInputProps>`
  width: 100%;
  border-radius: 5px;
  padding: 0 12px;
  ${({ theme, focused, multiline }) => css`
    background-color: ${theme.primary};
    border: 1px solid ${focused ? theme.secondary : theme.primaryShade};
    color: ${theme.primaryContrast};
    height: ${multiline ? '72px' : '36px '};
  `}
`;
