import styled, { css } from 'styled-components/native';

// Icons
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.palette.primary.dark};
    border-top-width: 1px;
    border-color: ${theme.palette.primary.dark};
  `}
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.palette.secondary.light};
  font-size: 24px;
  font-weight: bold;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.palette.secondary.light};
    font-size: 24px;
    font-weight: bold;
  `}
`;

export const ThinText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.palette.secondary.light};
    font-size: 18px;
  `}
`;
