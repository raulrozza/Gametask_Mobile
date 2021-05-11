import { Typography } from 'shared/view/components';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.layout.spacing(2)};
  margin: ${({ theme }) => theme.layout.spacing(1)};
  margin-bottom: ${({ theme }) => theme.layout.spacing(4)};

  flex-direction: row;

  border-width: 2px;
  border-radius: ${({ theme }) => theme.layout.borderRadius.medium};
  border-color: ${({ theme }) => theme.palette.secondary.dark};

  background-color: ${({ theme }) => theme.palette.gray[0]};
`;

export const InfoContainer = styled.View`
  width: 80%;
`;

export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  color: ${({ theme }) => theme.palette.primary.contrast};
  text-transform: uppercase;
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrast};
`;

export const Experience = {
  Container: styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
    margin: ${({ theme }) => theme.layout.spacing(0, 1)};
  `,
  Text: styled(Typography)`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.palette.secondary.light};
  `,
};
