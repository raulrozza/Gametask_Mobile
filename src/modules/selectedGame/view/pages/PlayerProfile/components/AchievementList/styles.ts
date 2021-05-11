import { Typography } from 'shared/view/components';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  border-radius: 5px;
  padding: ${({ theme }) => theme.layout.spacing(2)};
  margin-top: ${({ theme }) => theme.layout.spacing(2)};
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  background-color: ${({ theme }) => theme.palette.primary.main};
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled(Typography)`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  font-weight: bold;
  font-size: 36px;
  margin: ${({ theme }) => theme.layout.spacing(2, 0)};
`;
