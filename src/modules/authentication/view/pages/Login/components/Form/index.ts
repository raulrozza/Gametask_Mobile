import styled, { css } from 'styled-components/native';

interface FormProps {
  active: boolean;
}

const Form = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}))<FormProps>`
  margin: ${({ theme }) => theme.layout.spacing(4, 0)};

  ${({ active }) =>
    active
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;

export default Form;
