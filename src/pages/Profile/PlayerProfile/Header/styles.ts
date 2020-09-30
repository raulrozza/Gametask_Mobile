import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  border-style: solid;
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }) => theme.primaryShade};
`;

export const Title = styled.Text`
  width: 100%;
  padding: 15px;
  color: ${({ theme }) => theme.primaryContrast};
  font-weight: bold;
  font-size: 24px;
`;
