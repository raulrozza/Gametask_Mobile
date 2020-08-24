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

export const StyledActivity = {
  Container: styled.View`
    padding: 8px;
    flex-direction: row;
    margin-bottom: 16px;
    border-width: 2px;
    margin: 4px;
    border-radius: 16px;
    border-color: ${({ theme }) => theme.secondaryShade};
  `,
  InfoContainer: styled.View`
    width: 80%;
  `,
  Title: styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.primaryContrast};
    text-transform: uppercase;
  `,
  Description: styled.Text`
    color: ${({ theme }) => theme.primaryContrast};
  `,
  ExperienceContainer: styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
  `,
  ExperienceText: styled.Text`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.secondaryIntense};
  `,
};

export const EmptyList = {
  Container: styled.View`
    padding: 8px;
    flex-direction: row;
    margin-bottom: 16px;
    border-width: 2px;
    margin: 4px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.secondaryShade};
  `,
  Text: styled.Text`
    color: ${({ theme }) => theme.secondaryContrast};
    text-align: center;
    margin: 8px 0;
  `,
};
