import styled, { css } from 'styled-components/native';

// Types
import { RankProps } from './types';

const Rank = styled.Text<RankProps>`
  ${({ theme, background, text }) => css`
    padding: ${theme.layout.spacing(1)};
    margin-right: ${theme.layout.spacing(1)};
    border-radius: ${theme.layout.borderRadius.small};
    background-color: ${background};
    color: ${text};
    font-weight: bold;
  `}
`;

export default Rank;
