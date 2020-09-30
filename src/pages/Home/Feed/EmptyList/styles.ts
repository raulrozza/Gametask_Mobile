import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({ theme }) => theme.primaryContrast};
  margin: 8px 0;
  text-align: center;
`;

export const Container = styled.View`
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  overflow: hidden;
`;
