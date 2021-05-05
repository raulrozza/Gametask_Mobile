import styled from 'styled-components/native';
import { Typography } from 'shared/view/components';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(1)};
  text-align: center;
  text-transform: capitalize;
`;

export const Paragraph = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  width: 100%;
  margin: ${({ theme }) => theme.layout.spacing(4, 0)};
  padding: ${({ theme }) => theme.layout.spacing(0, 4)};
`;

export const Info = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(0, 4)};
  font-style: italic;
`;

export const Form = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(4)};
`;
