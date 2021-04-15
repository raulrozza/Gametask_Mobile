import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.layout.spacing(2)};
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.layout.spacing(4)};
  border-width: 2px;
  margin: ${({ theme }) => theme.layout.spacing(1)};
  border-radius: ${({ theme }) => theme.layout.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.palette.secondary.contrast};
  text-align: center;
  margin: ${({ theme }) => theme.layout.spacing(2, 0)};
`;
