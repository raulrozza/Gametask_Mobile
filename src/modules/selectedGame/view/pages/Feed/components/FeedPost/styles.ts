import { UserImage } from 'modules/selectedGame/view/components';
import { Typography } from 'shared/view/components';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: ${({ theme }) => theme.layout.spacing(2)};
  padding: ${({ theme }) => theme.layout.spacing(2)};
  border-radius: ${({ theme }) => theme.layout.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.gray[0]};
  overflow: hidden;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const Image = styled(UserImage)`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  margin-right: ${({ theme }) => theme.layout.spacing(2)};
`;

export const Info = styled.View`
  background-color: blue;
`;

export const Row = styled.View`
  flex: 1;
`;

export const Meta = {
  Container: styled.View`
    width: 100%;
    margin-top: ${({ theme }) => theme.layout.spacing(1)};
    flex-direction: row;
    justify-content: flex-end;
  `,
  Text: styled(Typography)`
    color: ${({ theme }) => theme.palette.gray[300]};
    font-style: italic;
  `,
};
