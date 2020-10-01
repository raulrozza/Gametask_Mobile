import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px;
  flex-direction: row;
  margin-bottom: 16px;
  border-width: 2px;
  margin: 4px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.secondaryShade};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.secondaryContrast};
  text-align: center;
  margin: 8px 0;
`;
