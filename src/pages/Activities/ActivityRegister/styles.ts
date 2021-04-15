import styled, { css } from 'styled-components/native';
import { transparentize } from 'polished';

// Types
import { DateInputTextProps, FooterConfirmProps } from './types';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(1)};
  text-align: center;
  text-transform: capitalize;
`;

export const Paragraph = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  width: 100%;
  margin: ${({ theme }) => theme.layout.spacing(4, 0)};
  padding: ${({ theme }) => theme.layout.spacing(0, 4)};
`;

export const Info = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(0, 4)};
  font-style: italic;
`;

export const Form = {
  Container: styled.View`
    width: 100%;
    padding: ${({ theme }) => theme.layout.spacing(4)};
  `,
  InputGroup: styled.View`
    margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
  `,
};

export const DateInput = {
  View: styled.View`
    width: 100%;
    border-radius: ${({ theme }) => theme.layout.borderRadius.small};
    padding: ${({ theme }) => theme.layout.spacing(3)};
    ${({ theme }) => css`
      background-color: ${theme.palette.primary.main};
      border: 1px solid ${theme.palette.primary.dark};
    `}
  `,
  Text: styled.Text<DateInputTextProps>`
    color: ${({ theme, date }) =>
      date ? theme.palette.primary.contrast : theme.palette.primary.dark};
  `,
};

export const Footer = {
  Container: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: ${({ theme }) => theme.layout.spacing(2)};
  `,
  Back: styled.TouchableOpacity`
    border-width: 1px;
    padding: ${({ theme }) => theme.layout.spacing(2)};
    border-radius: ${({ theme }) => theme.layout.borderRadius.small};
    border-color: ${({ theme }) => theme.palette.secondary.main};
    width: 100px;
    align-items: center;
  `,
  BackText: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.main};
  `,
  Confirm: styled.TouchableOpacity<FooterConfirmProps>`
    padding: ${({ theme }) => theme.layout.spacing(2)};
    border-radius: ${({ theme }) => theme.layout.borderRadius.small};
    background-color: ${({ theme, disabled }) =>
      disabled
        ? transparentize(0.3, theme.palette.secondary.main)
        : theme.palette.secondary.main};
    width: 100px;
    align-items: center;
  `,
  ConfirmText: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.contrast};
  `,
};
