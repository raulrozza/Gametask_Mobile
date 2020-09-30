import styled, { css } from 'styled-components/native';

// Icons
import { Feather } from '@expo/vector-icons';

// Types
import { BottomOptionTextProps } from './types';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  background-color: ${({ theme }) => theme.primaryIntense};
  min-height: 100%;
`;

export const BottomOption = {
  Button: styled.TouchableOpacity`
    width: 100%;
    height: 48px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${({ theme }) => css`
      background-color: ${theme.primaryLowShade};
      border-top-width: 1px;
      border-color: ${theme.primaryShade};
    `}
  `,
  Icon: styled(Feather)`
    color: ${({ theme }) => theme.secondaryIntense};
    font-size: 24px;
    font-weight: bold;
  `,
  Text: styled.Text<BottomOptionTextProps>`
    ${({ theme, thin = false }) => css`
      color: ${theme.secondaryIntense};
      font-size: ${thin ? '18px' : '24px'};
      ${!thin &&
      css`
        font-weight: bold;
      `}
    `}
  `,
};
