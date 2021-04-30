import styled from 'styled-components/native';

// Components
import UserImage from '../../../../components/UserImage';

export const Container = styled.View`
  margin: ${({ theme }) => theme.layout.spacing(2)};
  padding: ${({ theme }) => theme.layout.spacing(2)};
  border-radius: ${({ theme }) => theme.layout.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.main};
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
  Text: styled.Text`
    color: ${({ theme }) => theme.palette.primary.dark};
    font-style: italic;
  `,
};
