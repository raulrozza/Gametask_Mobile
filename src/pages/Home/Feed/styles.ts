import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primaryShade};
`;

export const FeedItem = {
  Container: styled.View`
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    overflow: hidden;
  `,
  Content: styled.View`
    flex-direction: row;
    justify-content: flex-start;
  `,
  Image: styled.Image`
    height: 48px;
    width: 48px;
    border-radius: 24px;
    margin-right: 8px;
  `,
  Info: styled.View`
    background-color: blue;
  `,
  Row: styled.View`
    flex: 1;
  `,
  Meta: styled.View`
    width: 100%;
    margin-top: 4px;
    flex-direction: row;
    justify-content: flex-end;
  `,
  MetaText: styled.Text`
    color: ${({ theme }) => theme.primaryShade};
    font-style: italic;
  `,
};

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
  Empty: styled.Text`
    color: ${({ theme }) => theme.primaryContrast};
    margin: 8px 0;
    text-align: center;
  `,
};
