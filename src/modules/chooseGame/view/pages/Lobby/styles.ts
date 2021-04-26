import styled from 'styled-components/native';

// Styles
import DefaultTitle from '../../styles/Title';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Title = styled(DefaultTitle)`
  color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.layout.spacing(4)};
`;
