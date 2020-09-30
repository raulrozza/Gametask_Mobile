import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px 0;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.primaryContrast};
  font-size: 18px;
  text-align: center;
`;
