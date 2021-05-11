import styled, { css } from 'styled-components/native';

interface TypographyProps {
  variant?: 'body' | 'title';
  fontBold?: 'main' | 'bold';
}

const Typography = styled.Text<TypographyProps>`
  font-size: 16px;

  ${({ variant = 'body', theme, fontBold = 'main' }) => css`
    font-family: ${variant === 'body'
      ? theme.typography.family.content[fontBold]
      : theme.typography.family.title[fontBold]};
  `}
`;

export default Typography;
