import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primaryShade};
`;

export const FeedText = {
  Text: styled.Text`
    color: ${({ theme }) => theme.primaryContrast};
    line-height: 24px;
    flex-wrap: wrap;
  `,
  Name: styled.Text`
    color: ${({ theme }) => theme.secondaryLowShade};
    font-weight: bold;
  `,
  Activity: styled.Text`
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    text-transform: uppercase;
    flex-wrap: wrap;
  `,
  Bold: styled.Text`
    font-weight: bold;
  `,
};
