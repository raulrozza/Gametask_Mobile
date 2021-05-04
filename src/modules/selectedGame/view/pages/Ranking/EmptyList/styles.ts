import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(2)};
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.primary.dark};
  border-radius: 12px;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.layout.spacing(1)};
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.palette.primary.contrast};
  margin: ${({ theme }) => theme.layout.spacing(2, 0)};
  text-align: center;
`;
