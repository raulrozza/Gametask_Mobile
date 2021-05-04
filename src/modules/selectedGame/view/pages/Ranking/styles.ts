import { darken } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => darken(0.05, theme.palette.primary.main)};
  padding: ${({ theme }) => theme.layout.spacing(2)};
  align-items: center;
`;
