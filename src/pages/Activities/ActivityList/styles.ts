import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.primary};
  flex: 1;
  padding: 12px;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 46px;
`;

export const PageTitle = styled.Text`
  color: ${({ theme }) => theme.primaryContrast};
  font-weight: bold;
  font-size: 24px;
  height: 32px;
  width: 100%;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.primaryContrast};
  margin: 16px 0;
  text-align: center;
`;

export const ActivityContainer = {
  View: styled.View`
    width: 100%;
  `,
  Title: styled.Text`
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 18px;
  `,
};
