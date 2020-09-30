import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.primaryLowShade};
  border-radius: 12px;
  flex-direction: row;
  margin-bottom: 4px;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.primaryContrast};
  margin: 8px 0;
  text-align: center;
`;
