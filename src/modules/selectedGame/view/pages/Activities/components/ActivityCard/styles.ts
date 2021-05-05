import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.layout.spacing(2)};
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.layout.spacing(4)};
  border-width: 2px;
  margin: ${({ theme }) => theme.layout.spacing(1)};
  border-radius: ${({ theme }) => theme.layout.borderRadius.medium};
  border-color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const InfoContainer = styled.View`
  width: 80%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
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
    margin: ${({ theme }) => theme.layout.spacing(0, 1)};
  `,
  Text: styled.Text`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.palette.secondary.light};
  `,
};
