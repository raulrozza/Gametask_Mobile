import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.layout.spacing(4, 0)};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.palette.primary.contrast};
  font-size: 18px;
  text-align: center;
`;
