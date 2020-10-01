import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))`
  background-color: ${({ theme }) => theme.primaryIntense};
  min-height: 100%;
`;
