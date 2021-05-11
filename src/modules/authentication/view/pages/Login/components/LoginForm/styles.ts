import { css } from 'styled-components';

export const confirmTextStyle = css`
  color: ${({ theme }) => theme.palette.secondary.contrast};
  line-height: 24px;
  font-size: 16px;
`;
