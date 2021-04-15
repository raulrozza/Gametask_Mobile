import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const FeedText = {
  Text: styled.Text`
    color: ${({ theme }) => theme.palette.primary.contrast};
    line-height: 24px;
    flex-wrap: wrap;
  `,
  Name: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.dark};
    font-weight: bold;
  `,
  Activity: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: bold;
    text-transform: uppercase;
    flex-wrap: wrap;
  `,
  Bold: styled.Text`
    font-weight: bold;
  `,
};
