import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.layout.spacing(4)};
  font-family: ${({ theme }) => theme.typography.family.title.bold};
  font-size: 24px;
`;
