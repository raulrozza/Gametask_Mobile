import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-style: solid;
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Name = styled.Text`
  width: 100%;
  padding: 15px;
  color: ${({ theme }) => theme.palette.primary.contrast};
  font-weight: bold;
  font-size: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
