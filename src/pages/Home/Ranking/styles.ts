import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 8px;
  align-items: center;
`;
