import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.layout.spacing(2)};
`;

export const Back = styled.TouchableOpacity`
  border-width: 1px;
  padding: ${({ theme }) => theme.layout.spacing(2)};
  border-radius: ${({ theme }) => theme.layout.borderRadius.small};
  border-color: ${({ theme }) => theme.palette.secondary.main};
  width: 100px;
  align-items: center;
`;
