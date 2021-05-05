import { transparentize } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.layout.spacing(2)};
  margin: ${({ theme }) => theme.layout.spacing(1)};
  margin-bottom: ${({ theme }) => theme.layout.spacing(4)};

  flex-direction: row;
  border-color: ${({ theme }) => theme.palette.secondary.dark};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.layout.borderRadius.small};

  background-color: ${({ theme }) =>
    transparentize(0, theme.palette.secondary.contrast)};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.palette.secondary.dark};
  text-align: center;
  margin: ${({ theme }) => theme.layout.spacing(2, 0)};
`;
