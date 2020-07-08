import styled, { css } from 'styled-components/native';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
  focused: boolean;
  multiline?: boolean;
}

export const StyledInput = styled.TextInput<Props>`
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
