import styled, { css } from 'styled-components/native';

interface RankChipProps {
  backgroundColor?: string;
  color?: string;
}

const Rank = styled.Text<RankChipProps>`
  ${({ theme, backgroundColor, color }) => css`
    padding: ${theme.layout.spacing(1)};
    margin-right: ${theme.layout.spacing(1)};
    border-radius: ${theme.layout.borderRadius.small};
    background-color: ${backgroundColor || theme.palette.secondary.main};
    color: ${color || theme.palette.secondary.contrast};
    font-weight: bold;
  `}
`;

export default Rank;
