import { Typography } from 'shared/view/components';
import styled from 'styled-components/native';

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrast};
  margin: ${({ theme }) => theme.layout.spacing(2, 0)};
  text-align: center;
`;

export const Container = styled.View`
  margin: ${({ theme }) => theme.layout.spacing(2)};
  padding: ${({ theme }) => theme.layout.spacing(2)};
  border-radius: ${({ theme }) => theme.layout.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.main};
  overflow: hidden;
`;
