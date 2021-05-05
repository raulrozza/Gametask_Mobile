import { Typography } from 'shared/view/components';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.palette.primary.main};
  flex: 1;
  padding: ${({ theme }) => theme.layout.spacing(3)};
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 46px;
`;

export const PageTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrast};
  font-weight: bold;
  font-size: 24px;
  height: 32px;
  width: 100%;
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrast};
  margin: ${({ theme }) => theme.layout.spacing(4, 0)};
  text-align: center;
`;

export const ActivityContainer = {
  View: styled.View`
    width: 100%;
  `,
  Title: styled(Typography)`
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: bold;
    text-align: center;
    font-size: 18px;
  `,
};
