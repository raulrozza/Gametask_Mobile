import { Picker } from '@react-native-picker/picker';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.palette.secondary.contrast};
    margin: 0 auto;
    width: 80%;
    height: 52px;

    padding: ${theme.layout.spacing(3)};
  `}
`;

export const Select = styled(Picker)`
  ${({ theme }) => css`
    color: ${theme.palette.secondary.main};
    height: 100%;
    width: 100%;
  `}
`;
