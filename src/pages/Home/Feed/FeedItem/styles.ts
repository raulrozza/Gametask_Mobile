import styled from 'styled-components/native';

// Components
import UserImage from '../../../../components/UserImage';

export const Container = styled.View`
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
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
  margin-right: 8px;
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
    margin-top: 4px;
    flex-direction: row;
    justify-content: flex-end;
  `,
  Text: styled.Text`
    color: ${({ theme }) => theme.palette.primary.dark};
    font-style: italic;
  `,
};
