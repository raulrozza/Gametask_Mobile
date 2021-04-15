import styled, { css } from 'styled-components/native';

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
  padding: 4px;
  text-align: center;
  text-transform: capitalize;
`;

export const Paragraph = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  width: 100%;
  margin: 16px 0;
  padding: 0 16px;
`;

export const Info = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  width: 100%;
  padding: 0 16px;
  font-style: italic;
`;

export const Form = {
  Container: styled.View`
    width: 100%;
    padding: 16px;
  `,
  InputGroup: styled.View`
    margin-bottom: 8px;
  `,
};

export const DateInput = {
  View: styled.View`
    width: 100%;
    border-radius: 5px;
    padding: 12px;
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
    margin-top: 8px;
  `,
  Back: styled.TouchableOpacity`
    border-width: 1px;
    padding: 8px;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.palette.secondary.main};
    width: 100px;
    align-items: center;
  `,
  BackText: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.main};
  `,
  Confirm: styled.TouchableOpacity<FooterConfirmProps>`
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.secondaryTransparent : theme.palette.secondary.main};
    width: 100px;
    align-items: center;
  `,
  ConfirmText: styled.Text`
    color: ${({ theme }) => theme.palette.secondary.contrast};
  `,
};
