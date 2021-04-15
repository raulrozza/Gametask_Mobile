import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: 'rgb(253, 57, 57)';
  padding: ${({ theme }) => theme.layout.spacing(2, 1, 0.5)};
  margin: ${({ theme }) => theme.layout.spacing(-1, 0, 2)};
  border-radius: ${({ theme }) => theme.layout.borderRadius.small};
  z-index: -5;
`;

export const Text = styled.Text`
  color: #fff;
`;
