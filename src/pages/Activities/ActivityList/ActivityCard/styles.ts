import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px;
  flex-direction: row;
  margin-bottom: 16px;
  border-width: 2px;
  margin: 4px;
  border-radius: 16px;
  border-color: ${({ theme }) => theme.secondaryShade};
`;

export const InfoContainer = styled.View`
  width: 80%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.primary.contrast};
  text-transform: uppercase;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.palette.primary.contrast};
`;

export const Experience = {
  Container: styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
  `,
  Text: styled.Text`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.secondaryIntense};
  `,
};
