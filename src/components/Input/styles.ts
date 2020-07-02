import styled, { css } from 'styled-components/native';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
  focused: boolean;
}

export const StyledInput = styled.TextInput<Props>`
  width: 100%;
  height: 36px;
  border-radius: 5px;
  padding: 0 12px;
  ${({ theme, focused }) => css`
    background-color: ${theme.primary};
    border: 1px solid ${focused ? theme.secondary : theme.primaryShade};
    color: ${theme.primaryContrast};
  `}
`;
