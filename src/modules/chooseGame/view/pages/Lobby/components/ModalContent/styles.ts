import styled, { css } from 'styled-components/native';

// Components
import { MaterialIcons } from '@expo/vector-icons';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  height: 60%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.Text`
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-bottom: ${({ theme }) => theme.layout.spacing(12)};
  font-family: ${({ theme }) => theme.typography.family.title.bold};
  font-size: 24px;
`;

export const PasteGroup = {
  Container: styled.View`
    flex-direction: row;
    align-items: stretch;

    height: 48px;
    width: 80%;
    max-width: 300px;

    overflow: hidden;

    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    border-radius: ${({ theme }) => theme.layout.borderRadius.small};

    margin-bottom: 48px;
  `,
  Input: styled.TextInput`
    padding: ${({ theme }) => theme.layout.spacing(0, 3)};
    flex: 1;
    ${({ theme }) => css`
      background-color: ${theme.palette.primary.dark};
      color: ${theme.palette.primary.contrast};
    `}
  `,
  Button: styled.TouchableOpacity`
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.main};
  `,
  Icon: styled(MaterialIcons)`
    font-size: 24px;
    color: ${({ theme }) => theme.palette.secondary.main};
  `,
};