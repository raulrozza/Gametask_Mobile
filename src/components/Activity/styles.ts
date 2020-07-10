import styled, { css } from 'styled-components/native';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
}

interface ButtonProps extends Props {
  disabled: boolean;
}

interface DateText extends Props {
  date: boolean;
}

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}))<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const Title = styled.Text<Props>`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.secondary};
  width: 100%;
  padding: 4px;
  text-align: center;
  text-transform: capitalize;
`;

export const Paragraph = styled.Text<Props>`
  text-align: center;
  color: ${({ theme }) => theme.primaryContrast};
  width: 100%;
  margin: 16px 0;
  padding: 0 16px;
`;

export const Info = styled.Text<Props>`
  text-align: center;
  color: ${({ theme }) => theme.primaryContrast};
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
  View: styled.View<Props>`
    width: 100%;
    border-radius: 5px;
    padding: 12px;
    ${({ theme }) => css`
      background-color: ${theme.primary};
      border: 1px solid ${theme.primaryShade};
    `}
  `,
  Text: styled.Text<DateText>`
    color: ${({ theme, date }) =>
      date ? theme.primaryContrast : theme.primaryShade};
  `,
};

export const Errors = {
  Field: styled.View`
    background-color: 'rgb(253, 57, 57)';
    padding: 7px 5px 2px;
    margin: -5px 0 10px;
    border-radius: 5px;
    z-index: -5;
  `,
  Text: styled.Text`
    color: #fff;
  `,
};

export const Footer = {
  Container: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 8px;
  `,
  Back: styled.TouchableOpacity<Props>`
    border-width: 1px;
    padding: 8px;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.secondary};
    width: 100px;
    align-items: center;
  `,
  BackText: styled.Text<Props>`
    color: ${({ theme }) => theme.secondary};
  `,
  Confirm: styled.TouchableOpacity<ButtonProps>`
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.secondaryTransparent : theme.secondary};
    width: 100px;
    align-items: center;
  `,
  ConfirmText: styled.Text<Props>`
    color: ${({ theme }) => theme.secondaryContrast};
  `,
};
